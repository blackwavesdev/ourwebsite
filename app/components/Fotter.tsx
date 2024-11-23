"use client";
import axios from "axios";
import React, { useState } from "react";
const Fotter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("https:/", { email: email });
      setMessage(response.data);
      setEmail("");
    } catch (error) {
      console.log(error);

      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-black  h-[100dvh] flex flex-col w-full items-center">
      <div className="flex flex-col gap-y-3 py-8 w-5/6  mx-auto ">
        <div className="flex mb-6  border-l  border-main p-3">
          {" "}
          <div className="flex flex-col gap-5">
            <h1 className="text-main text-2xl font-extrabold">Call us now</h1>
            <p className="text-white mt-auto font-bold ">
              contact us: 213133212321
            </p>
          </div>
        </div>
        <div className="flex   mb-6 border-l border-main p-3">
          {" "}
          <div className="flex flex-col gap-6 ">
            <h1 className="text-main text-2xl font-extrabold ">
              COME VISIT US
            </h1>
            <p className="text-white font-bold ">
              Office Address: Portsaid Meetghamer, Al Dakahlia, Egypt
            </p>
          </div>
        </div>
        <div className="flex mb-6 border-l border-main p-3">
          {" "}
          <div className="flex flex-col gap-6">
            <h1 className="text-main text-2xl font-extrabold">
              SEND A MESSAGE
            </h1>
            <p className="text-white font-bold break-words max-w-sm">
              Email:{" "}
              <a
                href="mailto:mahmoudelhosary288@gmail.com"
                className="text-white break-words break-all max-w-sm inline-block"
              >
                mahmoudelhosary288@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-5/6 mx-auto py-8 gap-y-3 ">
        <h1 className="text-main mb-1 border-b border-main font-extrabold text-2xl">
          OTHER PAGES
        </h1>
        <ul className="flex text-white text-sm font-extrabold mt-1 w-full justify-between ">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-5/6 mx-auto">
        <h1 className="text-main mb-1  font-extrabold text-2xl">NEWSLETTER</h1>
        <form
          onSubmit={handleSubmit}
          className="flex gap-x-5 items-center mt-3"
        >
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="name@example.com"
            className="p-2 rounded-md min-w-24"
          />
          <button
            type="submit"
            className="p-2 bg-main rounded-md font-semibold hover:bg-white !duration-500"
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "SUBSCRIBE"}
          </button>
          {message && (
            <p
              className={`mt-4 text-center text-sm ${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </form>
        <p className="text-white text-sm mt-2">
          Get the scoop & stay in the loop! Sign up for email alerts to get
          exclusive offers and deals.
        </p>
      </div>
    </section>
  );
};
export default Fotter;

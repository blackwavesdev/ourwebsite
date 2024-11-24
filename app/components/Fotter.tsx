"use client";
import axios from "axios";
import React, { useState } from "react";
const Fotter = () => {
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // setMessage("");
    // setIsLoading(true);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      // setMessage("Please enter a valid email.");
      // setIsLoading(false);
      console.log("error");

      return;
    }

    try {
      const response = await axios.post("https:/", { email: email });
      // setMessage(response.data);
      console.log(response.data);

      // setEmail("");
    } catch (error) {
      console.log(error);
      // setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-black  h-[100dvh] flex flex-col items-center overflow-scroll md:justify-center ">
      <div className=" md:flex md:flex-row w-4/5 mt-4 gap-4 ">
        <div className="flex flex-col">
          <div className="flex mb-3  border-l  border-main px-3">
            {" "}
            <div className="flex flex-col gap-2">
              <h1 className="text-main text-2xl font-extrabold">Call us now</h1>
              <p className="text-white mt-auto font-bold ">
                contact us: 213133212321
              </p>
            </div>
          </div>
          <div className="flex mb-3 border-l border-main px-3">
            {" "}
            <div className="flex flex-col gap-2 ">
              <h1 className="text-main text-2xl font-extrabold ">
                COME VISIT US
              </h1>
              <p className="text-white font-bold ">
                Office Address: Portsaid Meetghamer, Al Dakahlia, Egypt
              </p>
            </div>
          </div>
          <div className="flex mb-6 border-l border-main px-3">
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
        <div className="flex flex-col  mx-auto py-4 gap-y-1  ">
          <h1 className="text-main mb-1 border-b border-main font-extrabold text-2xl">
            OTHER PAGES
          </h1>
          <ul className="flex text-white text-sm font-extrabold mt-1  justify-between md:flex-col md:gap-y-4 md:text-lg ">
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
        <div className="flex flex-col  mx-auto py-4 ">
          <h1 className="text-main mb-1  font-extrabold text-2xl">
            NEWSLETTER
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex gap-x-2 items-center mt-2 w-full "
          >
            <input
              id="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@example.com"
              className="p-2 rounded-md min-w-24"
            />
            <button
              type="submit"
              className="p-2 bg-main rounded-md font-semibold hover:bg-white !duration-500"
              // disabled={isLoading}
            >
              {/* {isLoading ? "Loading" : "SUBSCRIBE"} */}
              SUBSCRIBE
            </button>
            {/* {message && (
            <p
              className={`mt-4 text-center text-sm ${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )} */}
          </form>
          <p className="text-white text-sm mt-4 ">
            Get the scoop & stay in the loop! Sign up for email alerts to get
            exclusive offers and deals.
          </p>
          <div className="flex mt-4 w-full justify-evenly">
            <a href="">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                viewBox="-5 0 20 20"
              >
                <g
                  id="Page-1"
                  fill="none"
                  fillRule="evenodd"
                  stroke="none"
                  strokeWidth="1"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    fill="#ffffff"
                    transform="translate(-385 -7399)"
                  >
                    <g id="icons" transform="translate(56 160)">
                      <path
                        id="facebook-[#176]"
                        d="M335.821 7259v-9h2.733l.446-4h-3.179v-1.948c0-1.03.027-2.052 1.466-2.052h1.458v-2.86c0-.043-1.253-.14-2.52-.14-2.645 0-4.302 1.657-4.302 4.7v2.3H329v4h2.923v9z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a href="">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  fillRule="evenodd"
                  d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#ffffff"
                  d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
                ></path>
                <path
                  fill="#ffffff"
                  fillRule="evenodd"
                  d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622M13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552"
                ></path>
                <path
                  fill="#ffffff"
                  fillRule="evenodd"
                  d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11m-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full py-[0.05px] bg-blue-900 md:hidden"></div>
      </div>
      <div className=" mt-4 flex flex-col items-center mx-auto">
        <p className="space-x-2 text-white text-center">
          <a href="/policy" className="hover:underline">
            Privacy Policy
          </a>
          <span>||</span>
          <a href="/returnpolicy" className="hover:underline">
            Return Policy
          </a>
        </p>
        <p className="mt-2 text-center text-white">
          {" "}
          © 2025!{" "}
          <a className="text-two  max-w-sm" href="">
            BW
          </a>
          , Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};
export default Fotter;

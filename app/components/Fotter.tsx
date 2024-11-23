import React from "react";
const Fotter = () => {
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
        <form className="flex gap-x-5 items-center mt-3">
          <input
            type="email"
            placeholder="name@example.com"
            className="p-2 rounded-md min-w-24"
          />
          <button
            type="submit"
            className="p-2 bg-main rounded-md font-semibold hover:bg-white !duration-500"
          >
            SUBSCRIPE
          </button>
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

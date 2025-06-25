"use client";
import axios from "axios";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const localRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false); // Tracks if animation has already played

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email.");
      setIsLoading(false);
      console.log("error");

      return;
    }

    try {
      const response = await axios.post("https:/", { email: email });
      setMessage(response.data);
      console.log(response.data);

      setEmail("");
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong. Please try again.");
    }
  };
  useImperativeHandle(ref, () => localRef.current!);
  useEffect(() => {
    const element = localRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setTimeout(() => {
            setIsInView(true);
            hasAnimated.current = true; // Mark animation as played
          }, 400);
          observer.unobserve(element); // Stop observing after entering view
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);
  return (
    <footer
      id="contactus"
      ref={localRef}
      className="bg-black h-dvh pt-20 snap-start text-white py-2 flex flex-col justify-end items-center md:gap-20"
    >
      <div
        className={`md:flex md:flex-row justify-around md:items-start  flex flex-col w-11/12 mt-4 h-full md:h-fit   ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col  gap-1">
          <div className="flex mb-1 border-l border-main px-3">
            <div className="flex flex-col gap-2">
              <h1 className="text-main text-2xl">Call us now</h1>
              <a
                href="https://wa.me/01055800875?text=Hello%20there!%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-row justify-center gap-2 bg-transparent text-white px-10 py-2 rounded-md hover:bg-main hover:text-black duration-300     transition-all ease-out  border-opacity-50  border-2 bg-black outline-1 outline-main border-main font-bold cursor-pointer hover:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552"></path>
                  <path
                    fillRule="evenodd"
                    d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11m-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="flex mb-1 border-l border-main px-3">
            {/* <div className="flex flex-col gap-2">
              <h1 className="text-main text-2xl ">
                COME VISIT US
              </h1>
              <p className="text-white font-bold">
                Office Address: Portsaid Meetghamer, Al Dakahlia, Egypt
              </p>
            </div> */}
          </div>
          <div className="flex mb-3 border-l border-main px-3">
            <div className="flex flex-col gap-2">
              <h1 className="text-main text-2xl ">SEND A MESSAGE</h1>
              <p className="text-white font-bold break-words max-w-sm">
                <a
                  href="mailto:support@blackwaveseg.com"
                  className="text-white break-words break-all max-w-sm inline-block"
                >
                  support@blackwaveseg.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <h1 className="text-main mb-1 border-b border-main  text-2xl">
            OTHER PAGES
          </h1>
          <ul className="flex text-white text-sm  mt-1 justify-between md:flex-col md:gap-y-4 md:text-lg">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            {/* <li>
              <a href="#">Categories</a>
            </li> */}
            {/* <li>
              <a href="/contactus">Contact Us</a>
            </li> */}
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-main mb-1  text-2xl">NEWSLETTER</h1>
          <form
            onSubmit={handleSubmit}
            className="flex gap-x-2 items-center mt-2 w-full"
          >
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@example.com"
              className="p-2 rounded-md min-w-24 text-black"
            />
            <button
              type="submit"
              className="p-2 bg-main text-black rounded-md font-semibold hover:bg-white !duration-500"
              disabled={isLoading}
            >
              SUBSCRIBE
            </button>
          </form>
          <div>{message}</div>
          <p className="text-white text-sm mt-4">
            Get the scoop & stay in the loop! Sign up for email alerts to get
            exclusive offers and deals.
          </p>
          <div className="flex mt-4 w-full justify-evenly"></div>
        </div>
      </div>
      <div
        className={`mt-4 flex flex-col items-center mx-auto pt-4 border-t-[0.05px] border-white w-full ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="space-x-2 text-white text-center">
          <a href="/policy" className="hover:underline text-main">
            Privacy Policy
          </a>
          {/* <span>||</span>
          <a href="/returnpolicy" className="hover:underline">
            Return Policy
          </a> */}
        </p>
        <p className="mt-2 text-center text-white">
          © 2025
          <span> </span>
          <a className="text-two max-w-sm text-main" href="">
            BW
          </a>
          , Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";
export default Footer;

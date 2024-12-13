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
  const [isInView, setIsInView] = useState(false);
  const localRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      console.error("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post("https:/", { email });
      console.log("Response:", response.data);
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
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
            hasAnimated.current = true;
          }, 400);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="contactus"
      ref={localRef}
      className="bg-black snap-start text-white h-dvh flex items-end pt-20"
    >
      <div
        className={`  transition-all duration-700 flex flex-col justify-between h-full ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="">
          <div className="">
            <div className="">
              <h1 className="">Call us now</h1>
              <a
                href="https://wa.me/01065065760?text=Hello%20there!%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center max-w-sm gap-2 bg-transparent text-white px-10 py-2 rounded-md hover:bg-main hover:text-black transition-all duration-300 border-2 border-main font-bold cursor-pointer hover:scale-95"
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
          <div className="border-l border-main px-3">
            <h1 className="text-main text-2xl font-extrabold">
              SEND A MESSAGE
            </h1>
            <p className="text-white font-bold">
              <a
                href="mailto:mahmoudelhosary288@gmail.com"
                className="break-words"
              >
                mahmoudelhosary288@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col mx-auto gap-2">
          <h1 className="text-main mb-2 border-b border-main font-extrabold text-2xl">
            OTHER PAGES
          </h1>
          <ul className="flex md:flex-col text-white text-lg font-extrabold gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mx-auto space-y-4">
          <h1 className="text-main font-extrabold text-2xl">NEWSLETTER</h1>
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 items-center w-full"
          >
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="name@example.com"
              className="p-2 rounded-md text-black min-w-24"
            />
            <button
              type="submit"
              className="p-2 bg-main text-black rounded-md font-semibold hover:bg-white transition duration-500"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-white text-sm">
            Get the scoop & stay in the loop! Sign up for email alerts to get
            exclusive offers and deals.
          </p>
        </div>
        <div
          className={`mt-4 flex flex-col items-center pt-4 border-t border-blue-700 w-full transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-white text-center">
            <a href="/policy" className="hover:underline text-main">
              Privacy Policy
            </a>
          </p>
          <p className="mt-2 text-white text-center">
            © 2025{" "}
            <a className="text-main" href="">
              BW
            </a>
            , Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;

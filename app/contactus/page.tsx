import React from "react";
import Image from "next/image";
import Black from "../../Public/logo-bw.png";

const Contactus = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          What can we do for you?
        </h2>
        <p className=" mb-6 text-white">
          Talk to us about your project and let's start building it together!
        </p>
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-6">
            <form className="space-y-4 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full border-black  rounded-lg shadow-sm  p-2"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-mail*
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tell us about your project*
                </label>
                <textarea
                  id="project"
                  required
                  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="files"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional files (optional)
                </label>
                <input
                  id="files"
                  type="file"
                  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="agreement"
                  type="checkbox"
                  required
                  className="h-4 w-4  border-gray-300 rounded"
                />
                <label
                  htmlFor="agreement"
                  className="ml-2 text-sm text-gray-600"
                >
                  I agree to the processing of my personal data...
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-2 rounded-lg shadow-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section: Info */}
          <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center p-6">
            <div className="mb-6">
              <Image
                src={Black}
                alt="Black Waves Logo"
                width={300}
                className="rounded-full border-white border-2"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Black Waves</h3>
              <p className="text-sm ">
                Digital Marketing Agency, SEO Solutions, Innovative Web
                Development
              </p>
              <p className="mt-4">
                <a
                  href="mailto:info@blackwaves.com"
                  className="text-green-500 underline"
                >
                  info@blackwaves.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactus;

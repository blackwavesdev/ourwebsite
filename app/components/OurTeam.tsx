"use client";
import Image from "next/image";
import omar from "../../Public/1.png";
import hosary from "../../Public/2.png";
import ibrahim from "../../Public/3.png";
import ghareeb from "../../Public/4.png";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const teamMembers = [
  {
    name: "Omar Ghandour",
    role: "Lead FullStack Developer",
    image: omar,
    socials: {
      facebook: "https://www.facebook.com/share/183pVEiGMV/?mibextid=wwXIfr",
      linkedin: "https://www.linkedin.com/in/omar-mousa-378b98261",
      instagram: "https://www.instagram.com/omarrghandour",
    },
  },
  {
    name: "Mahmoud Elhosary",
    role: "FrontEnd Developer & UI/UX",
    image: hosary,
    socials: {
      facebook:
        "https://www.facebook.com/mahmoud.elhosary.79219?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/mahmoud-elhosary-776250313",
      instagram: "https://www.instagram.com/mahmoudelhosary_",
    },
  },

  {
    name: "Mohammed Ghareeb",
    role: "FrontEnd Developer",
    image: ghareeb,
    socials: {
      facebook: "https://m.facebook.com/Iam.mourinho.1088/",
      linkedin: "https://www.linkedin.com/in/mohamed-ghareeb-0ab082334/",
      instagram: "https://www.instagram.com/ghareeb.oo/",
    },
  },
  {
    name: "Ibrahim Salah",
    role: "FrontEnd developer",
    image: ibrahim,
    socials: {
      facebook: "https://www.facebook.com/ibrahem.salah.140/",
      linkedin:
        "https://www.linkedin.com/in/ibrahim-salah-94417921b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/ibrahem17_",
    },
  },
];
const OurTeam = forwardRef<HTMLDivElement>((_, ref) => {
  const [isInView, setIsInView] = useState(false);
  const localRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false); // Tracks if animation has already played

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
    <section
      id="OurTeam"
      ref={localRef}
      className="overflow-y-hidden center bg-black h-[100dvh] snap-start pt-10 text-white font-bold transition-all duration-700"
    >
      <div
        className={` w-full md:w-[85%] m-auto text-center flex flex-col  justify-center  h-full transition-all  duration-700  ${
          isInView
            ? "opacity-100 translate-y-0  md:translate-y-6 lg:translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`xl:text-7xl text-4xl sm:text-5xl md:text-6xl text-main font-bold mb-8 lg:mb-0 xl:mb-4  ${
            isInView
              ? "opacity-100 translate-y-0 xl:translate-y-[-90px]"
              : "opacity-0 translate-y-10"
          }`}
        >
          {" "}
          Our <span className="text-white">Team</span>
        </h2>
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-2 px-2 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card bg-transparent  p-2 text-white  rounded-lg shadow-lg text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                loading="lazy"
                className={`mx-auto rounded  bg-black  mb-2`}
              />
              <h3 className="text-sm md:text-base text-gray-white font-semibold xl:text-lg">
                {member.name}
              </h3>
              <p className="text-sm text-gray-100  text-opacity-50 font-medium ">
                {member.role}
              </p>
              <div className="flex justify-center mt-4 space-x-5 my-aut">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="-5 0 20 20"
                  >
                    <g
                      id="Page-1"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        fill="#BEBFBE"
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
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="0 0 20 20"
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
                        fill="#C7C7C7"
                        transform="translate(-180 -7479)"
                      >
                        <g id="icons" transform="translate(56 160)">
                          <path
                            id="linkedin-[#161]"
                            d="M144 7339h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V7339h-4v-13h4v1.462s1.255-2.202 4.083-2.202 4.917 1.726 4.917 5.298zm-17.558-15.079a2.45 2.45 0 0 1-2.442-2.461 2.45 2.45 0 0 1 2.442-2.46 2.45 2.45 0 0 1 2.441 2.46 2.45 2.45 0 0 1-2.441 2.461M124 7339h5v-13h-5z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer "
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="py-[0.1rem]"
                  >
                    <path
                      fill="#C7C7C7"
                      fillRule="evenodd"
                      d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#C7C7C7"
                      d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
                    ></path>
                    <path
                      fill="#C7C7C7"
                      fillRule="evenodd"
                      d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622M13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

OurTeam.displayName = "OurTeam";

export default OurTeam;

import Image from "next/image";
import Me from "../../Public/me-modified.png";
export default async function OurTeam() {
  const teamMembers = [
    {
      name: "Luna Turner",
      role: "FOUNDER",
      image: Me,
      socials: {
        facebook: "https://www.facebook.com/luna",
        linkedin: "https://www.linkedin.com/in/luna",
        instagram: "https://www.instagram.com/luna",
      },
    },
    {
      name: "Bryant Hall",
      role: "DEVELOPER",
      image: Me,
      socials: {
        facebook: "https://www.facebook.com/bryant",
        linkedin: "https://www.linkedin.com/in/bryant",
        instagram: "https://www.instagram.com/bryant",
      },
    },
    {
      name: "Hope Watkins",
      role: "DESIGNER",
      image: Me,
      socials: {
        facebook: "https://www.facebook.com/hope",
        linkedin: "https://www.linkedin.com/in/hope",
        instagram: "https://www.instagram.com/hope",
      },
    },
    {
      name: "Alex Johnson",
      role: "MARKETER",
      image: Me,
      socials: {
        facebook: "https://www.facebook.com/alex",
        linkedin: "https://www.linkedin.com/in/alex",
        instagram: "https://www.instagram.com/alex",
      },
    },
  ];
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="team-section text-center py-16">
        <h2 className="text-5xl text-main font-bold mb-10">
          {" "}
          Our <span className="text-white">Team</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 px-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card bg-gray-950 p-6 rounded-lg shadow-lg text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className={`mx-auto rounded-full border-2 border-main mb-4`}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              <div className="flex justify-center mt-4 space-x-4 my-auto">
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
                      fill="#0033ff"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        fill="#0033ff"
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
                        fill="#0033ff"
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
                      fill="#0033ff"
                      fillRule="evenodd"
                      d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#0033ff"
                      d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
                    ></path>
                    <path
                      fill="#0033ff"
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
      </section>
    </div>
  );
}

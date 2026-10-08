import Image from "next/image";

const linkGroups = [
  [
    {
      title: "Student Services",
      links: [
        "Admission Support",
        "Visa Services",
        "Health Insurance",
        "Student Accommodation",
      ],
    },
    { title: "Resources", links: ["Blogs", "Upcoming Events", "Careers"] },
  ],
  [
    {
      title: "Study Destinations",
      links: ["Australia", "UK", "Canada", "Germany"],
    },
    {
      title: "About PFEC Global",
      links: [
        "About PFEC Sri Lanka",
        "Our Leadership",
        "Awards & Achievements",
        "Director’s Message",
        "Testimonials",
        "Contact Us",
      ],
    },
  ],
  [
    {
      title: "Scholarships",
      links: ["Scholarships in Australia", "Scholarships in the UK"],
    },
  ],
];

const offices = [
  {
    city: "Sydney",
    address: "Suite 402, Level 4/447 Kent St, Sydney NSW 2000, Australia",
    phone: "+61 02 8378 4282",
  },
  {
    city: "Melbourne",
    address: "11/50 Queen St, Melbourne VIC 3000, Australia",
    phone: "+61 03 9620 1773",
  },
  {
    city: "Adelaide",
    address: "Level M/90 King William St, Adelaide SA 5000, Australia",
    phone: "+61 08 7099 2258",
  },
  {
    city: "Perth",
    address:
      "St Martins Tower, Level 27, Room 2704, 44 St Georges Terrace, Perth",
    phone: "+61 08 6266 8335",
  },
];

const socials = [
  {
    name: "LinkedIn",
    color: "bg-[#1d9bd1]",
    icon: (
      <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.2c0-3-1.6-4.9-4.2-4.9-1.3 0-2.3.6-2.9 1.5V8.5H10V20h2.9v-6c0-1.6.8-2.6 2.1-2.6s2 .9 2 2.6v6H20v-6.8z" />
    ),
  },
  {
    name: "YouTube",
    color: "bg-[#e8402a]",
    icon: (
      <path
        fillRule="evenodd"
        d="M7 5.5h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3zm3.2 3.7v5.6l5-2.8-5-2.8z"
      />
    ),
  },
  {
    name: "Facebook",
    color: "bg-[#1f3f8f]",
    icon: (
      <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9z" />
    ),
  },
  {
    name: "Instagram",
    color: "bg-[linear-gradient(45deg,#f9ce34,#ee2a7b_50%,#6228d7)]",
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M8 4.5h8A3.5 3.5 0 0 1 19.5 8v8a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 16V8A3.5 3.5 0 0 1 8 4.5zm4 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.6-1.3v.01"
      />
    ),
  },
  {
    name: "Twitter",
    color: "bg-[#1da1e6]",
    icon: (
      <path
        transform="translate(3.6 3.6) scale(0.7)"
        d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"
      />
    ),
  },
];

function Contact({ address, phone }) {
  const icon = "mt-0.5 h-5 w-5 shrink-0 text-accent";
  return (
    <address className="space-y-2.5 not-italic">
      <p className="flex gap-2.5">
        <svg
          viewBox="0 0 24 24"
          className={icon}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        {address}
      </p>
      <p className="flex gap-2.5">
        <svg
          viewBox="0 0 24 24"
          className={icon}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 4h3.5l1.5 4.5-2 1.5a11 11 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
        <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:underline">
          {phone}
        </a>
      </p>
    </address>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[15px] text-white xl:text-[1.02rem]">
      <div className="mx-auto max-w-[110.625rem] px-4 pb-12 pt-12 sm:px-8 lg:px-12 xl:pb-[4.5rem] xl:pt-[4.5rem]">
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] xl:grid-cols-[27.9rem_22.75rem_22.75rem_1fr] xl:gap-0">
          <div className="sm:col-span-2 lg:col-span-1 xl:pr-24">
            <Image
              src="/images/pfec_footer_logo.webp"
              alt="PFEC Global - Study Abroad | Visa"
              width={304}
              height={106}
              className="h-auto w-[9.75rem]"
            />
            <p className="mt-6 max-w-[22rem] leading-snug text-neutral-400">
              Since the establishment of PFEC Global in 2006, we have been
              offering higher education consultancy services to students who are
              dreaming of a quality life abroad.
            </p>
            <div className="mt-5 max-w-[20rem] text-neutral-200">
              <Contact
                address="05 Col TG Jayawardena Mawatha, Colombo 00300, Sri Lanka"
                phone="+94 77 734 3234"
              />
            </div>

            <h3 className="mt-6 text-lg font-bold text-accent xl:text-[1.2rem]">
              Follow Us
            </h3>
            <ul className="mt-3 flex gap-3">
              {socials.map(({ name, color, icon }) => (
                <li key={name}>
                  <a
                    href="#"
                    aria-label={name}
                    className={`flex h-9 w-9 items-center justify-center rounded-md text-white transition-opacity hover:opacity-80 ${color}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {linkGroups.map((column) => (
            <div key={column[0].title} className="space-y-10 xl:space-y-[3rem]">
              {column.map(({ title, links }) => (
                <nav key={title} aria-label={title}>
                  <h3 className="text-lg font-bold text-accent xl:text-[1.2rem]">
                    {title}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:text-accent">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-neutral-500 pt-6 xl:mt-[4.8rem]">
          <h2 className="text-center text-xl font-bold text-accent xl:text-[1.5rem]">
            PFEC Global Offices
          </h2>
          <ul className="mt-7 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {offices.map(({ city, address, phone }) => (
              <li key={city}>
                <h3 className="mb-2 font-bold text-accent">{city}</h3>
                <div className="text-neutral-200">
                  <Contact address={address} phone={phone} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-neutral-500 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 PFEC Global | All Rights Reserved</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-2">
            {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map(
              (link) => (
                <li key={link}>
                  <a href="#" className="hover:text-accent">
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}

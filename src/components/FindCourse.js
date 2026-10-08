import Image from "next/image";
import Reveal from "./Reveal";

const ART = "/images/find_course_img";

// Listed column by column, the way the desktop grid fills.
const courses = [
  {
    name: "Engineering",
    icon: <path d="M4 15a8 8 0 0 1 16 0M3 15h18v3H3zM10 7.3V11M14 7.3V11" />,
  },
  {
    name: "Business and Management",
    icon: <path d="M4 8h16v11H4zM9 8V5h6v3M4 13h16M11 13v2h2v-2" />,
  },
  {
    name: "Information Technology",
    icon: (
      <path d="M4 5h16v11H4zM8 20h8M12 16v4M9 9l-2 1.5L9 12M15 9l2 1.5-2 1.5" />
    ),
  },
  {
    name: "Environmental Sciences",
    icon: <path d="M5 19C5 10 10 5 19 5c0 9-5 14-14 14zM5 19l8-8" />,
  },
  {
    name: "Architecture & Construction",
    icon: (
      <path d="M5 5h14M6 5v2.5h12V5M8 7.5V18M12 7.5V18M16 7.5V18M5 19h14" />
    ),
  },
  {
    name: "Computer Science",
    icon: <path d="M3 5h18v14H3zM10 10l-2 2 2 2M14 10l2 2-2 2" />,
  },
  {
    name: "Commercial Pilot",
    icon: <path d="M21 3 3 10l7 3 3 7zM10 13l5-4" />,
  },
  {
    name: "Public Health",
    icon: (
      <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11zM7 12h3l1.5-3 2 5 1-2h2.5" />
    ),
  },
  {
    name: "Tourism and Hospitality",
    icon: (
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3.5 3 3.5 15 0 18M12 3c-3.5 3-3.5 15 0 18" />
    ),
  },
  {
    name: "Nursing",
    icon: <path d="M5 16V9.5c4-3 10-3 14 0V16zM3 16h18M12 9.5v4M10 11.5h4" />,
  },
  {
    name: "STEM Courses",
    icon: (
      <>
        <circle cx="12" cy="12" r="1.2" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(120 12 12)"
        />
      </>
    ),
  },
  {
    name: "Juris Doctor",
    icon: (
      <path d="M12 4v16M7 20h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z" />
    ),
  },
];

export default function FindCourse() {
  return (
    <section className="bg-[#f9f9f9] font-poppins">
      <div className="mx-auto grid max-w-[105rem] items-start gap-10 px-4 py-12 sm:px-8 lg:px-12 xl:grid-cols-[1fr_35rem] xl:pb-16 xl:pt-[5.6rem]">
        <div className="xl:pt-4">
          <h2 className="text-2xl leading-snug text-neutral-900 sm:text-3xl xl:text-[2.5rem]">
            <span className="font-bold text-brand">Find a course</span> that
            fits your future.
          </h2>
          <p className="mt-4 max-w-[56rem] text-base leading-relaxed text-neutral-600 xl:mt-6 xl:text-xl xl:leading-8">
            Whether you already know what you want to study or you&rsquo;re
            still figuring it out, we&rsquo;ll help{" "}
            <br className="hidden xl:block" />
            you explore courses that match your interests, academic background
            and career goals.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3 xl:mt-10 xl:grid xl:grid-flow-col xl:grid-cols-[repeat(3,19.6rem)] xl:grid-rows-4 xl:justify-items-start xl:gap-x-0 xl:gap-y-4">
            {courses.map(({ name, icon }, i) => (
              <Reveal as="li" key={name} y={20} delay={0.04 * i}>
                <div className="group flex cursor-default items-center gap-3 rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-[15px] text-neutral-900 shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition duration-300 ease-out hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-[0_10px_22px_rgba(16,6,148,0.25)] xl:py-3 xl:text-base">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 text-brand transition duration-300 group-hover:scale-110 group-hover:text-sun xl:h-7 xl:w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icon}
                  </svg>
                  {name}
                </div>
              </Reveal>
            ))}
          </ul>

          <p className="mt-10 text-base text-neutral-600 xl:mt-14">
            Sounds good? Join us for a free instant profile assessment today!
          </p>

          <a href="#" className="group mt-5 inline-flex items-center pop-up">
            <span className="rounded-full bg-brand px-6 py-3 text-base font-semibold text-white">
              Book Free Consultation
            </span>
            <span className="flex aspect-square h-12 items-center justify-center rounded-full bg-accent transition-transform group-hover:translate-x-1">
              <svg
                viewBox="0 0 24 24"
                className="h-1/2 w-1/2 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 19L19 5M7 5h12v12" />
              </svg>
            </span>
          </a>
        </div>

        {/* Artwork built from layers so the rings, star and cap can move */}
        <div
          role="img"
          aria-label="Graduation cap resting on a rolled diploma"
          className="relative mx-auto aspect-[1138/1202] w-full max-w-[24rem] xl:max-w-none"
        >
          <Image
            src={`${ART}/Vector.png`}
            alt=""
            width={776}
            height={970}
            className="absolute left-[31%] top-[2.8%] h-auto w-[68%]"
          />
          {[
            {
              src: "Ellipse 7.png",
              size: 1116,
              box: "left-[0.6%] w-[98%]",
              delay: "-2.6s",
            },
            {
              src: "Ellipse 9.png",
              size: 968,
              box: "left-[7.1%] w-[85%]",
              delay: "-1.3s",
            },
            {
              src: "Ellipse 8.png",
              size: 804,
              box: "left-[14.3%] w-[70.6%]",
              delay: "0s",
            },
          ].map(({ src, size, box, delay }, i) => (
            <Image
              key={src}
              src={`${ART}/${src}`}
              alt=""
              width={size}
              height={size}
              style={{ animationDelay: delay, top: `${6.2 + 6.15 * i}%` }}
              className={`absolute h-auto motion-safe:animate-ring ${box}`}
            />
          ))}
          <Image
            src={`${ART}/Vector-1.png`}
            alt=""
            width={328}
            height={328}
            className="absolute left-[2.5%] top-[0.8%] h-auto w-[28.8%] motion-safe:animate-[spin_18s_linear_infinite]"
          />
          <Image
            src={`${ART}/Education 3d 2.png`}
            alt=""
            width={852}
            height={760}
            sizes="(min-width: 1280px) 24vw, 18rem"
            className="absolute left-[12.5%] top-[23.7%] h-auto w-[74.9%] motion-safe:animate-bob"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Flag from "./Flag";

const HERO = "/images/hero_banner_imags";

const heroFlags = ["au", "uk", "ca", "nz", "eu", "us", "ie", "de", "my", "ae"];

const floatingIcons = [
  {
    icon: "degree-diploma-certificate_svgrepo.com.png",
    circle: "Ellipse 7.png",
    position: "left-[6%] top-[30%]",
  },
  {
    icon: "plane_svgrepo.com.png",
    circle: "Ellipse 8.png",
    position: "left-[5%] top-[45%]",
  },
  {
    icon: "Group-1.png",
    circle: "Ellipse 5.png",
    position: "right-0 top-[18%]",
  },
  {
    icon: "read_svgrepo.com.png",
    circle: "Ellipse 6.png",
    position: "right-[5%] top-[31%]",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[110.625rem] items-end gap-10 px-4 pt-10 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:px-12 lg:pt-12 xl:grid-cols-[1fr_51.5rem] xl:pt-16">
      <div className="lg:pb-36 xl:pb-[8.3rem]">
        <Image
          src="/images/pfec_logo_line.png"
          alt=""
          width={344}
          height={157}
          className="h-auto w-24 sm:w-32 xl:w-[10.625rem]"
        />

        <h1 className="mt-4 font-titan text-[clamp(2.6rem,11vw,5rem)] leading-[1.05] text-brand lg:text-[clamp(3.25rem,5.2vw,6.2rem)] xl:text-[6.1rem]">
          Study Abroad
        </h1>

        <p className="relative isolate mt-1 inline-block font-bebas text-[clamp(1.75rem,7vw,3.25rem)] leading-none text-neutral-900 lg:text-[clamp(2.5rem,3.7vw,4.4rem)] xl:text-[4.33rem]">
          WITH COMPLETE EXPERT GUIDANCE
          <span className="absolute -bottom-[0.75em] -right-2 -z-10 -rotate-[9deg] bg-accent px-[0.2em] pb-[0.05em] font-titan text-[0.72em] leading-[1.25] text-white lg:-right-[0.5em]">
            Free!
          </span>
        </p>

        <div className="mt-9 lg:mt-7">
          <div className="inline-flex flex-wrap items-center gap-1 border border-neutral-200 bg-[#fffcf2] px-2.5 py-2 xl:py-3 shadow-[4px_4px_0_var(--color-brand)] sm:gap-1.5">
            {heroFlags.map((code) => (
              <Flag
                key={code}
                code={code}
                className="h-7 w-7 sm:h-9 sm:w-9 xl:h-[2.625rem] xl:w-[2.625rem]"
              />
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-[50rem] text-base leading-relaxed text-neutral-700 sm:text-lg xl:mt-12 xl:text-2xl xl:leading-9">
          Each Student&rsquo;s journey will be tailored according to their
          profile and aspirations. 1-on-1 Expert Mentorship from
          shortlisting to Visa.
        </p>

        <a href="#" className="group mt-7 inline-flex items-center">
          <span className="rounded-full bg-brand px-6 py-3.5 font-poppins text-base font-bold text-white sm:text-xl xl:py-3.5 xl:text-2xl">
            Book Free Consultation
          </span>
          <span className="flex aspect-square h-[52px] items-center justify-center rounded-full bg-accent transition-transform group-hover:translate-x-1 sm:h-14 xl:h-[3.75rem]">
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

      {/* Hero artwork: everything is sized in % so it scales as one piece */}
      <div className="relative mx-auto aspect-[872/725] w-full max-w-[560px] overflow-hidden lg:mx-0 lg:max-w-none xl:w-[calc(100%+3rem)]">
        <Image
          src={`${HERO}/Vector-1.png`}
          alt=""
          width={1210}
          height={1452}
          className="absolute left-[45.5%] top-0 h-auto w-[44.7%]"
        />
        <Image
          src={`${HERO}/Vector.png`}
          alt=""
          width={1172}
          height={1404}
          className="absolute left-[41.5%] top-[4%] h-auto w-[43.3%]"
        />
        <Image
          src={`${HERO}/Vector-2.png`}
          alt=""
          width={380}
          height={380}
          className="absolute left-[12%] top-[4%] h-auto w-[19%]"
        />
        <Image
          src={`${HERO}/indonesian Female 1.png`}
          alt="Smiling female student holding notebooks"
          width={1062}
          height={1298}
          priority
          sizes="(min-width: 1024px) 30vw, 60vw"
          className="absolute left-[38%] top-[11%] h-auto w-[60%]"
        />
        <Image
          src={`${HERO}/Indonesian Male 1.png`}
          alt="Smiling male student holding books"
          width={1076}
          height={1364}
          priority
          sizes="(min-width: 1024px) 30vw, 60vw"
          className="absolute left-0 top-[6%] h-auto w-[61%]"
        />
        <Image
          src={`${HERO}/Group.png`}
          alt=""
          width={179}
          height={179}
          className="absolute right-[4%] top-[52%] h-auto w-[10%]"
        />
        {floatingIcons.map(({ icon, circle, position }) => (
          <div
            key={icon}
            className={`absolute aspect-square w-[7.5%] ${position}`}
          >
            <Image
              src={`${HERO}/${circle}`}
              alt=""
              width={100}
              height={100}
              className="absolute bottom-0 left-0 h-auto w-[72%]"
            />
            <Image
              src={`${HERO}/${icon}`}
              alt=""
              width={120}
              height={120}
              className="absolute right-0 top-0 h-auto w-[82%]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

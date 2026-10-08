"use client";

import { useState } from "react";
import Image from "next/image";
import Flag from "./Flag";

const destinations = [
  { name: "Australia", flag: "au", image: "au.jpg" },
  { name: "New Zealand", flag: "nz", image: "nz.jpg" },
  { name: "Canada", flag: "ca", image: "ca.jpg" },
  { name: "USA", flag: "us", image: "usa.jpg" },
  { name: "Ireland", flag: "ie", image: "airland.jpg" },
];

// Card placement by distance from the active (centre) card.
const slots = {
  "-2": "z-10 -translate-x-[148%] scale-[0.7]",
  "-1": "z-20 -translate-x-[85%] scale-[0.8]",
  0: "z-30 shadow-[0_10px_40px_rgba(0,0,0,0.3)]",
  1: "z-20 translate-x-[85%] scale-[0.8]",
  2: "z-10 translate-x-[148%] scale-[0.7]",
};

function ArrowButton({ label, onClick, flip }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-brand text-white transition-opacity hover:opacity-85 xl:h-[3.6rem] xl:w-[3.6rem]"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-1/2 w-1/2 ${flip ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 5l-7 7 7 7" />
      </svg>
    </button>
  );
}

export default function Destinations() {
  const [active, setActive] = useState(2);
  const count = destinations.length;
  const move = (step) => setActive((active + step + count) % count);

  return (
    <section className="relative overflow-hidden bg-[#f9f9f9] font-poppins">
      {/* Decorations */}
      <Image
        src="/images/net_img_1.png"
        alt=""
        width={360}
        height={360}
        className="absolute -right-24 -top-28 h-auto w-[22rem] -rotate-[28deg] opacity-10 xl:-right-16 xl:-top-40 xl:w-[42rem]"
      />
      <Image
        src="/images/net_img_2.png"
        alt=""
        width={360}
        height={360}
        className="absolute -bottom-28 -left-24 h-auto w-[22rem] -rotate-[28deg] opacity-10 xl:-bottom-40 xl:-left-16 xl:w-[42rem]"
      />
      <Image
        src="/images/circle_star.png"
        alt=""
        width={328}
        height={328}
        className="absolute left-[8.9rem] top-[11.2rem] hidden h-auto w-[8.3rem] xl:block"
      />
      <Image
        src="/images/circle_line.png"
        alt=""
        width={235}
        height={235}
        className="absolute right-[6.5rem] top-[6.2rem] hidden h-auto w-[7.5rem] xl:block"
      />
      <Image
        src="/images/pfec_logo_line.png"
        alt=""
        width={344}
        height={157}
        className="absolute bottom-8 right-[4.9rem] hidden h-auto w-[17.3rem] opacity-25 xl:block"
      />

      <div className="relative mx-auto max-w-[105rem] px-4 py-12 sm:px-8 lg:px-12 xl:pb-9 xl:pt-[5.6rem]">
        <h2 className="text-center text-2xl leading-snug text-neutral-900 sm:text-3xl xl:text-[2.4rem]">
          Explore &amp; Apply to{" "}
          <span className="font-bold text-brand">
            11 Global Study Destinations
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-[60rem] text-center text-base text-neutral-600 xl:mt-5 xl:text-xl xl:leading-[1.9rem]">
          PFEC Global is a partner of renowned institutions across major study
          destinations. <br className="hidden xl:block" />
          Pick a destination and learn everything you need to make an informed
          decision.
        </p>

        {/* Carousel */}
        <div className="relative mx-auto mt-8 aspect-[238/322] w-[min(58vw,17rem)] xl:mt-10 xl:w-[24.7rem]">
          {destinations.map(({ name, flag, image }, i) => {
            let offset = (i - active + count) % count;
            if (offset > 2) offset -= count;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Study in ${name}`}
                aria-current={offset === 0}
                className={`absolute inset-0 cursor-pointer overflow-hidden rounded-xl text-left transition-transform duration-500 ease-out ${slots[offset]}`}
              >
                <Image
                  src={`/images/county/${image}`}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 22vw, 17rem"
                  className="object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <span className="absolute bottom-[7%] left-[6%] flex flex-col items-start">
                  <span className="text-lg font-light leading-tight text-white xl:text-[1.75rem]">
                    Study in
                  </span>
                  <span className="mt-1 -rotate-2 bg-white px-2 py-0.5 text-xl font-bold text-brand xl:px-3 xl:py-1 xl:text-[2rem] xl:leading-[2.5rem]">
                    {name}
                  </span>
                </span>
                <Flag
                  code={flag}
                  className="absolute bottom-[7%] right-[5%] h-10 w-10 border-2 border-white xl:h-[4.1rem] xl:w-[4.1rem]"
                />
              </button>
            );
          })}
        </div>

        <div className="relative mt-7 flex justify-center gap-3 xl:mt-9">
          <ArrowButton label="Previous destination" onClick={() => move(-1)} />
          <ArrowButton label="Next destination" onClick={() => move(1)} flip />
        </div>
      </div>
    </section>
  );
}

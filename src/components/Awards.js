"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AUTOPLAY_MS = 3000;

// Add `logo: "/images/awards/<file>"` to show a university logo instead of its name.
const awards = [
  {
    lines: [
      {
        title: "Partner of the Year Award",
        sub: "Diamond Category",
        year: "(2024 & 2023)",
      },
    ],
    university: "Adelaide University",
    cricos: "04249J",
  },
  {
    lines: [{ title: "Best Newcomer", sub: "Gold", year: "(2024)" }],
    university: "The University of Western Australia",
    cricos: "04249J",
  },
  {
    lines: [
      { title: "Double Platinum Eagle", year: "(2023)" },
      { title: "Most Engaged Agency", year: "(2024)" },
    ],
    university: "La Trobe University",
    cricos: "00115M",
  },
  {
    lines: [
      {
        title: "Outstanding Partnership & Support for Sarawak Campus",
        year: "(2024)",
      },
    ],
    university: "Swinburne University of Technology",
    cricos: "00111D",
  },
];

function Laurel({ className }) {
  return (
    <svg
      viewBox="0 0 40 90"
      className={`absolute top-[12%] h-[45%] w-auto text-[#5a2a12] ${className}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M31 88C12 70 8 40 20 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="22" cy="8" rx="3" ry="7" transform="rotate(20 22 8)" />
      <ellipse cx="11" cy="20" rx="3" ry="7" transform="rotate(-35 11 20)" />
      <ellipse cx="24" cy="22" rx="3" ry="7" transform="rotate(50 24 22)" />
      <ellipse cx="7" cy="36" rx="3" ry="7" transform="rotate(-50 7 36)" />
      <ellipse cx="22" cy="38" rx="3" ry="7" transform="rotate(55 22 38)" />
      <ellipse cx="8" cy="53" rx="3" ry="7" transform="rotate(-65 8 53)" />
      <ellipse cx="24" cy="54" rx="3" ry="7" transform="rotate(50 24 54)" />
      <ellipse cx="14" cy="69" rx="3" ry="7" transform="rotate(-75 14 69)" />
      <ellipse cx="30" cy="70" rx="3" ry="7" transform="rotate(40 30 70)" />
    </svg>
  );
}

function ArrowButton({ label, onClick, flip }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-accent transition-opacity hover:opacity-85 xl:h-[3.35rem] xl:w-[3.35rem]"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-3/5 w-3/5 ${flip ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 4l-8 8 8 8" />
      </svg>
    </button>
  );
}

const nextFrame = (callback) =>
  requestAnimationFrame(() => requestAnimationFrame(callback));

export default function Awards() {
  const count = awards.length;
  // The list is rendered twice so the track can loop without a visible jump.
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  // Jump to `from` instantly, then slide to `to`.
  const jumpThenSlide = (from, to) => {
    setAnimate(false);
    setIndex(from);
    nextFrame(() => {
      setAnimate(true);
      setIndex(to);
    });
  };

  const next = () =>
    index >= count
      ? jumpThenSlide(index - count, index - count + 1)
      : setIndex(index + 1);

  const prev = () =>
    index <= 0 ? jumpThenSlide(count, count - 1) : setIndex(index - 1);

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || index < count) return;
    setAnimate(false);
    setIndex(index - count);
    nextFrame(() => setAnimate(true));
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  });

  return (
    <section className="overflow-hidden bg-brand font-poppins">
      <div className="mx-auto max-w-[105rem] px-4 py-12 sm:px-8 lg:px-12 xl:pb-20 xl:pt-[5.2rem]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl text-white sm:text-3xl xl:text-[2.45rem]">
            <span className="font-bold">Awards</span> &amp; Achievements
          </h2>
          <div className="flex items-center gap-3 xl:gap-4">
            <a
              href="#"
              className="rounded-xl border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 xl:px-6 xl:py-3.5 xl:text-base"
            >
              View All
            </a>
            <ArrowButton label="Previous award" onClick={prev} />
            <ArrowButton label="Next award" onClick={next} flip />
          </div>
        </div>

        <ul
          onTransitionEnd={handleTransitionEnd}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ transform: `translateX(calc(var(--step) * ${-index}))` }}
          className={`mt-8 flex gap-4 [--step:19rem] xl:mt-9 xl:gap-[1.95rem] xl:[--step:28.15rem] ${
            animate ? "transition-transform duration-700 ease-out" : ""
          }`}
        >
          {[...awards, ...awards].map(({ lines, university, cricos, logo }, i) => (
            <li
              key={i}
              aria-hidden={i >= count}
              className="relative flex h-[12.5rem] w-[18rem] shrink-0 flex-col items-center justify-center rounded-br-[1.5rem] rounded-tl-[1.5rem] bg-gradient-to-r from-[#ffeeaa] via-[#ffdc45] to-[#ffd62e] px-12 py-3 text-center text-[#4a1414] xl:h-[14.8rem] xl:w-[26.2rem] xl:px-16"
            >
              <Laurel className="left-[5%]" />
              <Laurel className="right-[5%] -scale-x-100" />

              {lines.map(({ title, sub, year }) => (
                <p key={title} className="leading-tight">
                  <span className="block text-base font-bold xl:text-[1.35rem] xl:leading-[1.6rem]">
                    {title}
                  </span>
                  {sub && (
                    <span className="block text-base xl:text-[1.35rem] xl:leading-[1.6rem]">
                      {sub}
                    </span>
                  )}
                  <span
                    className={`block text-xs xl:text-[0.95rem] ${
                      lines.length > 1 ? "mb-1" : "mt-2"
                    }`}
                  >
                    {year}
                  </span>
                </p>
              ))}

              <p className="mt-1.5 text-[0.6rem] opacity-80">Recognized by</p>
              {logo ? (
                <Image
                  src={logo}
                  alt={university}
                  width={240}
                  height={64}
                  className="mt-1 h-9 w-auto object-contain xl:h-12"
                />
              ) : (
                <p className="mt-0.5 text-sm font-bold leading-tight text-brand xl:text-lg">
                  {university}
                </p>
              )}
              <p className="mt-1 text-[0.55rem]">CRICOS: {cricos}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

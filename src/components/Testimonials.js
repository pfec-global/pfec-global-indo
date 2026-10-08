"use client";

import Image from "next/image";
import useLoopSlider from "./useLoopSlider";

const AUTOPLAY_MS = 4000;

const points = [
  "Personalized Guidance based on your goals",
  "Virtual & In Person Assistance",
  "No Fluff. Just Honest Guidance Every Time.",
];

// Placeholder copy from the Figma file: replace with real student testimonials.
const testimonials = [
  {
    photo: "Abdul-Deriya.png",
    quote:
      "My name is Abdul Deriya, and I recently received my Dubai student visa. I would like to give special thanks to PFEC Global for supporting me throughout the entire process, from counselling to visa approval. I visited many local consultancies, but I did not receive the proper guidance I was looking for. am very satisfied with the support and professionalism of the PFEC counsellor team.",
    name: "Abdul Deriya",
    role: "Manipal Academy of Higher Education - Dubai Campus",
  },
  {
    photo: "Giash-Uddin.png",
    quote:
      "I had a great experience with Azman Salid from PFEC Global during my Australian student visa process. They carefully guided me through every step, ensured all documents were accurate, and handled the process with great attention to detail. Their patience, dedication, and consistent support made everything much easier and stress-free. I highly recommend PFEC Global.",
    name: "Giash Uddin",
    role: "RMIT University - Bachelor of Engineering (Mechanical)",
  },

   {
    photo: "SACHINI.png",
    quote:
      "I had a very positive experience with PFEC Global Sri Lanka during my Australian student visa process. They handled my application with great professionalism and dedication from start to finish. My counselor guided me step by step, explained every detail clearly, and was always available whenever I had questions. The whole process was smooth and completely stress-free.",
    name: "SACHINI THISHADI WEERASINGHE & Spouse",
    role: "Murdoch University - Master of Engineering (Practice)",
  },
];

function Chevron({ label, onClick, flip }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-9 w-9 cursor-pointer items-center justify-center text-brand transition-opacity hover:opacity-70"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-6 w-6 ${flip ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 4l-8 8 8 8" />
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const count = testimonials.length;
  // The list is rendered twice so the track can loop without a visible jump.
  const {
    active,
    animate,
    trackStyle,
    dragProps,
    next,
    prev,
    goTo,
    handleTransitionEnd,
    setPaused,
  } = useLoopSlider(count, AUTOPLAY_MS);

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#fdfdfd] to-[#fff0bc] font-poppins">
      <div className="mx-auto grid max-w-[105rem] gap-10 px-4 pt-12 sm:px-8 lg:px-12 xl:grid-cols-[37.5rem_1fr] xl:gap-0 xl:pt-0">
        <div className="min-w-0 xl:pb-16 xl:pt-[6.2rem]">
          <span className="inline-block bg-brand px-2.5 py-1.5 text-xs font-semibold text-white xl:text-[0.8rem]">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-brand sm:text-4xl xl:text-[2.45rem] xl:leading-[3rem]">
            Honest Advice.
            <br />
            Real Outcomes.
          </h2>
          <p className="mt-4 text-lg text-neutral-600 xl:text-xl">
            Hear it from our Students
          </p>
          <div className="mt-6 h-0.5 w-[12.8rem] bg-accent" />

          <ul className="mt-7 space-y-3.5 text-base text-neutral-700 xl:text-[1.06rem]">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <Image
                  src="/images/rectangle_bar.svg"
                  alt=""
                  width={21}
                  height={24}
                  className="h-6 w-auto shrink-0"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-w-0 pb-10 pt-8 xl:pb-[4.2rem] xl:pt-[4.25rem]">
          {/* Yellow panel running off the right edge of the screen */}
          <div className="absolute -inset-x-4 inset-y-0 rounded-tl-[2rem] bg-sun sm:-inset-x-8 lg:-inset-x-12 xl:left-[5.6rem] xl:right-auto xl:top-[1.8rem] xl:w-screen xl:rounded-tl-[3rem]" />

          {/* Clips cards at the left edge so they never slide over the text column */}
          <div className="relative xl:[clip-path:inset(0_-100vw_0_0)]">
            <ul
              onTransitionEnd={handleTransitionEnd}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              {...dragProps}
              style={trackStyle}
              className={`relative flex cursor-grab touch-pan-y select-none gap-4 active:cursor-grabbing [--step:20rem] sm:[--step:25rem] xl:gap-[1.9rem] xl:[--step:53.2rem] ${
                animate ? "transition-transform duration-700 ease-out" : ""
              }`}
            >
              {[...testimonials, ...testimonials].map(
                ({ photo, quote, name, role }, i) => (
                  <li
                    key={i}
                    aria-hidden={i >= count}
                    className="group relative flex w-[19rem] shrink-0 flex-col gap-5 rounded-br-[1.75rem] rounded-tl-[1.75rem] border border-neutral-300 bg-white transition-colors duration-300 hover:border-brand p-4 sm:w-[24rem] xl:h-[22.8rem] xl:w-[51.3rem] xl:flex-row xl:gap-6 xl:p-[1.55rem]"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl xl:aspect-auto xl:h-full xl:w-[18.15rem]">
                      <Image
                        src={`/images/testimonial/${photo}`}
                        alt={name}
                        fill
                        sizes="(min-width: 1280px) 18rem, 24rem"
                        className="object-cover object-[30%_20%] transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-col justify-center xl:pr-16">
                      <p className="text-[15px] leading-relaxed text-neutral-900 xl:text-[1.06rem] xl:leading-[1.5rem]">
                        &ldquo;{quote}&rdquo;
                      </p>
                      <p className="mt-4 font-semibold uppercase text-neutral-900 xl:text-[1.06rem]">
                        {name}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600 xl:text-[0.9rem]">
                        {role}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-2 hidden font-serif text-[5rem] font-bold leading-none text-brand transition-colors duration-300 group-hover:text-accent xl:block"
                    >
                      &rdquo;
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="relative mt-6 flex items-center gap-8 xl:mt-9">
            <Chevron label="Previous testimonial" onClick={prev} />
            <div className="flex items-center gap-4">
              {testimonials.map(({ photo }, i) => (
                <button
                  key={photo}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                  className={`h-3.5 w-3.5 cursor-pointer rounded-full transition-colors ${
                    i === active ? "bg-brand" : "bg-white"
                  }`}
                />
              ))}
            </div>
            <Chevron label="Next testimonial" onClick={next} flip />
          </div>
        </div>
      </div>
    </section>
  );
}

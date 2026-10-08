import Image from "next/image";

const destinations = [
  "Australia",
  "UK",
  "New Zealand",
  "Dubai",
  "Europe",
  "Germany",
  "USA",
  "Ireland",
  "Canada",
  "Malaysia",
];

const field =
  "h-11 w-full rounded-lg bg-[#f1f4f7] px-3 text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-2 focus:outline-brand xl:h-[2.7rem] xl:text-[1.05rem]";

export default function Consultation() {
  return (
    <section
      id="consultation"
      className="overflow-hidden bg-gradient-to-b from-[#050768] to-[#0e0a10]"
    >
      <div className="mx-auto max-w-[105rem] px-4 py-12 text-center sm:px-8 lg:px-12 xl:py-[4.3rem]">
        
        <p className="mt-3 font-poppins text-lg text-[#b9b5e8] xl:text-[1.45rem]">
          What are you Waiting For?
        </p>
        <h2 className="mt-1 font-poppins text-2xl font-bold text-white sm:text-3xl xl:text-[2.5rem] xl:leading-[3.2rem]">
          Book a Free Consultation with Us
        </h2>

        <div className="relative mx-auto mt-7 w-full max-w-[28.4rem]">
          <Image
            src="/images/pfec_logo_line.png"
            alt=""
            width={344}
            height={157}
            className="absolute right-full top-1/2 mr-[5.3rem] hidden h-auto w-[11.6rem] max-w-none -translate-y-1/2 lg:block"
          />
          <Image
            src="/images/pfec_logo_line.png"
            alt=""
            width={344}
            height={157}
            className="absolute left-full top-1/2 ml-[5.3rem] hidden h-auto w-[11.6rem] max-w-none -translate-y-1/2 lg:block"
          />

          <form className="flex flex-col gap-4 rounded-xl bg-white p-5 text-left xl:gap-[1.15rem] xl:p-[1.6rem]">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              aria-label="Full Name"
              autoComplete="name"
              required
              className={field}
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              aria-label="Email ID"
              autoComplete="email"
              required
              className={field}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              aria-label="Phone Number"
              autoComplete="tel"
              required
              className={field}
            />
            <div className="relative">
              <select
                name="destination"
                aria-label="Preferred Study Destination"
                defaultValue=""
                required
                className={`${field} cursor-pointer appearance-none pr-10 invalid:text-neutral-500`}
              >
                <option value="" disabled>
                  Preferred Study Destination
                </option>
                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
              <svg
                viewBox="0 0 20 12"
                className="pointer-events-none absolute right-4 top-1/2 h-2 w-3.5 -translate-y-1/2 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 2l8 8 8-8" />
              </svg>
            </div>

            <label className="flex items-center gap-2.5 text-xs text-neutral-800 xl:text-[0.75rem]">
              <input
                type="checkbox"
                name="agree"
                required
                className="h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-[3px] border-2 border-accent checked:bg-accent"
              />
              <span>
                I agree to{" "}
                <a href="#" className="text-accent underline">
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-accent underline">
                  Terms of Use
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="h-11 cursor-pointer rounded-xl bg-accent text-base font-bold text-white hover:opacity-90 xl:h-[2.8rem] xl:text-[1.05rem]"
            >
              Sign Me Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

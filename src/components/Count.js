import Flag, { flags } from "./Flag";

const destinations = ["au", "uk", "nz", "ae", "eu", "de", "us", "ie", "ca", "my"];

export default function Count() {
  return (
    <section className="relative z-10 mx-auto max-w-[110.625rem] px-4 pb-12 sm:px-8 lg:px-12 lg:pb-20">
      <div className="relative">
        <div className="absolute bottom-full left-0 hidden h-12 w-[17.2rem] bg-sun [clip-path:polygon(0_0,92%_0,100%_45%,100%_100%,0_100%)] lg:block" />

        <div className="flex flex-col gap-8 bg-[#fffdf8] px-6 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.12)] sm:px-10 xl:flex-row xl:items-center xl:justify-between xl:gap-6 xl:py-7 xl:pl-[6.2rem] xl:pr-20">
          <div className="grid font-poppins text-lg text-neutral-800 max-sm:divide-y sm:grid-cols-3 sm:divide-x divide-neutral-400 lg:whitespace-nowrap lg:text-xl xl:flex xl:text-2xl">
            <div className="py-4 sm:py-2 sm:pr-6 xl:pr-[5.75rem]">
              <p>Trusted by</p>
              <p className="font-titan text-3xl text-brand">22,000+</p>
              <p>Happy Students</p>
            </div>
            <div className="py-4 sm:px-6 sm:py-2 xl:px-[5.4rem]">
              <p className="font-titan text-3xl text-brand">19+ Years</p>
              <p>of Service across</p>
              <p className="font-bold text-neutral-900">
                17 Global Offices
              </p>
            </div>
            <div className="py-4 sm:py-2 sm:pl-6 xl:pl-[5.4rem]">
              <p className="font-titan text-3xl text-brand">550+</p>
              <p>Partner Institutions</p>
              <p>Across 11 Destinations</p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-3 gap-y-3 xl:w-[29.5rem] xl:shrink-0">
            {destinations.map((code) => (
              <li
                key={code}
                className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-[15px] text-neutral-800 shadow-sm xl:text-base"
              >
                <Flag code={code} className="h-6 w-6" />
                {flags[code].name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

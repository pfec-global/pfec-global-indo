import Image from "next/image";

const FLAGS = "/images/country_icon";

// No UAE flag image in /public yet, so `src: null` falls back to a CSS flag.
export const flags = {
  au: { name: "Australia", src: `${FLAGS}/australia.png` },
  uk: { name: "UK", src: `${FLAGS}/united kingdom.png` },
  ca: { name: "Canada", src: `${FLAGS}/canada.png` },
  nz: { name: "New Zealand", src: `${FLAGS}/new zealand.png` },
  eu: { name: "Europe", src: `${FLAGS}/european union.png` },
  us: { name: "USA", src: `${FLAGS}/united states.png` },
  ie: { name: "Ireland", src: `${FLAGS}/ireland.png` },
  de: { name: "Germany", src: `${FLAGS}/germany.png` },
  my: { name: "Malaysia", src: `${FLAGS}/malaysia.png` },
  ae: { name: "Dubai", src: null },
};

export default function Flag({ code, className }) {
  const { name, src } = flags[code];
  if (!src) {
    return (
      <span
        role="img"
        aria-label={name}
        className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-[linear-gradient(#00732f_33.3%,#fff_33.3%_66.6%,#000_66.6%)] ${className}`}
      >
        <span className="absolute inset-y-0 left-0 w-[30%] bg-[#e4002b]" />
      </span>
    );
  }
  return (
    <Image
      src={src}
      alt={name}
      width={85}
      height={85}
      className={`shrink-0 rounded-full ${className}`}
    />
  );
}

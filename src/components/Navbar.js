import Image from "next/image";
import Link from "next/link";

const navLinks = [
  "Study Destinations",
  "Scholarships",
  "Universities",
  "Our Services",
  "Resources",
];

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 12"
      className="h-2.5 w-4 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 2l8 8 8-8" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_4px_20px_rgba(16,6,148,0.08)]">
      <div className="mx-auto flex max-w-[105rem] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12 xl:py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/pfec_ indo_logo.webp"
            alt="PFEC Global - Study Abroad | Visa"
            width={500}
            height={201}
            priority
            className="h-11 w-auto xl:h-14"
          />
        </Link>

        <nav className="hidden flex-1 items-center gap-[3.2rem] pl-[3.2rem] xl:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="flex items-center gap-2 whitespace-nowrap font-medium text-neutral-800 hover:text-brand"
            >
              {link}
              <Chevron />
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden whitespace-nowrap rounded-xl bg-accent px-4 py-2.5 text-[15px] font-bold xl:text-base text-white hover:opacity-90 sm:block"
        >
          Book a Free Consultation
        </a>

        {/* Mobile menu (no JS needed) */}
        <details className="group xl:hidden">
          <summary
            aria-label="Toggle menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg text-brand [&::-webkit-details-marker]:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path
                className="group-open:hidden"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className="hidden group-open:block"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </summary>
          <nav className="absolute inset-x-0 top-full flex flex-col border-t border-neutral-200 bg-white px-4 pb-5 shadow-lg sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center justify-between border-b border-neutral-100 py-3.5 font-medium text-neutral-800"
              >
                {link}
                <Chevron />
              </a>
            ))}
            <a
              href="#"
              className="mt-4 rounded-xl bg-accent px-4 py-3 text-center font-bold text-white sm:hidden"
            >
              Book a Free Consultation
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

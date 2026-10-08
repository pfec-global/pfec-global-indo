import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Count from "@/components/Count";
import Services from "@/components/Services";
import Aspirations from "@/components/Aspirations";
import Destinations from "@/components/Destinations";
import FindCourse from "@/components/FindCourse";
import Awards from "@/components/Awards";
import Affiliations from "@/components/Affiliations";
import Testimonials from "@/components/Testimonials";
import Journey from "@/components/Journey";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip bg-gradient-to-b from-[#fdfdfb] to-[#fffbe8]">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={0.15}>
          <Count />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Aspirations />
        </Reveal>
        <Reveal>
          <Destinations />
        </Reveal>
        <Reveal>
          <FindCourse />
        </Reveal>
        <Reveal>
          <Awards />
        </Reveal>
        <Reveal>
          <Affiliations />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Journey />
        </Reveal>
        <Reveal>
          <Consultation />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
      <BackToTop />
    </>
  );
}

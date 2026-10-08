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
        <Reveal id="services">
          <Services />
        </Reveal>
        <Reveal>
          <Aspirations />
        </Reveal>
        <Reveal id="destinations">
          <Destinations />
        </Reveal>
        <Reveal id="courses">
          <FindCourse />
        </Reveal>
        <Reveal id="awards">
          <Awards />
        </Reveal>
        <Reveal id="affiliations">
          <Affiliations />
        </Reveal>
        <Reveal id="testimonials">
          <Testimonials />
        </Reveal>
        <Reveal id="about">
          <Journey />
        </Reveal>
        <Reveal id="consultation">
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

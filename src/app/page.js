import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Count from "@/components/Count";
import Services from "@/components/Services";
import Aspirations from "@/components/Aspirations";
import Destinations from "@/components/Destinations";
import FindCourse from "@/components/FindCourse";
import Awards from "@/components/Awards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip bg-gradient-to-b from-[#fdfdfb] to-[#fffbe8]">
        <Hero />
        <Count />
        <Services />
        <Aspirations />
        <Destinations />
        <FindCourse />
        <Awards />
      </main>
    </>
  );
}

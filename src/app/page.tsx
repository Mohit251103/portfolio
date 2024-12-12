import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import Project from "@/components/projects/Project";
import Skill from "@/components/skills/Skill";
import Background from "@/components/ui/Background";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full inconsolata-600 overflow-hidden">
      <Background />
      <Nav />
      <div className="z-50 flex-col items-center justify-center w-1/2 max-sm:w-full max-sm:px-3 max-lg:w-[60%] mx-auto relative">
        <About />
        <Project />
        <Skill />
      </div>
      <Footer />
    </div>
  );
}

import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import Project from "@/components/projects/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full inconsolata-600 ">
      <Nav />
      <div className="w-1/2 max-md:w-1/2 mx-auto">
        <About />
        <Project />
      </div>
      <Footer />
    </div>
  );
}

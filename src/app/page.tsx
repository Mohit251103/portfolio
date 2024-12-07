import About from "@/components/about/About";
import Nav from "@/components/nav/Nav";
import Project from "@/components/projects/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="w-1/2 max-md:w-1/2 mx-auto">
        <About />
        <Project />
      </div>
    </div>
  );
}

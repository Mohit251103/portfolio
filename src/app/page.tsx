"use client";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import Project from "@/components/projects/Project";
import Skill from "@/components/skills/Skill";
import Background from "@/components/ui/Background";
import { motion } from "motion/react"

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <div
        className="z-40 w-full inconsolata-600 overflow-auto">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)"
          }}

          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          }}
          className="z-40 flex-col items-center justify-center w-1/2 max-sm:w-full max-sm:px-3 max-lg:w-[60%] mx-auto relative">
          <About />
          <Project />
          <Skill />
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

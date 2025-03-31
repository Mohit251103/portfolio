"use client";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma, SiShadcnui } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { motion } from "framer-motion";

const Skill = () => {
    const skillsData = [
        { icon: IoLogoReact, hoverColor: "#06b6d4", label: "React" }, // text-cyan-400
        { icon: RiNextjsFill, hoverColor: "#ffffff", label: "Next.js" }, // text-white
        { icon: RiTailwindCssFill, hoverColor: "#22d3ee", label: "Tailwind" }, // text-cyan-500
        { icon: DiNodejs, hoverColor: "#22c55e", label: "Node.js" }, // text-green-400
        { icon: DiMongodb, hoverColor: "#22c55e", label: "MongoDB" }, // text-green-400
        { icon: BiLogoPostgresql, hoverColor: "#0ea5e9", label: "PostgreSQL" }, // text-sky-500
        { icon: SiPrisma, hoverColor: "#ffffff", label: "Prisma" }, // text-white
        { icon: SiShadcnui, hoverColor: "#ffffff", label: "Shadcn UI" }, // text-white
        { icon: FaGolang, hoverColor: "#0ea5e9", label: "Go" } // text-sky-500
    ];


    return (
        <div
            id="skills"
            className="w-full flex flex-col justify-center items-center overflow-auto mt-24"
        >
            <h1 className="text-2xl font-extrabold text-center hover:scale-110">Skills</h1>
            <div className="flex flex-wrap gap-6 justify-center mt-4">
                {skillsData.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <motion.div
                            initial="initial"
                            whileHover="hover"
                            className="p-4 rounded-xl bg-[rgb(13,13,13)] min-h-20 min-w-20 aspect-square relative overflow-hidden"
                            key={index}
                        >
                            <motion.div
                                variants={{
                                    initial: {
                                        opacity: 0
                                    },
                                    hover: {
                                        opacity: 1,
                                        transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                                className="bg-black h-full w-full shadow-inner shadow-black absolute top-0 left-0 rounded-xl z-40"
                                style={{ pointerEvents: "auto" }}
                            />
                            <motion.div
                                variants={{
                                    hover: {
                                        color: `${skill.hoverColor}`,
                                        transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                                className={`w-full h-full relative z-40`}
                                style={{ pointerEvents: "auto" }}
                            >
                                <IconComponent className="w-full h-full" />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skill;
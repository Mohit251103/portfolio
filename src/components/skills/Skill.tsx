import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma, SiShadcnui } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
const Skill = () => {
    const skills = [
        <IoLogoReact className="w-full h-full relative z-40 group-hover:text-cyan-400"/>,
        <RiNextjsFill className="w-full h-full relative z-40"/>,
        <RiTailwindCssFill className="w-full h-full relative z-40 group-hover:text-cyan-500" />,
        <DiNodejs className="w-full h-full relative z-40 group-hover:text-green-400" />,
        <DiMongodb className="w-full h-full relative z-40 group-hover:text-green-400" />,
        <BiLogoPostgresql className="w-full h-full relative z-40 group-hover:text-sky-500" />,
        <SiPrisma className="w-full h-full relative z-40" />,
        <SiShadcnui className="w-full h-full relative z-40" />,
        <FaGolang className="w-full h-full relative z-40 group-hover:text-sky-500" />
    ]

    return (
        <div id="skills" className="w-full flex-col justify-center items-center mt-24">
            <h1 className="text-2xl font-extrabold text-center">Skills</h1>
            <div className="flex flex-wrap gap-6 justify-center mt-4">
                {skills.map((skill, index) => {
                    return (
                        <div className="group p-4 rounded-xl bg-[rgb(13,13,13)] hover:bg-secondary min-h-20 min-w-20 aspect-square relative" >
                            <div className="w-0 bg-[rgb(13,13,13)] invisible group-hover:visible group-hover:w-full group-hover:bg-black h-full shadow-inner shadow-black transition-all duration-200 absolute top-0 left-0 rounded-xl z-30"></div>
                            {skill}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma, SiShadcnui } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
const Skill = () => {
    const skills = [
        <IoLogoReact className="w-full h-full" />,
        <RiNextjsFill className="w-full h-full" />,
        <RiTailwindCssFill className="w-full h-full" />,
        <DiNodejs className="w-full h-full" />,
        <DiMongodb className="w-full h-full" />,
        <BiLogoPostgresql className="w-full h-full" />,
        <SiPrisma className="w-full h-full" />,
        <SiShadcnui className="w-full h-full" />,
        <FaGolang className="w-full h-full" />
    ]

    return (
        <div id="skills" className="w-full flex-col justify-center items-center mt-24">
            <h1 className="text-2xl font-extrabold text-center">Skills</h1>
            <div className="flex flex-wrap gap-6 justify-center mt-4">
                {skills.map((skill, index) => {
                    return (
                        <div className="p-4 rounded-xl bg-[rgb(13,13,13)] hover:bg-secondary min-h-20 min-w-20 aspect-square" >
                            {skill}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
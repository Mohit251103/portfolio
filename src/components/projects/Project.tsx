"use client"
import axios from "axios"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type IOctokitResponse = {
    name: string;
    html_url: string;
    description: string | null;
    homepage: string | null;
    languages: any
}

const LanguagesUsed = ({ languages }: { languages: any }) => {

    const [calcPerc, setCalcPerc] = useState<{ [language: string]: number }>({})
    useEffect(() => {
        let sum = 0;
        Object.keys(languages).forEach((key) => {
            sum += languages[key]
        })
        let perc_lang: { [language: string]: number } = {};
        Object.keys(languages).forEach((lang) => {
            perc_lang[lang.toString()] = languages[lang] / sum * 100;
        })
        setCalcPerc(perc_lang)
    }, [languages])

    return (
        <div className="flex-col justify-center items-start p-2 w-[70%]">
            {Object.keys(languages).map((lang, index) => {
                return (
                    <div className="my-2 w-full" key={index}>
                        <p className="text-xs font-bold">{lang}</p>
                        <div className="bg-indigo-500 shadow-md shadow-indigo-500/50 w-0 h-2 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${calcPerc[lang]}%` }}></div>
                    </div>
                )
            })}
        </div>
    )
}

const Project = () => {
    const owner = "mohit251103"
    const [projects, setProjects] = useState<IOctokitResponse[]>()

    const getProjects = useMemo(async () => {
        const getData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/repos`)
                return res.data.data
            } catch (error) {
                console.log(error)
            }
        }
        return getData()
    },[owner])

    useEffect(() => {
        getProjects
            .then((res) => {
                setProjects(res?.map((project: any) => {
                    return {
                        name: project.data.name,
                        html_url: project.data.html_url,
                        description: project.data.description,
                        homepage: project.data.homepage,
                        languages: project.languages
                    }
                }));
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    if (!projects) {
        return <div className="flex justify-center items-center h-32">
            <AiOutlineLoading3Quarters className="animate-spin"/>
        </div>
    }

    return (
        <div id="projects" key="Projects" className="w-full flex-col items-center mt-12">
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="flex-col items-center w-full">
                {projects?.map((project: IOctokitResponse, index: number) => {
                    return <div key={index} className="w-full flex-col justify-start items-center p-4 rounded-md bg-[rgb(13,13,13)] text-secondary-foreground my-2">
                        <img src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg" alt="github" className="rounded-md h-full w-[30%]" />
                        <div className="flex-col p-2 ml-2 gap-y-2 relative">
                            <p className="text-xl font-bold">{project.name}</p>
                            <p className="text-md">{project.description}</p>
                            <LanguagesUsed languages={project.languages}></LanguagesUsed>
                            <div className="flex gap-x-2 mt-4">
                                {project.homepage && <Link href={project.homepage as string} className="rounded-md bg-secondary hover:opacity-90 p-1 text-foreground text-xs hover:bg-opacity-90 flex items-center" referrerPolicy="no-referrer" target="_blank"><MdArrowOutward />{' '}Live Preview</Link>}
                                <Link href={project.html_url} className="rounded-md bg-none border hover:bg-muted p-1 text-xs" referrerPolicy="no-referrer" target="_blank">Github</Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Project
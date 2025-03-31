"use client"
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Background = () => {
    const [content, setContent] = useState<React.FC[][]|any[]>([])
    useEffect(() => {
        let generatedContent = [];
        for (let j = 0; j < 100; j++) {
            let temp = [];
            for (let i = 0; i < 200; i++) {
                temp.push(<div key={`${j}->${i}`} className="border h-24 w-32 bg-none hover:bg-secondary"></div>)
            }
            generatedContent.push(temp)
        }
        setContent(generatedContent)
    }, [])

    return (
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
            className="flex-col mask-center-fade fixed top-0 h-[100vh] w-full opacity-50 overflow-hidden opacity-40 max-sm:opacity-20 z-30">
            {
                content.map((row:any[]) => {
                    return <div className="flex w-fit">
                        {row.map((el: any) => {
                            return el
                        })}
                    </div>
                })
            }
        </motion.div>
    )
}

export default Background
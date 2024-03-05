'use client'
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import ListedProjects from "./ListedProjects";
import salon from "@/assets/salon-beauty.png"
import construction from "@/assets/construction-company.png"
import restaurant from "@/assets/restaurant-home.png"
import garageshop from "@/assets/garageshop.png"
import { StaticImageData } from "next/image";

interface Project {
    image: StaticImageData,
    name: string,
    src: string,
    id: number
}

const projectList: Project[] = [
    {
        image: garageshop,
        name: 'My Ecommerce Website',
        src: 'https://garageshop.vercel.app/',
        id: 1
    },
    {
        image: construction,
        name: 'My Construction Company',
        src: 'https://troyk12.github.io/woodman-works/',
        id: 2
    },
    {
        image: restaurant,
        name: "Crave's Restaurant",
        src: 'https://troyk12.github.io/craves-coffee/',
        id: 3
    },
    {
        image: salon,
        name: 'My Beauty Salon',
        src: 'https://troyk12.github.io/forbidden-future/',
        id: 4
    }
]

export default function Projects() {    
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"])

    const opacity = useTransform(scrollYProgress, [0, 0.8, 0.98], [1, 1, 0]);

    return (
        <motion.div id="projects" ref={ref} className="relative bg-gradient-to-b from-[#99a5b1] to-[#515960]">
            <motion.div style={{opacity}} className="flex flex-row items-center w-screen justify-center sticky top-32">
                <div className="h-[2px] min-w-[100px] w-[20%] bg-white mx-3 relative">
                    <div className="absolute left-[-4px] top-[-12px]">&lt;</div>
                    <div className="absolute right-[-6px] top-[-12px]">&lt;</div>
                    <div className="absolute right-[2px] top-[-12px]">&lt;</div>
                    <div className="absolute right-[10px] top-[-12px]">&lt;</div>
                </div>
                <h1 className="text-2xl">Projects</h1>
                <div className="h-[2px] min-w-[100px] w-[20%] bg-white mx-3 relative">
                    <div className="absolute right-[-4px] top-[-12px]">&gt;</div>
                    <div className="absolute left-[-6px] top-[-12px]">&gt;</div>
                    <div className="absolute left-[2px] top-[-12px]">&gt;</div>
                    <div className="absolute left-[10px] top-[-12px]">&gt;</div>
                </div>
            </motion.div> 
            <section className="relative h-[300vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{x, opacity}} className="flex gap-7">
                        {projectList.map((project) => {
                            return <ListedProjects project={project} key={project.id} />
                        })}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}
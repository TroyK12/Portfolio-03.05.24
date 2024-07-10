'use client'
import Image from "next/image";
import laptop from "@/assets/laptop.png"
import ePage from "@/assets/e-commerce.png"
import rightArrow from "@/assets/right-arrow.png"
import { motion, useScroll, useTransform } from 'framer-motion';

import styles from './projects.module.css'
import FramerTextStyles from "./FramerTextStyles";

const texts = [
    {
        id: 1,
        color: 'bg-[#454545]',
        position: 'self-start',
        text: "It's perfect! Where do I go from here?"
    },
    {
        id: 2,
        color: 'bg-[#007bff]',
        position: 'self-end',
        text: "Well, I offer website hosting services for my clients. Would that interest you?"
    },
    {
        id: 3,
        color: 'bg-[#454545]',
        position: 'self-start',
        text: "What exactly does that entail?"
    },
    {
        id: 4,
        color: 'bg-[#007bff]',
        position: 'self-end',
        text: "For a subscription fee, I can host your website, ensuring it's live on the web, and manage any updates or edits whenever you need them."
    },
    {
        id: 5,
        color: 'bg-[#454545]',
        position: 'self-start',
        text: "That sounds perfect! I would love to go ahead with that."
    },
]

export default function FramerLaptop() {
    let { scrollYProgress } = useScroll()
    //let opacity = useTransform(scrollYProgress, [0, 0.6, 0.65], ["1", "1", "0"])
    const yL = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-20%"])

    
    return (
        <div className="w-full">
            <div className="w-full h-[160vh] relative">
                <motion.div className="sticky z-[2] top-[20vh] flex items-start justify-center w-full">
                    <div className="w-full flex justify-center aspect-video overflow-hidden">
                        <Image src={laptop} alt="laptop" width={800} className='absolute top-[-10px] z-10 w-full' />
                        <motion.p style={{y: yL}} className="absolute top-[80%] left-[-50px] flex items-center gap-5">now! <Image src={rightArrow} alt="arrow" width={50} /></motion.p>
                        <motion.div
                            style={{
                                y: useTransform(scrollYProgress, [0.4, 0.8], ["10%", "-130%"])
                            }}
                            className="w-full">
                            <Image src={ePage} alt="page" width={790} className='min-h-max w-[81%] mx-auto' /></motion.div>
                    </div>
                </motion.div>
            </div>
            <motion.div className='w-full relative flex justify-center items-center pt-20 pb-20 sm:pb-0'>
                <div className="px-4">
                    <FramerTextStyles className1="text-3xl font-bold pb-10">what&apos;s next?</FramerTextStyles>
                    <div className="flex flex-col justify-start items-start gap-4">
                        {texts.map(text => ( 
                            <div key={text.id} className={`relative w-[85%] sm:w-[65%] ${text.position}`}><FramerTextStyles color={text.color} className2='w-full' className1='font-mono text-[12px] sm:text-[16px] rounded-3xl py-[8px] px-4'>{ text.text }</FramerTextStyles></div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

'use client'

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion"


export default function Title() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const x = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35, 0.7], ["0%", "-10%", "370%", "370%", "0%"])
    const y = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.7], ["0px", "0px", "75px", "75px"])
    const rotateZ = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.7], ['0deg', '0deg', "180deg", "180deg"])

    return (
        <div ref={ref} className="flex flex-col items-center gap-3">
            <motion.div style={{x, y, rotateZ}} className="h-[2px] min-w-[100px] w-[90%] bg-white mx-3 relative">
                <div className="absolute right-[-4px] top-[-12px]">&gt;</div>
                <div className="absolute left-[-6px] top-[-12px]">&gt;</div>
                <div className="absolute left-[2px] top-[-12px]">&gt;</div>
                <div className="absolute left-[10px] top-[-12px]">&gt;</div>
            </motion.div>
            <h1 className="text-4xl font-thin tracking-wide">About Me</h1>
        </div>
    )
}
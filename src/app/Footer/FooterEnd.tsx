"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


export default function FooterEnd({ children }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.96, 0.97, 1], [0, 0, 1, 1]);

    return (
        <motion.div style={{opacity}} className="absolute top-0 h-full w-full">
            {children}
        </motion.div>
    )
}
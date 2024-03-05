"use client"
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 0.2, 0.4, 1], [-distance, -distance / 2, 0, distance])
}

export default function ContactLink() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end start", "center end"]
    })
    const y = useParallax(scrollYProgress, 500);
    
    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="absolute h-full bottom-0 left-[10%]">
            <Link href="#contact" className="whitespace-nowrap flex items-center text-center text-sm md:text-xl underline underline-offset-[5px] connect-link transform-all ease-in-out hover:scale-110 duration-300">
                Connect with me!
            </Link>
        </motion.div>
    )
}
"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import RandomLetter from "./RandomLetter";


export default function HoverBall({ children }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0, 0.35, 0.75, 0.8, 1], [1, 30, 30, 0, 0])
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.66, 0.76, 0.9], [0, 0, 1, 1, 0, 0])
    const x = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75, 0.9], ["-50%", "-50%", "0%", "0%", "-50%", "-50%"])

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


    const handleMouseMove = (e: any) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
          if (typeof window !== 'undefined') {
            window.removeEventListener('mousemove', handleMouseMove);
          }
        };
    }, []);
    
    const backgroundStyles = {
        background: `radial-gradient(circle at ${mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1) * 100}% ${mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1) * 100}%, transparent 0%, #2a2d30d8 10%, #2a2d30 15%)`,
        transition: 'background 0.5s ease-out',
    };

    return (
        <motion.div ref={ref} className="relative h-screen w-screen">
            <div onMouseMove={handleMouseMove} className="relative w-full flex justify-center ball-hover-effect z-20">
                <motion.div
                    style={{ scale }}
                    className="absolute top-[-20%] md:top-0 w-[13px] h-[13px] sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[30px] lg:h-[30px] xl:w-11 xl:h-11 rounded-full shadow-2xl overflow-hidden transform-all ease-in-out duration-300">
                    <div className="relative w-full h-full">
                        <RandomLetter />
                        <div style={{ ...backgroundStyles }} className="absolute w-full h-full z-20" />
                    </div>
                </motion.div>
                <motion.div
                    style={{ opacity, x }}
                    className="absolute top-[-20vh] w-[90vw] md:w-[35vw] h-[50vh] flex flex-col items-center justify-start md:justify-start sm:gap-6 p-10 md:p-0">
                    <div>
                        <h1 className="text-base sm:text-3xl font-thin">Directors Cut</h1>
                    </div>
                    <p className="font-thin p-4 text-center text-sm md:text-lg">{ children }</p>
                    <Link
                        href="https://github.com/TroyK12"
                        target="_blank"
                        className="w-[60%] sm:w-[80%] md:w-[25%] text-center p-3 text-sm lg:text-base border rounded-xl whitespace-nowrap cursor-pointer bg-transparent transform-background duration-500 ease-in-out hover:bg-[#515960]">
                        Source C0de
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}
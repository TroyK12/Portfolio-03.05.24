'use client'
import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link";
import { useRef, useState } from "react"
import laptop from "@/assets/laptop.png"
import phone from '@/assets/phone.png'
import styles from './projects.module.css'

const variants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
}


export default function ListedProjects({ project }: any) {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const container = ref.current;
    
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const x = clientX - containerRect.left;
          const y = clientY - containerRect.top;
    
          setMousePosition({ x, y });
        }
      };

    return (
        <motion.div
            initial='hidden'
            whileInView='reveal'
            transition={{ staggerChildren: 0.019 }}
            viewport={{ margin: '-20%' }}
            className="mx-5 w-[85%] sm:w-[65vw] md:w-[30vw]">
            <motion.div
                ref={ref}
                transition={{ duration: 2.5 }}
                variants={variants}
                className={`relative ${isHovered ? styles.imageDropshadowWhite : styles.imageDropshadow} overflow-hidden rounded-xl ease-in-out duration-500 group md:cursor-none`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={handleMouseMove}
            >
                <div className="w-full h-[50%] flex justify-end pt-14">
                    <div className="relative w-[65%] flex justify-end aspect-video overflow-hidden ease-in-out duration-1000 group-hover:scale-[1.1] group-hover:translate-y-[-10px] group-hover:translate-x-[-5px]">
                        <Image src={laptop} alt="laptop" width={200} className='absolute right-0 z-[1] w-[75%]' />
                        <div className="w-full h-full pt-4">
                            <Image src={project.image} alt="page" width={200} className='w-[61.5%] absolute left-[32%]' />
                        </div>
                    </div>
                    <div className="relative flex justify-center justify-self-start w-[35%] ease-in-out duration-1000 group-hover:scale-[1.1] group-hover:translate-y-[-10px] group-hover:translate-x-[5px]">
                        <Image src={phone} alt='phone' width={200} className="absolute z-[2] left-0 w-[43%]" />
                        <div className="w-[36.5%] absolute left-[4.5px] top-[2px] z-[1] rounded-[8px] overflow-hidden">
                            <Image src={project.mobileImage} alt="page" width={200} className='w-full h-full mx-auto' />
                        </div>
                    </div>
                </div>
                <Link href={project.src}>
                    { isHovered && <button
                    style={{
                        transform: `translate(${mousePosition.x - 70}px, ${mousePosition.y - 325}px)`,
                    }}
                    className={`hidden md:block absolute md:cursor-none z-[11] w-[150px] h-[150px] rounded-full text-sm blur-2xl shadow-2xl duration-100 whitespace-normal`}>Visit { project.name }!</button>}
                </Link>
                <div className="flex flex-col items-center justify-center p-7">
                    <h3 className="text-sm sm:text-base md:text-xl font-extrabold text-[#fff] mix-blend-difference">{ project.title }</h3>
                    <p className="text-xs sm:text-sm font-mono py-5 tracking-widest leading-6">{ project.desc }</p>
                </div>
            </motion.div>
        </motion.div>
  )
}
'use client'
import phone from '@/assets/phone.png'
import logo from '@/assets/TK.png'
import duluthBridge from "@/assets/duluth-bridge.png"
import duluthTrail from "@/assets/duluth-trail.png"
import surfing from "@/assets/surfing.jpg"
import snowboard from "@/assets/snowboarding.jpg"

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


const images = [
    duluthBridge.src,
    duluthTrail.src,
    surfing.src,
    snowboard.src,
]

export function Images({ images }: any) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const startImg = Math.floor(Math.random() * images.length)
        setCurrentImageIndex(startImg)

        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => images.length === prevIndex + 1 ? 0 : prevIndex + 1);
        }, 8000);
        return () => clearInterval(interval);
      }, []);

    return (
    <>
        {images.map((img: string | StaticImport, index: number | null | undefined) => (
            <div key={index}
            className={`absolute top-0 left-2 w-[92%] h-full rounded-[50px] overflow-hidden flex justify-start items-center transition-opacity duration-[3s] ${index === currentImageIndex ? 'opacity-100 z-[1]' : 'opacity-0'}`}
            style={{ transition: 'opacity 3s ease-in-out' }}>
                <Image className={`min-h-full min-w-max`} width={600} height={571.5} loading='lazy' src={img} alt={`Background Image ${index! + 1}`} />
            </div>
        ))}
    </>
    )
}

export default function FramerCardStyles() {
    let { scrollYProgress } = useScroll()
    let opacity = useTransform(scrollYProgress, [0, 0.2], ["1", "0"])

    return (
        <>
            <div className='relative z-[1] w-[235px] h-[450px] overflow-hidden flex items-center justify-center'>
                <Image src={phone} alt="Duluth Image" width={300} height={571.5} className={`relative z-[3] w-full h-full`} />
                <motion.div style={{opacity}} className={`absolute z-[2] top-0 left-2 ease-in-out duration-[2.5s] bg-[#101010] w-[92%] h-full rounded-[50px] flex items-center justify-center`}>{/* ${inView ? 'opacity-0' : 'opacity-100'} */}
                    <Image src={logo} alt='logo' width={65} height={55.5} />
                </motion.div>
                <Images images={images} />
            </div>
        </>
    )
}
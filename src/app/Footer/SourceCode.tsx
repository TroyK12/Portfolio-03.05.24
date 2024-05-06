"use client"
import { useEffect, useState } from "react"
import Link from "next/link";
import RandomLetter from "./RandomLetter";


export default function SourceCode({ children }: any) {
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
        background: `radial-gradient(circle at ${mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1) * 100}% ${mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1) * 100}%, transparent 0%, #0b132bd4 10%, #0B132B 15%)`,
    };
    

    return (
        <div className="h-screen w-screen pt-10">
            <div onMouseMove={handleMouseMove} className="w-full h-full flex justify-center items-center">
                <div className="relative w-[90vw] h-[80vh] gitbox z-10">
                    <RandomLetter />
                    <div style={{ ...backgroundStyles }} className="absolute top-0 w-full h-full rounded-3xl">
                        <div className="flex flex-col items-center justify-center w-full md:w-[50%] h-full p-10 gap-10">                     
                            <h1 className="text-xl sm:text-3xl font-thin">Directors Cut</h1>
                            <p className="font-thin p-4 text-center text-sm md:text-lg">{ children }</p>
                            <Link
                                href="https://github.com/TroyK12"
                                target="_blank"
                                className="w-[60%] sm:w-[80%] md:w-[45%] text-center p-3 text-sm lg:text-base border rounded-xl whitespace-nowrap cursor-pointer bg-transparent transform-background duration-500 ease-in-out hover:bg-[#515960]">
                                Source C0de
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
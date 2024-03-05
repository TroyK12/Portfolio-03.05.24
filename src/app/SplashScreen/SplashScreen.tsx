"use client"

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
    text: string;
    delay: number;
}

const Typewriter = ({ text, delay }: TypewriterProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
      
          return () => clearTimeout(timeout);
        }
      }, [currentIndex, delay, text]);
  
    return <span>{currentText}</span>;
  };

export default function SplashScreen() {
    const splashRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            if (splashRef.current) {
                splashRef.current.classList.add("splash-screen");
            }
        }, 3000);
        
      return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div ref={splashRef} className="z-[9999] fixed w-screen h-screen flex justify-center items-center bg-[#1f2224] shadow-2xl">
            <div className="relative w-[90vw] lg:w-[40vw] h-[200px]">
                <div className="absolute top-0 w-[25%] h-[2px] bg-white splash-animation-1" />
                <div className="absolute right-0 w-[2px] h-[25%] bg-white splash-animation-2"/>
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-white splash-animation-3" />
                <p className="text-[100px] md:text-[140px] font-thin pl-10 animate-pulse"><Typewriter text="KUSH" delay={500} /></p>
            </div>
        </div>
    )
}
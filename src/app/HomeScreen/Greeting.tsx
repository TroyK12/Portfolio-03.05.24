"use client"
import { useEffect, useRef } from "react";

export default function Greeting({ children }: any) {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            if (ref.current) {
                ref.current.classList.add("left-slide-in");
            }
        }, 4000);
        
      return () => clearTimeout(timeoutId);
    }, []);

    return (
        <h1 ref={ref} className="text-4xl md:text-7xl mt-36 ml-12">{ children }</h1>
    )
}
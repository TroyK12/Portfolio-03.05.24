"use client"
import { useEffect, useRef } from "react";

const timeOfDay = () => {
    const currentHour = new Date().getHours();
  
    if (currentHour >= 0 && currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  }

export default function Greeting() {
    const ref = useRef<HTMLDivElement>(null);
    const greeting = timeOfDay()

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            if (ref.current) {
                ref.current.classList.add("left-slide-in");
            }
        }, 4000);
        
      return () => clearTimeout(timeoutId);
    }, []);

    return (
        <h1 ref={ref} className="text-4xl md:text-7xl mt-36 ml-12">{ greeting }</h1>
    )
}
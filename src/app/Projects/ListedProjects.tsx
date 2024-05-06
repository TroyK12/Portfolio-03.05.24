'use client'
import Image from "next/image"
import Link from "next/link";
import { useRef, useState } from "react"


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
        <div
            ref={ref}
            className="relative image-dropshadow overflow-hidden mx-5 w-[40vw] md:w-[35vw] aspect-video"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            <Image
                className={`rounded shadow-lg h-full ${isHovered ? 'scale-105' : 'scale-100'} transition-transform duration-1000 ease-in-out`}
                src={project.image}
                alt={project.name}
                priority />
            <Link href={project.src}>
                <div className={`absolute md:cursor-none z-10 top-0 w-full h-full flex justify-center items-center bg-[#242729b3] ${isHovered ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-in-out`}>
                <div className="block md:hidden text-xl font-thin shadow-2xl">Visit { project.name }!</div>
                </div>
                { isHovered && <button
                style={{
                    transform: `translate(${mousePosition.x - 70}px, ${mousePosition.y - 400}px)`,
                }}
                className={`hidden md:block absolute md:cursor-none z-[11] w-[150px] h-[150px] rounded-full bg-gray-950 text-xl font-thin shadow-2xl duration-100 whitespace-normal`}>Visit { project.name }!</button>}
            </Link>
        </div>
  )
}
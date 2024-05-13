"use client"
import { useEffect, useRef } from 'react';
import Greeting from "./Greeting";
import { motion, useScroll, useTransform } from 'framer-motion';
import Trees from './Trees';

const CanvasHome = () => {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas?.getContext('2d');
  
        if (!ctx || !canvas) {
            return;
        }
  
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
  
        handleResize();
  
        window.addEventListener('DOMContentLoaded', handleResize);

        const wave = {
            y: canvas.height / 2,
            length: 0.005,
            ampl: 900,
            frequency: 0.005,
        }

        const backgroundColor = {
            r: 0,
            g: 0,
            b: 35,
            a: 0.02
        }

        const stroke = {
            h: 200,
            s: 80,
            l: 80,
        }

        let increment = wave.frequency
        let frame: number = 0
        let offsetX = 0

        const draw = () => {
            ctx.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2)
            ctx.moveTo(-2, canvas.width / 2);
            
            for (let i = -1; i < canvas.width; i += 2) {
                const offsetXDistortion = Math.sin(i * 0.05 + frame * 0.008) * 40; 
                ctx.lineTo(i + offsetX + offsetXDistortion, wave.y + (Math.sin(i * wave.length + increment) * wave.ampl / 0.8 + i) / frame);
            }
    
            ctx.strokeStyle = `hsl(${Math.abs(stroke.h * Math.sin(increment))}, ${stroke.s}%, ${stroke.l}%)`;
            ctx.stroke();

            
            if (frame % 100 === 0) {
                increment += wave.frequency
                offsetX += Math.sin(frame * 0.02);
            }
            frame++
            
            requestAnimationFrame(draw);
        }

        draw()
        return () => {
          window.removeEventListener('DOMContentLoaded', handleResize);
        };
        
    }, [])


    let { scrollYProgress } = useScroll()
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"])
    
    return (
        <motion.div style={{ y }} className='fixed z-[-2] block top-0 left-0 w-full h-full overflow-hidden bg-[#727272da]'>
            <canvas ref={ref as React.MutableRefObject<HTMLCanvasElement>} className="w-full h-full" />
            <div className='absolute flex top-0 z-[1] h-[90%] pl-20 text-center translate-y-1/2 text-2xl tracking-widest'>
                <Greeting />
                <div className='w-[2px] h-[26px] bg-white ml-1 blinker' /> 
                <Trees />
            </div>
        </motion.div>
    )
}

export default CanvasHome;
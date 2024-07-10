'use client'
import { motion } from 'framer-motion';

interface FramerStylesProps {
    children: React.ReactNode;
    className1: string;
    className2?: string;
    fadeDirection?: number;
    color?: string;
}

export default function FramerTextStyles({ children, className1, className2, fadeDirection, color }: FramerStylesProps) {
    const variants = {
        hidden: {
            opacity: 0,
            translateX: fadeDirection,
        },
        reveal: {
            opacity: 1,
            translateX: 0,
        },
    }

    return (
        <motion.div
            initial='hidden'
            whileInView='reveal'
            transition={{ staggerChildren: 0.019 }}
            viewport={{ margin: '0% 0% -25% 0%' }}
            className={className2}>
            <motion.p
                className={`${className1} ${color}`}
                transition={{ duration: 2.5 }}
                variants={variants}
                >
                    {children}
                </motion.p>
        </motion.div>
    )
}
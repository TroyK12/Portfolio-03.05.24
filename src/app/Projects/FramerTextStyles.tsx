'use client';
import { motion } from 'framer-motion';

interface FramerStylesProps {
	children: React.ReactNode;
	className1: string;
	className2?: string;
	popDistance?: number;
	color?: string;
}

export default function FramerTextStyles({
	children,
	className1,
	className2,
	popDistance = 30,
	color,
}: FramerStylesProps) {
	const variants = {
		hidden: {
			opacity: 0,
			y: popDistance,
			scale: 0.95,
		},
		reveal: {
			opacity: 1,
			y: 0,
			scale: 1,
		},
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="reveal"
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 10,
				mass: 0.5,
			}}
			viewport={{ margin: '0% 0% -25% 0%' }}
			className={className2}>
			<motion.p className={`${className1} ${color}`} variants={variants}>
				{children}
			</motion.p>
		</motion.div>
	);
}

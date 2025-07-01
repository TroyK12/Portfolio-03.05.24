'use client';
import { motion } from 'framer-motion';
import splitString from '@/utils/splitString';

interface FramerStylesProps {
	text: string;
	className?: string;
	duration?: number;
}

const charVariants = {
	hidden: { opacity: 0 },
	reveal: { opacity: 1 },
};

export default function FramerTextStyles({
	text,
	className,
	duration,
}: FramerStylesProps) {
	const characters = splitString(text);

	return (
		<motion.div
			initial="hidden"
			whileInView="reveal"
			transition={{ staggerChildren: 0.019 }}
			viewport={{ margin: '0% 0% -10% 0%' }}>
			{characters.map((char) => (
				<motion.span
					key={char + Math.random()}
					transition={{ duration }}
					variants={charVariants}
					className={className}>
					{char}
				</motion.span>
			))}
		</motion.div>
	);
}

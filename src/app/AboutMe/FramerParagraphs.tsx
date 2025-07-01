'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FramerParagraphs({ text }: { text: string }) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 0.9', 'start 0.7'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['40px', '0px']);
	const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.8, 1]);
	const blur = useTransform(scrollYProgress, [0, 1], ['2px', '0px']);
	const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

	return (
		<div ref={ref} className="relative overflow-hidden">
			<motion.div
				style={{
					y,
					opacity,
					filter: blur,
					scale,
				}}
				className="font-mono text-sm sm:text-base !leading-[45px] relative">
				{text}
			</motion.div>
		</div>
	);
}

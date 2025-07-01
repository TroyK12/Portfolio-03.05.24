'use client';

import { motion } from 'framer-motion';

export default function FramerParagraphs({ text }: { text: string }) {
	return (
		<div className="relative overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(2px)' }}
				whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true, amount: 0.7 }}
				className="font-mono text-sm sm:text-base !leading-[45px] relative">
				{text}
			</motion.div>
		</div>
	);
}

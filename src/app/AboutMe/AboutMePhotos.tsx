'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface ScrollImageTransitionProps {
	firstImage: StaticImageData;
	secondImage: StaticImageData;
	altText?: string;
	className?: string;
	aspectRatio?: string;
}

export default function ScrollImageTransition({
	firstImage,
	secondImage,
	altText = '',
	className = '',
	aspectRatio = '3/5',
}: ScrollImageTransitionProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end center'],
	});

	const slideProgress = useTransform(
		scrollYProgress,
		[0.6, 0.65],
		['100%', '0%'],
	);
	const fadeOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

	return (
		<div
			ref={containerRef}
			className={`relative w-full h-full shadow-2xl rounded overflow-hidden ${className}`}
			style={{ aspectRatio }}>
			<div className="absolute inset-0 w-full h-full">
				<Image
					src={firstImage}
					alt={altText}
					fill
					className="object-cover"
					priority
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>
			{/* <motion.div
				className="absolute inset-0 w-full h-full"
				style={{
					y: slideProgress,
					opacity: fadeOpacity,
				}}>
				<Image
					src={secondImage}
					alt={altText}
					fill
					className="object-cover"
					priority
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</motion.div> */}
		</div>
	);
}

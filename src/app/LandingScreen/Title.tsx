'use client';
import styles from './landing.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import whiteBird from '@/assets/white-bird.png';
import Image from 'next/image';

export default function Title() {
	let { scrollYProgress } = useScroll();
	let x = useTransform(scrollYProgress, [0, 0.07], ['0%', '-100%']);
	let xl = useTransform(scrollYProgress, [0, 0.05], ['0%', '120%']);
	let y = useTransform(scrollYProgress, [0, 0.05], ['0%', '-100%']);
	let yBird = useTransform(scrollYProgress, [0, 0.5], ['0%', '1000%']);

	return (
		<div className="relative sm:text-2xl md:text-5xl tracking-widest sm:leading-[70px] text-center">
			<div className="flex pl-6">
				<span className={styles.lets}>Lets&nbsp;</span>{' '}
				<span className={styles.create}> create</span>
				<div className="overflow-hidden">
					<motion.div style={{ x: xl }} className={`pl-2 ${styles.new}`}>
						new
					</motion.div>
				</div>
			</div>
			<div className="flex">
				<div className="overflow-hidden">
					<motion.div className={`pr-3 ${styles.possibilities}`} style={{ x }}>
						possibilities{' '}
					</motion.div>
				</div>
				<motion.div style={{ y }} className={styles.together}>
					together
				</motion.div>
			</div>
			<motion.div
				style={{ y: yBird }}
				className="absolute top-[-50px] right-20">
				<Image src={whiteBird} alt="bird" width={100} className="w-[100px]" />
			</motion.div>
		</div>
	);
}

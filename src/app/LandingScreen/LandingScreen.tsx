import styles from './landing.module.css';
import Header from './Header';
import Title from './Title';

const timeOfDay = () => {
	const currentHour = new Date().getHours();

	if (currentHour >= 0 && currentHour < 12) {
		return 'Good Morning';
	} else if (currentHour >= 12 && currentHour < 18) {
		return 'Good Afternoon';
	} else {
		return 'Good Evening';
	}
};

export default function LandingScreen() {
	const greeting = timeOfDay();

	const diffWords = [
		'Freelancer',
		'UI / UX Designer',
		'Developer',
		'Duluth Minnesota',
		greeting,
	];

	return (
		<div className="relative h-screen w-screen">
			<div className="fixed bottom-5 md:bottom-1 w-full flex justify-center">
				<div className="relative w-[2px] h-[75px] bg-white">
					<div
						className={`absolute z-20 top-0 w-full bg-slate-600 ${styles.indicatorBar}`}
					/>
				</div>
			</div>
			<div className="w-full h-full">
				<div className="pt-36 pl-28">
					<Header words={diffWords} />
				</div>
				<div className="w-full h-full flex justify-center items-center">
					<Title />
				</div>
			</div>
		</div>
	);
}

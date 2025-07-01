import AboutMe from './AboutMe/AboutMe';
import LandingScreen from './LandingScreen/LandingScreen';
import Projects from './Projects/Projects';

export default function Home() {
	return (
		<>
			<LandingScreen />
			<AboutMe />
			<Projects />
		</>
	);
}

import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";
import HomeScreen from "./HomeScreen/HomeScreen";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

export default function Home() {


  return (
      <div>
        <Navbar />
        <HomeScreen />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
  )
}

/* className="bg-[#1C2541]" */

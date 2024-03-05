import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";
import HomeScreen from "./HomeScreen/HomeScreen";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

export default function Home() {


  return (
      <div className="bg-[#99a5b1]">
        <Navbar />
        <HomeScreen />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
  )
}

import ListedProjects from "./ListedProjects";
import salon from "@/assets/salon-beauty.png"
import construction from "@/assets/construction-company.png"
import restaurant from "@/assets/restaurant-home.png"
import garageshop from "@/assets/garageshop.png"
import { StaticImageData } from "next/image";

interface Project {
    image: StaticImageData,
    name: string,
    src: string,
    id: number
}

const projectList: Project[] = [
    {
        image: garageshop,
        name: 'My Ecommerce Website',
        src: 'https://garageshop.vercel.app/',
        id: 1
    },
    {
        image: construction,
        name: 'My Construction Company',
        src: 'https://troyk12.github.io/woodman-works/',
        id: 2
    },
    {
        image: salon,
        name: 'My Beauty Salon',
        src: 'https://troyk12.github.io/forbidden-future/',
        id: 4
    },
    {
        image: restaurant,
        name: "Crave's Restaurant",
        src: 'https://troyk12.github.io/craves-coffee/',
        id: 3
    },
]

export default function Projects() {    

    return (
        <div id="projects" className="relative bg-[#1C2541]">
            <div className="pl-[10%] flex flex-col items-start">
                <h1 className="text-2xl">My Work</h1>
                <div className="w-[30vw] h-[1px] bg-white mt-3" />
            </div> 
            <section className="relative w-screen flex justify-center py-10 px-5">
                <div className="projects h-[300px]">
                    <div className="project-scroll">
                        {projectList.map((project) => {
                            return <ListedProjects project={project} key={project.id} />
                        })}
                    </div>
                    <div className="project-scroll">
                        {projectList.map((project) => {
                            return <ListedProjects project={project} key={project.id} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
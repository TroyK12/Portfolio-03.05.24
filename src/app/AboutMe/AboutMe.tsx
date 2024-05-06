import Card from './Card'
import duluth1 from "@/assets/duluth-1.png"
import duluth1Night from "@/assets/duluth-1-night.png"
import duluth2 from "@/assets/duluth-2.png"
import duluth2Night from "@/assets/duluth-2-night.png"
import duluth3 from "@/assets/duluth-3.png"
import duluth3Night from "@/assets/duluth-3-night.png"

const cards = [
    {
        id: 1,
        className: 'card1',
        image: duluth1,
        nightImage: duluth1Night,
        aboutArea: "Hiya There! My name is Troy, I am a self taught, self motivated, freelance software / website developer and designer! I was raised and currently live in the heart of Duluth Minnesota and love every day of it, whether that's me shedding the slopes of Spirit Mtn or on the lakewalk training for a marthon.",
        title: 'A Little About Me!',
        link: 'about',
        linkName: 'Where It Started!'
    },
    {
        id: 2,
        className: 'card2',
        image: duluth2,
        nightImage: duluth2Night,
        aboutArea: "With expertise in resposive design, e-commerce developemnt, and search engine opimization (SEO), I help clients establish a strong online presence and drive growth through their website.",
        title: 'Services Offered!',
        link: 'services',
        linkName: 'Learn More!'
    },
    {
        id: 3,
        className: 'card3',
        image: duluth3,
        nightImage: duluth3Night,
        aboutArea: "Need an e-commerce website? How about a personalised portfolio? Maybe you just need a nice looking, functional website for you or your small business. Whatever it may be, click the button below and send me a message of what your dream is!",
        title: "Let's Create Something!",
        link: 'contact',
        linkName: 'Contact Me!'
    },
]

export default function AboutMe() {

    return (
        <section id="aboutMe" className="w-screen h-auto py-28 bg-[#1C2541]">
            <div className="flex flex-col lg:flex-row justify-around items-center px-10 gap-10">
                {cards.map(card => {
                    return (
                        <Card className={ card.className } image={ card.image } nightImage={ card.nightImage } link={card.link} linkName={card.linkName} aboutArea={ card.aboutArea } key={ card.id }>
                            <h1 className="text-center">{ card.title }</h1>
                        </Card>)
                })}
            </div>
        </section>
    )
}
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Gesture powered media control",
        decription: "A computer vision-based system that enables gesture-based control of media playback using hand recognition via webcam, built using OpenCV and MediaPipe for a touch-free user experience.",
        image: "/projects/project1.jpg",
        tags: ["Python", "OpenCV", "MediaPipe","NumPy"],
        demoUrl: "#",
        githubUrl: "#",

    },
    {
        id: 2,
        title: "EasySplit ",
        decription: "A JavaFX-based expense-splitting app that helps groups manage shared costs by calculating balances and minimizing repayments,with an intuitive interface and smart debt simplification.",
        image: "/projects/project2.jpg",
        tags: ["Java", "JavaFX", "Scene Builder","Git"],
        demoUrl: "#",
        githubUrl: "#",

    },
    {
        id: 3,
        title: "Event Management Application ",
        decription: "A JavaFX-based event management and calendar application that helps users track, organize, and prioritize their events with a user-friendly interface and smart scheduling features.",
        image: "/projects/project3.jpg",
        tags: ["Java", "JavaFX", "Scene Builder","HashMaps & Stacks"],
        demoUrl: "#",
        githubUrl: "#",

    },
    {
        id: 4,
        title: "Fantasy Football League",
        decription: "A MySQL-based database project to manage a virtual football tournament, tracking player performance, team stats, and match outcomes using structured data models and dynamic SQL queries.",
        image: "/projects/project4.jpg",
        tags: ["MySQL", "SQL", "ER Diagrams"," Docker"],
        demoUrl: "#",
        githubUrl: "#",

    },
]


export const ProjectSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}   
                Featured <span className="text-primary"> Projects </span> 
            </h2> 

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I’ve worked on, showcasing my skills in software development, problem-solving, and building practical, user-focused solutions. Each project reflects my passion for technology and hands-on learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" > 
                        <div className="h-48 overflow-hidden">
                            <img  src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}

                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.decription}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transaction-colors duration-300"
                                        >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                        <Github size={20}/>
                                    </a>

                                </div>  

                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="tect-center mt-12">
                <a  
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/Krupa-lakshmana"
                    >
                    Check My Github < ArrowRight size={16}/>
                </a>

            </div>

        </div>
    </section>
    );
};
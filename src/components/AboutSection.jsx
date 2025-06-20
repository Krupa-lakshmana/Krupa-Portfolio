import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        💻 Aspiring Software Engineer | Problem Solver | Tech Enthusiast
                    </h3>
                    <p className="text-muted-foreground">
                    I’m a Master’s student in Software Engineering Systems at Northeastern University,
                    where I blend curiosity with code to build systems that solve real-world problems. 
                    With a passion for backend development and smart system design, 
                    I enjoy turning complex ideas into clean, reliable software.
                    </p> 
                    <p className="text-muted-foreground">
                    I'm on the lookout for software engineering roles where I can keep learning, 
                    build meaningful tech, and be part of something innovative.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In touch

                        </a>
                        <a href=" " 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV 
                        </a>

                    </div>
                    </div>
                
                   <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Backend Developer </h4>
                                <p className="text-muted-foreground">
                                Crafting scalable, secure, and well-structured server-side systems 
                                using clean architecture and APIs.
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Software Engineer </h4>
                                <p className="text-muted-foreground">
                                Building reliable, end-to-end software solutions 
                                with strong attention to performance and design.
                                </p>
                            </div>
                        </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                <div className=" flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> AI/ML Enthusiast </h4>
                                <p className="text-muted-foreground">
                                Exploring intelligent systems that learn, adapt, 
                                and power data-driven decision making.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
              </div>
            </div>
                
        </section>
        );
    };
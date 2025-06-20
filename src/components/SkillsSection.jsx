import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    //🧠 Core Programming & CS Skills
    {name: "Java", level: 85, category: "programming"},
    {name: "Python", level: 80, category: "programming"},
    {name: "JavaScript", level: 80, category: "programming"},
    {name: "Object-Oriented Programming(OOP)", level: 90, category: "programming"},
    {name: "Version Control", level: 85, category: "programming"},

    //Backend 
    {name: "Java (Spring Boot)", level: 90, category: "backend"},
    {name: "RESTful API", level: 80, category: "backend"},
    {name: "SQL (PostgreSQL, MySQL)", level: 75, category: "backend"},
    {name: "NoSQL (MongoDB, Firebase)", level: 90, category: "backend"},
    {name: "Docker", level: 90, category: "backend"},

    //AI & Machine Learning
    {name: "Pandas, NumPy, scikit-learn, TensorFlow, Keras", level: 90, category: "AI & ML"},
    {name: "NLTK,LLM, Hugging Face Transformers", level: 70, category: "AI & ML"},
    {name: "OpenAI API, LangChain", level: 70, category: "AI & ML"},
    {name: "Matplotlib, Seaborn", level: 90, category: "AI & ML"},
    {name: "UML, ER diagrams", level: 80, category: "AI & ML"},

];

const categories = ["all", "programming" , "backend", "AI & ML"]; 

export const SkillsSection = ()=> {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all"  || skill.category === activeCategory
    );

    return ( 
        <section id="skills"
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn (
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-foreground ": "bg-secondary/70 text-foreground hover:bd-secondary"

                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    { filteredSkills.map((skill, key) => (
                        <div
                        key={key}
                        className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden" >
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                                    style={{width: skill.level + "%"}}
                                /> 
                            </div>
                            <div className="text-right mt-1"> 
                                <span className=" text-sm text-muted-foreground">
                                    {skill.level}% 
                                </span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
        );
};
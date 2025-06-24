import { Menu ,X,Home, User, Settings, Folder, Mail } from "lucide-react";
import {cn} from "../lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name : "Home", href: "#hero", icon: <Home size={18} />},
    {name : "About", href: "#about",icon: <User size={18} />},
    {name : "Skills", href: "#skills", icon: <Settings size={18} /> },
    {name : "Project", href: "#projects", icon: <Folder size={18} /> },
    {name : "Contact", href: "#contact", icon: <Mail size={18} />},

]


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen , setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);


    }, [] );

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                    >
                    <span  className="relative z-10">
                        <span className="text-glow text-foreground"> </span> {" "}
                    </span>
                </a>

                { /* desktop nav */}
                <div className="hidden md:flex ml-auto space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name} 
                            {item.icon}   
                        </a>
                    ))}
                </div>
               
                { /* Mobile nav */}

                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24 }/> :  <Menu size={24}/>}{""}
                </button>
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-30 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
                <div 
                    className={cn (
                        "fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden",
                        isMenuOpen ? "translate-x-0" : "translate-x-full"

                    )}
                >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            >
                             {item.icon}

                            {item.name}    
                        </a>
                    ))}
                </div>
                </div>
            </div>
        </nav>
    );
};
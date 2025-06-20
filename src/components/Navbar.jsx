import { Menu ,X } from "lucide-react";
import {cn} from "../lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name : "Home", href: "#hero"},
    {name : "About", href: "#about"},
    {name : "Skills", href: "#skills"},
    {name : "Project", href: "#projects"},
    {name : "Contact", href: "#contact"},

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
                        <span className="text-glow text-foreground"> KLTech </span> {" "}
                        Portfolio 
                    </span>
                </a>

                { /* desktop nav */}
                <div className="hidden md:flex ml-auto space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}    
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
                            {item.name}    
                        </a>
                    ))}
                </div>
                </div>
            </div>
        </nav>
    );
};
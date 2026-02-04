import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import {ContactSection} from "../components/ContactSection";
import AcademicsSection from "../components/AcademicsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import {ContactSection} from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { TeachingSection } from "../components/TeachingSection";
import { ResearchSection } from "../components/ResearchSection";


export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Togglee */}
        <ThemeToggle/>

        {/* Background Effects  */}
        <StarBackground/>

        {/* Navbar */}
        <Navbar/>

        {/* Main Content */}

        <main>
            <HeroSection/>
            <AboutSection/>
            <ExperienceSection />
            <TeachingSection />
            <ResearchSection />
            <AcademicsSection />
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
    </div>
    );
};
"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";

export default function Home() {
 
  return (
    <main>
      <Navbar />
      <div className="container mt-24 mx-auto px-4 py-4 flex flex-col items-center justify-center">
        <HeroSection />
        <TechStack/>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

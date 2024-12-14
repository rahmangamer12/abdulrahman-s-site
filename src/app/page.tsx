"use client"
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
     <div>
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <Footer />
     </div>   

  );
}

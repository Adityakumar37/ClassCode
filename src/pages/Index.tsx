import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JavaScriptNotes from "@/components/JavaScriptNotes";
import HtmlNotes from "@/components/HtmlNotes";
import CssNotes from "@/components/CssNotes";
import Footer from "@/components/Footer";

type ActiveSection = "home" | "html" | "css" | "javascript";

const Index = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("home");

  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreNotes = () => {
    setActiveSection("javascript");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {activeSection === "home" && (
        <>
          <HeroSection onExploreNotes={handleExploreNotes} />
          <Footer onContinueLearning={handleExploreNotes} />
        </>
      )}

      {activeSection === "javascript" && (
        <>
          <JavaScriptNotes />
          <Footer onContinueLearning={() => { }} />
        </>
      )}

      {activeSection === "html" && (
        <>
          <HtmlNotes />
          <Footer onContinueLearning={() => handleNavigate("css")} />
        </>
      )}

      {activeSection === "css" && (
        <>
          <CssNotes />
          <Footer onContinueLearning={() => handleNavigate("javascript")} />
        </>
      )}
    </div>
  );
};

export default Index;


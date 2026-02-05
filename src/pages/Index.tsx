import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JavaScriptNotes from "@/components/JavaScriptNotes";
import ComingSoonSection from "@/components/ComingSoonSection";
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
    <div className="min-h-screen bg-background">
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
          <Footer onContinueLearning={() => {}} />
        </>
      )}

      {activeSection === "html" && <ComingSoonSection technology="html" />}

      {activeSection === "css" && <ComingSoonSection technology="css" />}
    </div>
  );
};

export default Index;

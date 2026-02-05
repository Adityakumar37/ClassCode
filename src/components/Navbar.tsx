import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: "home" | "html" | "css" | "javascript";
  onNavigate: (section: "home" | "html" | "css" | "javascript") => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", available: true },
    { id: "html", label: "HTML", available: false },
    { id: "css", label: "CSS", available: false },
    { id: "javascript", label: "JavaScript", available: true },
  ] as const;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 rounded-lg bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold">
            <span className="gradient-text">Code</span>
            <span className="text-foreground">Notes</span>
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => item.available && onNavigate(item.id)}
              className={`relative px-4 py-2 rounded-lg font-medium transition-colors ${
                !item.available
                  ? "text-muted-foreground cursor-not-allowed"
                  : activeSection === item.id
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              whileHover={item.available ? { scale: 1.05 } : undefined}
              whileTap={item.available ? { scale: 0.95 } : undefined}
            >
              <span className="relative z-10 flex items-center gap-2">
                {item.label}
                {!item.available && (
                  <span className="coming-soon-badge text-[10px]">Soon</span>
                )}
              </span>
              {activeSection === item.id && item.available && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {activeSection === item.id && item.available && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
        >
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.available) {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
                  !item.available
                    ? "text-muted-foreground"
                    : activeSection === item.id
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted"
                }`}
              >
                <span>{item.label}</span>
                {!item.available && (
                  <span className="coming-soon-badge">Soon</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

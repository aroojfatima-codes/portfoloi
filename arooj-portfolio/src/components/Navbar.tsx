import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 shadow-lg" : "py-6"
      }`}
      style={{
        backgroundColor: "rgba(4, 4, 14, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0, 229, 255, 0.1)"
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="text-2xl tracking-tight flex items-center gap-1"
          style={{ fontFamily: "var(--app-font-sans)", fontWeight: 800 }}
        >
          <span style={{ color: "#ffffff", fontFamily: "Syne, sans-serif" }}>Arooj</span>
          <span style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}>Fatima</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="relative text-sm font-medium transition-colors group"
              style={{ color: "var(--txt2)" }}
            >
              <span className="group-hover:text-white transition-colors">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "var(--cyan)" }}></span>
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/AroojFatima-CV.pdf"
            download="Arooj_Fatima_CV.pdf"
            className="px-5 py-2 text-sm font-medium rounded-full transition-all hover:-translate-y-1"
            style={{ border: "1px solid var(--cyan)", color: "var(--cyan)", backgroundColor: "transparent" }}
          >
            Download CV
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="px-5 py-2 text-sm font-medium rounded-full transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(255,107,34,0.4)] hover:shadow-[0_0_25px_rgba(255,107,34,0.6)]"
            style={{ background: "linear-gradient(90deg, var(--orange), var(--orange2))", color: "#fff" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "var(--txt)" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--bg2)", borderBottom: "1px solid var(--border-col)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-lg font-medium transition-colors block"
                  style={{ color: "var(--txt)" }}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-4 pt-4" style={{ borderTop: "1px solid var(--border-col)" }}>
                <a
                  href="/AroojFatima-CV.pdf"
                  download="Arooj_Fatima_CV.pdf"
                  className="px-5 py-3 text-center text-sm font-medium rounded-full"
                  style={{ border: "1px solid var(--cyan)", color: "var(--cyan)" }}
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="px-5 py-3 text-center text-sm font-medium rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--orange), var(--orange2))", color: "#fff" }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

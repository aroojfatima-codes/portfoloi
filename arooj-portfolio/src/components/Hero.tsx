import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, MapPin, Mail } from "lucide-react";

const roles = [
  "Aspiring Software Engineer",
  "Computer Science Student",
  "AI & Cybersecurity Enthusiast",
];

const floatingTags = [
  { id: 1, text: "Java OOP", color: "var(--cyan)", top: "10%", left: "15%", delay: 0 },
  { id: 2, text: "React.js", color: "var(--purple)", top: "20%", right: "10%", delay: 0.5 },
  { id: 3, text: "DSA Expert", color: "var(--cyan)", bottom: "25%", left: "5%", delay: 1 },
  { id: 4, text: "Git & GitHub", color: "var(--blue)", top: "60%", right: "5%", delay: 1.5 },
  { id: 5, text: "AI Learning", color: "var(--cyan)", bottom: "10%", right: "30%", delay: 2 },
  { id: 6, text: "Cybersec", color: "var(--orange)", top: "5%", left: "50%", delay: 2.5 },
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-24 pb-12 relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ backgroundImage: "radial-gradient(var(--cyan) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20" style={{ backgroundColor: "var(--purple)" }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20" style={{ backgroundColor: "var(--cyan)" }} />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit backdrop-blur-sm" style={{ backgroundColor: "rgba(0,229,255,0.1)", border: "1px solid var(--cyan)" }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--cyan)" }}></span>
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: "var(--cyan)" }}></span>
            </span>
            <span className="text-sm font-medium tracking-wide uppercase" style={{ color: "var(--cyan)", fontFamily: "var(--app-font-mono)" }}>
              Open to Work
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]" style={{ fontFamily: "Syne, sans-serif", color: "var(--txt)" }}>
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--cyan), var(--blue))" }}>
              Arooj Fatima
            </span>
          </h1>
          
          <div className="h-10 md:h-12 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-medium absolute inset-0"
                style={{ color: "var(--txt2)" }}
              >
                {roles[currentRoleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-base md:text-lg max-w-lg leading-relaxed" style={{ color: "var(--txt3)" }}>
            Computer Science student passionate about building impactful software. AI and Cybersecurity enthusiast with a foundation in full-stack development.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <a 
              href="/AroojFatima-CV.pdf" 
              download="Arooj_Fatima_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              style={{ background: "linear-gradient(90deg, var(--cyan), var(--blue))", color: "var(--bg)" }}
            >
              <Download className="h-5 w-5" />
              Download CV
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{ border: "1px solid var(--border-col)", color: "var(--txt)", backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              View Projects
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-col gap-3 mt-6 text-sm font-medium" style={{ color: "var(--txt2)", fontFamily: "var(--app-font-mono)" }}>
            <a href="https://github.com/aroojfatima-codes" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors w-fit">
              <Github className="h-5 w-5" style={{ color: "var(--cyan)" }} />
              github.com/aroojfatima-codes
            </a>
            <a href="https://linkedin.com/in/aroojfatima-dev" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors w-fit">
              <Linkedin className="h-5 w-5" style={{ color: "var(--blue)" }} />
              linkedin.com/in/aroojfatima-dev
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-[500px] aspect-square flex items-center justify-center mt-12 lg:mt-0 hidden md:flex"
        >
          {/* Concentric Rings */}
          <div className="absolute w-[80%] h-[80%] rounded-full border-dashed animate-spin-slow" style={{ border: "2px dashed var(--border-col)", animationDuration: "20s" }} />
          <div className="absolute w-[60%] h-[60%] rounded-full border-dotted animate-spin-slow reverse" style={{ border: "2px dotted rgba(139,92,246,0.3)", animationDuration: "15s", animationDirection: "reverse" }} />
          <div className="absolute w-[40%] h-[40%] rounded-full border-solid animate-spin-slow" style={{ border: "1px solid rgba(0,229,255,0.4)", animationDuration: "10s" }} />
          
          {/* Center Eye */}
          <div className="absolute w-[20%] h-[20%] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.5)]" style={{ background: "linear-gradient(135deg, var(--card2), var(--card))", border: "1px solid var(--cyan)" }}>
            <div className="w-[50%] h-[50%] rounded-full bg-transparent border-2" style={{ borderColor: "var(--cyan)" }}>
               <div className="w-full h-full rounded-full animate-pulse" style={{ backgroundColor: "var(--cyan)" }} />
            </div>
          </div>

          {/* Floating Tags */}
          {floatingTags.map((tag) => (
            <motion.div
              key={tag.id}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: tag.delay, ease: "easeInOut" }}
              className="absolute px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-md whitespace-nowrap shadow-xl"
              style={{
                backgroundColor: "rgba(16, 16, 42, 0.8)",
                border: `1px solid ${tag.color}`,
                color: "var(--txt)",
                top: tag.top,
                left: tag.left,
                right: tag.right,
                bottom: tag.bottom,
                fontFamily: "var(--app-font-mono)",
                boxShadow: `0 4px 20px ${tag.color}20`
              }}
            >
              {tag.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

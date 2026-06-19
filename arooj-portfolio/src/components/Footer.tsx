import { Github, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 relative z-20" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border-col)" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo Left */}
          <div className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: "Syne, sans-serif", color: "var(--txt)" }}>
            Arooj <span style={{ color: "var(--cyan)" }}>Fatima</span>
          </div>

          {/* Center Text */}
          <div className="text-center text-sm font-medium" style={{ color: "var(--txt2)" }}>
            Designed & Developed with <span style={{ color: "var(--orange)" }}>❤️</span> by Arooj Fatima
          </div>

          {/* Right Social & Top Button */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/aroojfatima-codes" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full transition-colors"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border-col)", color: "var(--txt)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.borderColor = "var(--cyan)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--txt)"; e.currentTarget.style.borderColor = "var(--border-col)"; }}
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aroojfatima-dev/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full transition-colors"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border-col)", color: "var(--txt)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--blue)"; e.currentTarget.style.borderColor = "var(--blue)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--txt)"; e.currentTarget.style.borderColor = "var(--border-col)"; }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 text-center text-xs" style={{ color: "var(--txt3)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          © 2024 Arooj Fatima. All rights reserved.
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:-translate-y-1 transition-all z-50 group"
        style={{ backgroundColor: "var(--cyan)", color: "var(--bg)" }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </footer>
  );
}

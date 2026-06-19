import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Monitor, Database, ShoppingCart, Users, Layers } from "lucide-react";

const projects = [
  {
    title: "Flappy Bird Clone",
    description: "Desktop game using Java Swing and OOP. Focuses on core mechanics like gravity, jumping, and precise score calculation.",
    tags: ["Java", "Swing", "OOP"],
    link: "https://github.com/aroojfatima-codes",
    image: "/projects/FlappyBird.png",
    icon: Code2
  },
  {
    title: "Tourism Website",
    description: "Responsive tourism site with beautiful destinations. Provides an immersive UI with stunning layouts for travel enthusiasts.",
    tags: ["HTML", "CSS", "Bootstrap", "JS"],
    link: "https://github.com/aroojfatima-codes",
    image: "/projects/Tourism.png",
    icon: Monitor
  },
  {
    title: "DSA Visualization",
    description: "Educational visualization of data structures & algorithms helping students understand complex concepts through interaction.",
    tags: ["Java", "DSA", "Interactive"],
    link: "https://github.com/aroojfatima-codes",
    image: "/projects/DSA_Visuaizer.png",
    icon: Database
  },
  {
    title: "E-commerce Website",
    description: "Modern e-commerce frontend with responsive UI, dynamic product rendering, and interactive shopping cart functionality.",
    tags: ["JS", "Frontend", "Responsive"],
    link: "https://github.com/aroojfatima-codes",
    image: "/projects/Ecommrse.png",
    icon: ShoppingCart
  },
  {
    title: "HRMS Project",
    description: "Comprehensive Human Resource Management System handling employee records, attendance, and administrative tasks.",
    tags: ["System", "Database", "Web"],
    link: "https://github.com/aroojfatima-codes",
    image: "/projects/HRMS.png",
    icon: Users
  },
  {
    title: "FYP Frontend",
    description: "Final Year Project frontend work focused on modern UI/UX principles, seamless navigation, and dynamic state management.",
    tags: ["React", "UI/UX"],
    link: "https://github.com/aroojfatima-codes",
    image: "/projects/FYP_Portal.png",
    icon: Layers
  }
];

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 relative" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 text-center md:text-left"
          >
            <span className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold tracking-wider" style={{ color: "var(--cyan)", fontFamily: "var(--app-font-mono)" }}>
              <span className="hidden md:block w-8 h-[2px]" style={{ backgroundColor: "var(--cyan)" }}></span>
              // PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "Syne, sans-serif", color: "var(--txt)" }}>
              Featured <span style={{ color: "var(--cyan)" }}>Projects</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.title} variants={item} className="h-full">
                <div 
                  className="group flex flex-col h-full overflow-hidden rounded-[24px] border border-border-col transition-all duration-300"
                  style={{ 
                    backgroundColor: "var(--card)", 
                    borderColor: "var(--border-col)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "var(--cyan)";
                    e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border-col)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Thumbnail area */}
                  <div 
                    className="relative w-full overflow-hidden bg-card2"
                    style={{ minHeight: "220px" }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src !== "/arooj_profile.jpg") {
                          target.src = "/arooj_profile.jpg";
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                      <Icon className="w-4 h-4" />
                      Preview
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-center text-sm font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                      {project.title}
                    </div>
                  </div>

                  {/* Body area */}
                  <div className="flex-1 flex flex-col gap-4 p-6 rounded-b-[24px]">
                    <div>
                      <h3 className="text-[18px] font-bold mb-3" style={{ fontFamily: "Syne, sans-serif", color: "var(--txt)" }}>
                        {project.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed" style={{ color: "var(--txt2)" }}>
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-xs rounded-full"
                          style={{ 
                            backgroundColor: "rgba(255,255,255,0.05)", 
                            color: "var(--txt3)", 
                            border: "1px solid var(--border-col)",
                            fontFamily: "var(--app-font-mono)"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Buttons */}
                    <div className="grid grid-cols-2 gap-3 mt-auto pt-4" style={{ borderTop: "1px solid var(--border-col)" }}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                        style={{ backgroundColor: "rgba(0,229,255,0.1)", color: "var(--cyan)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--cyan)";
                          e.currentTarget.style.color = "var(--bg)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(0,229,255,0.1)";
                          e.currentTarget.style.color = "var(--cyan)";
                        }}
                      >
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                        style={{ backgroundColor: "var(--card2)", color: "var(--txt)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--card2)";
                        }}
                      >
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

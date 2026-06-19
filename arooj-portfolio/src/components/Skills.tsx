import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, 
  SiGit, SiGithub, SiBootstrap, SiExpress, 
  SiHtml5, SiCss, SiCplusplus, SiPython, 
  SiTailwindcss, SiFigma
} from "react-icons/si";
import { Coffee, Server, Code2 } from "lucide-react";

type Category = "All" | "Languages" | "Frontend" | "Backend" | "Tools";

const skillsData = [
  { name: "Java", category: "Languages", icon: Coffee },
  { name: "JavaScript", category: "Languages", icon: SiJavascript },
  { name: "C++", category: "Languages", icon: SiCplusplus },
  { name: "Python", category: "Languages", icon: SiPython },
  { name: "React.js", category: "Frontend", icon: SiReact },
  { name: "HTML5", category: "Frontend", icon: SiHtml5 },
  { name: "CSS3", category: "Frontend", icon: SiCss },
  { name: "Bootstrap", category: "Frontend", icon: SiBootstrap },
  { name: "Tailwind", category: "Frontend", icon: SiTailwindcss },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs },
  { name: "Express.js", category: "Backend", icon: SiExpress },
  { name: "MongoDB", category: "Backend", icon: SiMongodb },
  { name: "REST APIs", category: "Backend", icon: Server },
  { name: "Git", category: "Tools", icon: SiGit },
  { name: "GitHub", category: "Tools", icon: SiGithub },
  { name: "VS Code", category: "Tools", icon: Code2 },
  { name: "Figma", category: "Tools", icon: SiFigma },
];

const categories: Category[] = ["All", "Languages", "Frontend", "Backend", "Tools"];

export function Skills() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredSkills = skillsData.filter(
    skill => activeTab === "All" || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-24 relative" style={{ backgroundColor: "var(--bg2)" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <span className="flex items-center gap-3 text-sm font-semibold tracking-wider" style={{ color: "var(--cyan)", fontFamily: "var(--app-font-mono)" }}>
              <span className="w-8 h-[2px]" style={{ backgroundColor: "var(--cyan)" }}></span>
              // SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "Syne, sans-serif", color: "var(--txt)" }}>
              Technical <span style={{ color: "var(--cyan)" }}>Expertise</span>
            </h2>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeTab === cat ? "var(--cyan)" : "var(--card2)",
                color: activeTab === cat ? "var(--bg)" : "var(--txt2)",
                border: `1px solid ${activeTab === cat ? "var(--cyan)" : "var(--border-col)"}`,
                fontFamily: "var(--app-font-mono)"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative group rounded-xl overflow-hidden cursor-pointer"
                  style={{ 
                    backgroundColor: "var(--card)", 
                    border: "1px solid var(--border-col)",
                  }}
                >
                  {/* Top hover line */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, var(--cyan), var(--blue))" }}
                  />
                  
                  <div 
                    className="p-6 flex flex-col items-center justify-center gap-4 group-hover:border-transparent transition-colors duration-300"
                    style={{
                      border: "1px solid transparent"
                    }}
                  >
                    <Icon className="w-10 h-10 transition-colors duration-300 group-hover:text-white" style={{ color: "var(--cyan)" }} />
                    <span className="text-center font-semibold text-base transition-colors duration-300 group-hover:text-white" style={{ color: "var(--txt)", fontFamily: "Syne, sans-serif" }}>
                      {skill.name}
                    </span>
                  </div>

                  {/* Border hover effect */}
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ border: "1px solid var(--cyan)" }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export function About() {
  const stats = [
    { title: "COMSATS", subtitle: "CS Student" },
    { title: "AI Enthusiast", subtitle: "Machine Learning" },
    { title: "Java | React", subtitle: "Full Stack Dev" },
    { title: "GitHub", subtitle: "Active Projects" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--bg3)" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Photo & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Photo Frame */}
            <div 
              className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border/50 bg-card"
              style={{ borderTop: "4px solid var(--cyan)" }}
            >
              <img
                src="/arooj_profile.jpg"
                alt="Arooj Fatima"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 text-center z-10">
                <div className="text-xl font-bold" style={{ color: "var(--txt)", fontFamily: "Syne, sans-serif" }}>
                  Arooj Fatima
                </div>
                <div className="text-sm mt-1" style={{ color: "var(--cyan)", fontFamily: "var(--app-font-mono)" }}>
                  @aroojfatima-codes
                </div>
              </div>
            </div>

            {/* Mini Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-xl text-center flex flex-col justify-center"
                  style={{ backgroundColor: "var(--card2)", border: "1px solid var(--border-col)" }}
                >
                  <div className="font-bold text-sm" style={{ color: "var(--txt)", fontFamily: "Syne, sans-serif" }}>{stat.title}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--txt3)" }}>{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Text & Education */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-3 text-sm font-semibold tracking-wider" style={{ color: "var(--cyan)", fontFamily: "var(--app-font-mono)" }}>
                <span className="w-8 h-[2px]" style={{ backgroundColor: "var(--cyan)" }}></span>
                // DISCOVER
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "Syne, sans-serif", color: "var(--txt)" }}>
                About <span style={{ color: "var(--cyan)" }}>Me</span>
              </h2>
            </div>

            <div className="space-y-6 text-[16px] leading-relaxed" style={{ color: "var(--txt2)" }}>
              <p>
                I am a passionate Computer Science student dedicated to building impactful software. With a strong foundation in full-stack development, Java programming, and algorithmic problem-solving, I thrive on translating complex requirements into elegant, efficient code.
              </p>
              <p>
                Beyond standard web development, my interests lie deeply embedded in Artificial Intelligence and Cybersecurity. I am constantly exploring how intelligent algorithms and secure architectures can shape the next generation of digital experiences.
              </p>
              <p>
                When I'm not coding, you can find me analyzing data structures, exploring open-source projects, or learning the latest advancements in technology.
              </p>
            </div>

            {/* Education Card */}
            <div 
              className="mt-4 p-6 rounded-2xl relative overflow-hidden group"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border-col)" }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, var(--cyan), var(--blue))" }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold" style={{ color: "var(--txt)", fontFamily: "Syne, sans-serif" }}>
                    COMSATS University Islamabad
                  </h4>
                  <div className="text-sm mt-1" style={{ color: "var(--cyan)" }}>
                    Abbottabad Campus
                  </div>
                </div>
                <div 
                  className="px-4 py-2 rounded-lg text-sm font-semibold w-fit"
                  style={{ backgroundColor: "rgba(0,229,255,0.1)", color: "var(--cyan)", fontFamily: "var(--app-font-mono)" }}
                >
                  BS Computer Science
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

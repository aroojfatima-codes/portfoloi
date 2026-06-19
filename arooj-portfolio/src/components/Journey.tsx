import { motion } from "framer-motion";

export function Journey() {
  const milestones = [
    { num: "01", title: "Computer Science Journey", desc: "BSCS at COMSATS Abbottabad. Building strong foundations in algorithms and software engineering." },
    { num: "02", title: "Frontend Development", desc: "Mastering HTML, CSS, JavaScript, and React to build responsive and interactive web applications." },
    { num: "03", title: "Java Development", desc: "Deep diving into Object-Oriented Programming, Java Swing for desktop apps, and advanced data structures." },
    { num: "04", title: "DSA Practice", desc: "Solving complex algorithmic challenges and visualizing data structures to sharpen problem-solving skills." },
    { num: "05", title: "GitHub Projects", desc: "Actively contributing to open-source, managing version control, and building a public portfolio of projects." },
    { num: "06", title: "AI & Cybersecurity", desc: "Exploring the fundamentals of Machine Learning and secure software architectures for the future." },
  ];

  return (
    <section id="journey" className="py-24 relative" style={{ backgroundColor: "var(--bg2)" }}>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <span className="flex items-center gap-3 text-sm font-semibold tracking-wider" style={{ color: "var(--cyan)", fontFamily: "var(--app-font-mono)" }}>
              // TIMELINE
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "Syne, sans-serif", color: "var(--txt)" }}>
              My <span style={{ color: "var(--cyan)" }}>Journey</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" style={{ backgroundColor: "var(--border-col)" }} />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Center Dot */}
                  <div 
                    className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 mt-6 md:mt-0 z-10" 
                    style={{ 
                      backgroundColor: "var(--cyan)", 
                      boxShadow: "0 0 15px var(--cyan)",
                      border: "3px solid var(--bg2)"
                    }} 
                  />
                  
                  {/* Content Card */}
                  <div className={`w-full pl-[50px] md:pl-0 md:w-1/2 ${isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                    <div 
                      className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                      style={{ 
                        backgroundColor: "var(--card)", 
                        border: "1px solid var(--border-col)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--cyan)";
                        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,229,255,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-col)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="text-4xl font-extrabold mb-2 opacity-20 transition-opacity group-hover:opacity-100" style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}>
                        {milestone.num}
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "var(--txt)", fontFamily: "Syne, sans-serif" }}>
                        {milestone.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--txt2)" }}>
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}

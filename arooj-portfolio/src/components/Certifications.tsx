import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "Effective Business Websites",
    issuer: "Professional Certification",
  },
  {
    title: "Gemini Certified Educator",
    issuer: "Google",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "Professional Certification",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/30 relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 flex items-center gap-6 h-full">
                  <div className="h-16 w-16 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(var(--primary),0.4)]">
                    <Award size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{certification.title}</h3>
                    <p className="text-muted-foreground mt-1">{certification.issuer}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

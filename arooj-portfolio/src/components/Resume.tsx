import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const cvPath = "/AroojFatima-CV.pdf";
const cvDownloadName = "Arooj_Fatima_CV.pdf";

export function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Resume</h2>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-card/40 backdrop-blur-xl border-primary/20 overflow-hidden relative shadow-[0_0_30px_rgba(var(--primary),0.05)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <CardContent className="p-8 md:p-12 text-center flex flex-col items-center">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 rotate-3">
                <FileText size={40} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Resume Preview</h3>
              <p className="text-lg text-primary mb-6">Aspiring Software Engineer</p>
              
              <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
                Download or view my latest resume to learn more about my education, technical skills, projects, certifications, and professional experience.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 w-full md:w-auto" asChild>
                  <a href={cvPath} download={cvDownloadName}>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-border/50 w-full md:w-auto hover:bg-muted" asChild>
                  <a href={cvPath} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

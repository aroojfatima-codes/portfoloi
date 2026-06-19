import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email address"),
  message: z.string().trim().min(1, "Message is required"),
  website: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = "arooj71004@gmail.com";
const MIN_SUBMIT_TIME_MS = 2000;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const formStartedAt = useRef(Date.now());

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    if (isSubmitting) return;

    if (values.website || Date.now() - formStartedAt.current < MIN_SUBMIT_TIME_MS) {
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const message = "Something went wrong. Please try again later.";
      setStatusMessage(message);
      toast({
        title: "Message not sent",
        description: message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          subject: "New Portfolio Contact Form Submission",
          name: values.name.trim(),
          email: values.email.trim(),
          reply_to: values.email.trim(),
          message: values.message.trim(),
          to_email: CONTACT_EMAIL,
          submitted_from: "Arooj Fatima Portfolio Website",
          email_body: `Name: ${values.name.trim()}\n\nEmail: ${values.email.trim()}\n\nMessage:\n${values.message.trim()}\n\nSubmitted From:\nArooj Fatima Portfolio Website`,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      const message = "Thank you for your message. I will get back to you as soon as possible.";
      setStatusMessage(message);
      toast({
        title: "Message sent",
        description: message,
      });
      form.reset();
      formStartedAt.current = Date.now();
    } catch {
      const message = "Something went wrong. Please try again later.";
      setStatusMessage(message);
      toast({
        title: "Message not sent",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-card/20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you have a question, an opportunity, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="flex gap-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-muted transition-all text-foreground group">
                <Mail className="h-6 w-6 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com/aroojfatima-codes" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-muted transition-all text-foreground group">
                <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/aroojfatima-dev/" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-muted transition-all text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          <div className="bg-background/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  {...form.register("website")}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" autoComplete="name" className="bg-card/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" autoComplete="email" className="bg-card/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message..." 
                          autoComplete="off"
                          className="min-h-[120px] bg-card/50 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting} aria-busy={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                {statusMessage && (
                  <p className="text-sm text-muted-foreground text-center" role="status" aria-live="polite">
                    {statusMessage}
                  </p>
                )}
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

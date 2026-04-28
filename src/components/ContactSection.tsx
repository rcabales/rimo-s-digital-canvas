import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { z } from "zod";
import { brandEase } from "@/lib/motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ease = brandEase;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Please check your entries",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const { name, email, message } = result.data;
    const { error } = await supabase.from("contact_submissions").insert([{ name, email, message }]);
    setSubmitting(false);

    if (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thanks for reaching out!",
      description: "Your message has been received. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="label-meta mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl tracking-tighter mb-4">Let's work together.</h2>
          <p className="text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Have a project in mind or just want to chat? Drop me a line and I'll get
            back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="h-12 px-8 rounded-full bg-foreground text-card inline-flex items-center gap-2 text-sm font-medium hover:bg-primary transition-colors"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm text-muted-foreground mb-6">Or find me elsewhere</p>
            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:hello@rimocabales.dev"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <Mail size={20} />
                <span className="text-sm">hello@rimocabales.dev</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Facebook, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: MessageCircle, label: "WhatsApp", value: "+1 555 000 1234", href: "https://wa.me/15550001234" },
  { icon: Mail, label: "Email", value: "radyan@example.com", href: "mailto:radyan@example.com" },
  { icon: Facebook, label: "Facebook", value: "@mdradyan", href: "https://www.facebook.com/mohammad.radin.39" },
  { icon: Linkedin, label: "LinkedIn", value: "in/md-radyan", href: "https://www.linkedin.com/in/md-radyan/" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.project) {
      toast.error("Please fill out all fields");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", project: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Get in <span className="text-gradient-brand">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-2">Connect with Me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div>
            <h3 className="font-bold text-xl mb-6">Talk to me</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border bg-card p-5 hover:shadow-glow transition block"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center text-white mb-3">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">{c.label}</p>
                  <p className="text-xs text-muted-foreground">{c.value}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="font-bold text-xl mb-6">Write me your project</h3>
            <form onSubmit={submit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                className="w-full rounded-xl border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-105 transition"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
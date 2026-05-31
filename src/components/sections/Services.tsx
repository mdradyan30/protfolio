import { motion } from "framer-motion";
import { Layout, Code2, Layers, Smartphone, Database, Webhook, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Layout, title: "Frontend Development", desc: "Pixel-perfect, responsive UIs in React & Next.js." },
  { icon: Code2, title: "Backend Development", desc: "REST APIs, auth, and clean server-side architecture." },
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end apps with modern tooling." },
  { icon: Smartphone, title: "Mobile-Hybrid App Dev", desc: "Cross-platform apps with React Native & PWA." },
  { icon: Database, title: "Database Development", desc: "Schema design with PostgreSQL & MongoDB." },
  { icon: Webhook, title: "API Development", desc: "Secure, well-documented REST and GraphQL APIs." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            <span className="text-gradient-brand">Services</span>
          </h2>
          <p className="text-muted-foreground mt-2">What I Offer</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-3xl border bg-card p-6 hover:shadow-glow transition"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-brand grid place-items-center text-white mb-4">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                View More <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
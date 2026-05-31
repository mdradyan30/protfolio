import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const frontend = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Tailwind", level: "Advanced" },
];
const backend = [
  { name: "Node.js", level: "Intermediate" },
  { name: "Express", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "REST API", level: "Advanced" },
  { name: "Firebase", level: "Intermediate" },
  { name: "Supabase", level: "Intermediate" },
];

function Card({ title, items }: { title: string; items: { name: string; level: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border bg-card p-8 shadow-sm hover:shadow-glow transition"
    >
      <h3 className="font-bold text-xl mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6">More than 2 years</p>
      <div className="grid grid-cols-2 gap-4">
        {items.map((s) => (
          <div key={s.name} className="flex items-start gap-2">
            <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.level}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            <span className="text-gradient-brand">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-2">My Technical Level</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card title="Frontend Developer" items={frontend} />
          <Card title="Backend Developer" items={backend} />
        </div>
      </div>
    </section>
  );
}
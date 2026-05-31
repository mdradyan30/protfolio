import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const data = {
  Education: [
    { title: "Computer Science", place: "University of Tech", year: "2021 - 2024" },
    { title: "Web Development Bootcamp", place: "Online Academy", year: "2022" },
    { title: "UI/UX Design Course", place: "Design School", year: "2023" },
    { title: "React & Next.js Mastery", place: "Frontend Masters", year: "2024" },
  ],
  Experience: [
    { title: "Frontend Developer", place: "Freelance", year: "2023 - Present" },
    { title: "React Developer", place: "Tech Studio", year: "2022 - 2023" },
    { title: "Junior Web Developer", place: "Local Agency", year: "2021 - 2022" },
    { title: "Intern", place: "Startup", year: "2021" },
  ],
};

export function Qualification() {
  const [tab, setTab] = useState<"Education" | "Experience">("Education");
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-gradient-brand">Qualification</span>
          </h2>
          <p className="text-muted-foreground mt-2">My personal journey</p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {(["Education", "Experience"] as const).map((t) => {
            const Icon = t === "Education" ? GraduationCap : Briefcase;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition ${
                  tab === t
                    ? "bg-gradient-brand text-white shadow-glow"
                    : "border bg-card hover:bg-muted"
                }`}
              >
                <Icon className="w-4 h-4" /> {t}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />
          {data[tab].map((item, i) => (
            <motion.div
              key={item.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative grid grid-cols-2 gap-8 mb-10 ${i % 2 === 0 ? "" : ""}`}
            >
              <div className={i % 2 === 0 ? "text-right pr-8" : "col-start-2 pl-8"}>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <p className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.year}
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-brand ring-4 ring-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
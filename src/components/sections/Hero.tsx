import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, MessageCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const roles = ["UI/UX Designer", "Web Developer", "React Developer", "Next.js Expert"];

const techLogos = [
  { name: "HTML", color: "#e34f26", text: "<H>" },
  { name: "CSS", color: "#1572b6", text: "{}" },
  { name: "JS", color: "#f7df1e", text: "JS" },
  { name: "React", color: "#61dafb", text: "⚛" },
  { name: "Next", color: "#000", text: "N" },
  { name: "Tailwind", color: "#06b6d4", text: "TW" },
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Floating tech logo particles rising */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => {
          const tech = techLogos[i % techLogos.length];
          const left = (i * 53) % 100;
          const delay = (i % 6) * 1.5;
          const duration = 8 + (i % 5) * 1.5;
          return (
            <motion.div
              key={i}
              className="absolute text-2xl font-bold opacity-40 grid place-items-center w-10 h-10 rounded-lg bg-white/60 shadow-sm"
              style={{ left: `${left}%`, color: tech.color, bottom: -50 }}
              animate={{ y: [0, -900], opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
            >
              {tech.text}
            </motion.div>
          );
        })}
      </div>

      {/* Soft gradient blobs (sway left/right) */}
      <motion.div
        animate={{ x: [-40, 40, -40] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [40, -40, 40] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-purple-400/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="flex gap-6">
          {/* Social rail */}
          <div className="hidden sm:flex flex-col gap-3 pt-4">
            {[
              { icon: Github, href: "https://github.com/mdradyan30" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/md-radyan/" },
              { icon: Facebook, href: "https://www.facebook.com/mohammad.radin.39" },
              { icon: MessageCircle, href: "https://wa.me/" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center w-10 h-10 rounded-full border bg-white/70 backdrop-blur hover:bg-gradient-brand hover:text-white hover:border-transparent transition"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-lg text-muted-foreground mb-2">Hello,</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi I'm <span className="text-gradient-brand">Md Radyan</span>
              <span className="inline-block animate-bounce ml-2">👋</span>
            </h1>
            <div className="mt-4 h-10 overflow-hidden">
              <motion.div
                key={roleIdx}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl sm:text-3xl font-bold bg-gradient-pink bg-clip-text text-transparent"
              >
                {roles[roleIdx]}
                <span className="inline-block w-0.5 h-7 ml-1 bg-foreground animate-pulse align-middle" />
              </motion.div>
            </div>
            <blockquote className="mt-6 pl-4 border-l-4 border-cyan-500 italic text-muted-foreground max-w-md">
              "Design. Build. Secure — From user experience to secure code, designing
              and building the modern web."
            </blockquote>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-105 transition"
              >
                Say Hello <Send className="w-4 h-4" />
              </a>
              <a
                href="/cv.png"
                download="Md-Radyan-CV.png"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center"
        >
          {/* Animated rotating gradient ring */}
          <motion.div
            animate={{ x: [-30, 30, -30], rotate: 360 }}
            transition={{
              x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            }}
            className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #06b6d4, #6366f1, #a855f7, #ec4899, #06b6d4)",
            }}
          />
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden border-4 border-background bg-muted">
            <img
              src={profileImg}
              alt="Md Radyan portrait"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>

          {/* Orbiting tech badges */}
          {techLogos.slice(0, 5).map((t, i) => {
            const angle = (i / 5) * Math.PI * 2;
            const r = 200;
            return (
              <motion.div
                key={t.name}
                animate={{
                  x: [Math.cos(angle) * r, Math.cos(angle + Math.PI * 2) * r],
                  y: [Math.sin(angle) * r, Math.sin(angle + Math.PI * 2) * r],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute w-12 h-12 rounded-xl bg-white shadow-lg grid place-items-center text-sm font-bold"
                style={{ color: t.color }}
              >
                {t.text}
              </motion.div>
            );
          })}

          {/* Modern badge */}
          <div className="absolute -bottom-2 left-2 sm:left-8 px-4 py-2 rounded-xl bg-gradient-brand text-white shadow-glow">
            <p className="font-bold text-sm">Modern</p>
            <p className="text-xs opacity-90">Web Application Expert</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
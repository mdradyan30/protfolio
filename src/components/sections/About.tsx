import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Headphones, Download } from "lucide-react";
import aboutAnimation from "@/assets/about-animation.mp4";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">About <span className="text-gradient-brand">Me</span></h2>
          <p className="text-muted-foreground mt-2">My Introduction</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-2"
          >
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: Briefcase, label: "Experience", value: "2+ Years" },
                { icon: CheckCircle2, label: "Completed", value: "30+ Projects" },
                { icon: Headphones, label: "Support", value: "Online 24/7" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border bg-card p-4 text-center hover:shadow-glow transition"
                >
                  <s.icon className="w-5 h-5 mx-auto text-primary mb-2" />
                  <p className="font-semibold text-sm">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.value}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate web developer with a strong focus on building modern,
              responsive, and high-performance web experiences. I specialize in React,
              Next.js, and Tailwind CSS, and I enjoy turning complex ideas into clean,
              elegant interfaces. I'm always learning, always shipping.
            </p>
            <a
              href="/cv.png"
              download="Md-Radyan-CV.png"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-105 transition"
            >
              Download Resume <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Animated illustration on the right */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:order-1"
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md"
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
              <video
                src={aboutAnimation}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto drop-shadow-xl rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
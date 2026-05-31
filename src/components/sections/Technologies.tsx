import { motion } from "framer-motion";

const techs = [
  { name: "JS", color: "#f7df1e", bg: "#000" },
  { name: "React", color: "#61dafb", bg: "#0f172a" },
  { name: "Node", color: "#22c55e", bg: "#0f172a" },
  { name: "Tailwind", color: "#06b6d4", bg: "#0f172a" },
  { name: "Next", color: "#fff", bg: "#000" },
  { name: "Express", color: "#fff", bg: "#0f172a" },
  { name: "Mongo", color: "#22c55e", bg: "#0f172a" },
  { name: "TS", color: "#fff", bg: "#3178c6" },
];

export function Technologies() {
  const loop = [...techs, ...techs];
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Tech<span className="text-gradient-brand">nologies</span>
          </h2>
          <p className="text-muted-foreground mt-2">Tools I use</p>
        </div>

        <div className="overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {loop.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: 6 }}
                className="grid place-items-center w-24 h-24 rounded-2xl shadow-lg shrink-0 font-bold text-lg"
                style={{ background: t.bg, color: t.color }}
              >
                {t.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
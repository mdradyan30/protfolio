import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: p1,
    title: "Suncart — E-Commerce Product Platform",
    desc: "A modern e-commerce platform with vibrant UI, product grids, and live stats for online shopping.",
    tech: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Better Auth"],
    github: "https://github.com/mdradyan30/suncart-product-for-ecommers",
    live: "https://assignment-8-f.vercel.app/",
  },
  {
    img: p2,
    title: "Web Weaver Studio — Photo Scanning Website",
    desc: "A creative photo scanning and editing studio website with modern interface and smooth animations.",
    tech: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Better Auth"],
    github: "https://github.com/mdradyan30/web-weaver-studio",
    live: "https://photo-scenner-websie.netlify.app/",
  },
  {
    img: p3,
    title: "Digital Product Selling Site",
    desc: "A digital product marketplace with secure checkout, product listings, and modern user experience.",
    tech: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Better Auth"],
    github: "https://github.com/mdradyan30/digital-product-selling-site",
    live: "https://digital-product-website.netlify.app/",
  },
];

export function Projects() {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            <span className="text-gradient-brand">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-2">Recent Project</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden border bg-card hover:shadow-glow transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold hover:bg-foreground hover:text-background transition"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-brand text-white text-sm font-semibold hover:scale-105 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
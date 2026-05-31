import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const items = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    feedback:
      "Radyan delivered a stunning, fast website ahead of schedule. Communication was top-tier and the code was clean.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    feedback:
      "Great eye for detail and modern design. Our React app was rebuilt from scratch and performance jumped massively.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    feedback:
      "Working with Radyan was a breeze. The landing page conversions doubled within the first month of launch.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    name: "David Park",
    role: "CTO, FinTech Startup",
    feedback:
      "Exceptional technical skills paired with a sharp design sense. Delivered a complex dashboard ahead of deadline.",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
  {
    name: "Aisha Patel",
    role: "E-commerce Owner",
    feedback:
      "My Shopify store finally feels premium. Page speed, animations, and checkout flow all got a serious upgrade.",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    name: "Lucas Martin",
    role: "Agency Lead",
    feedback:
      "Reliable, creative, and fast. Radyan has become our go-to developer for any high-stakes client project.",
    avatar: "https://i.pravatar.cc/120?img=15",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            My Clients <span className="text-gradient-brand">Say</span>
          </h2>
          <p className="text-muted-foreground mt-2">Testimonial</p>
        </div>
        <Carousel opts={{ align: "start", loop: true }} className="px-2 md:px-12">
          <CarouselContent>
            {items.map((c, i) => (
              <CarouselItem key={c.name} className="basis-full md:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 2) * 0.1 }}
                  className="h-full rounded-3xl border bg-card p-8 relative hover:shadow-glow transition"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div>
                      <h3 className="font-bold">{c.name}</h3>
                      <p className="text-xs text-muted-foreground">{c.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.feedback}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
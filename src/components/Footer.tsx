import { Github, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gradient-brand">Md Radyan</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Modern web developer crafting responsive experiences.
          </p>
        </div>
        <div className="flex gap-3">
          {[
            { icon: Github, href: "https://github.com/mdradyan30" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/md-radyan/" },
            { icon: Facebook, href: "https://www.facebook.com/mohammad.radin.39" },
            { icon: Twitter, href: "https://x.com/MlRizwan" },
            { icon: Instagram, href: "https://instagram.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center w-10 h-10 rounded-full border bg-background hover:bg-gradient-brand hover:text-white hover:border-transparent transition"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Md Radyan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
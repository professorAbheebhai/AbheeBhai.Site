import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Youtube, Sparkles } from "lucide-react";

const socials = [
  { href: "https://twitter.com", label: "Twitter / X", Icon: Twitter },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://github.com", label: "GitHub", Icon: Github },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-glass-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl gradient-surface">
              <Sparkles className="h-4.5 w-4.5 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-bold">
              Auto<span className="text-gradient">Mind</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Honest writing about AI tools, automation and the future of work — from someone
            who actually uses them every day.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <p className="font-semibold">Explore</p>
            {[
              { to: "/blog", label: "All articles" },
              { to: "/categories", label: "Categories" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block text-muted-foreground transition-colors hover:text-neon"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Legal</p>
            <Link
              to="/privacy"
              className="block text-muted-foreground transition-colors hover:text-neon"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="block text-muted-foreground transition-colors hover:text-neon"
            >
              Terms of Service
            </Link>
            <a
              href="/sitemap.xml"
              className="block text-muted-foreground transition-colors hover:text-neon"
            >
              Sitemap
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Follow along</p>
          <div className="mt-4 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-neon"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-glass-border px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} AutoMind. Written in Lahore, read everywhere.
      </div>
    </footer>
  );
}

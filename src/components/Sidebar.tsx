import { Link } from "@tanstack/react-router";
import { Mail, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { allTags, categoryCounts, formatDate, posts } from "@/data/posts";

export function NewsletterCard() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
        if (!ok) {
          toast.error("That email doesn't look right.");
          return;
        }
        setEmail("");
        toast.success("You're on the list. One email a week, no fluff.");
      }}
      className="rounded-3xl glass p-6"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-surface">
        <Mail className="h-4.5 w-4.5 text-primary-foreground" />
      </span>
      <p className="mt-4 font-display text-lg font-semibold">The Sunday automation note</p>
      <p className="mt-2 text-sm text-muted-foreground">
        One tool, one workflow, one lesson from my week. Free, and you can leave anytime.
      </p>
      <input
        type="email"
        required
        maxLength={255}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="mt-4 w-full rounded-xl border border-input bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
      />
      <button
        type="submit"
        className="mt-3 w-full rounded-xl btn-shimmer px-4 py-2.5 text-sm font-semibold"
      >
        <span className="relative z-10">Subscribe</span>
      </button>
    </form>
  );
}

export function Sidebar({
  query,
  onQuery,
}: {
  query?: string;
  onQuery?: (v: string) => void;
}) {
  const recent = [...posts]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 5);

  return (
    <aside className="space-y-6">
      {onQuery && (
        <div className="rounded-3xl glass p-5">
          <label className="relative block">
            <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query ?? ""}
              onChange={(e) => onQuery(e.target.value)}
              maxLength={80}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-input bg-white/5 py-2.5 pr-4 pl-10 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
            />
          </label>
        </div>
      )}

      <div className="rounded-3xl glass p-6">
        <p className="font-display text-base font-semibold">Recent posts</p>
        <div className="mt-4 space-y-4">
          {recent.map((p) => (
            <Link
              key={p.id}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex gap-3"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1600}
                height={900}
                className="h-14 w-20 shrink-0 rounded-lg object-cover"
              />
              <span className="text-sm leading-snug text-muted-foreground transition-colors group-hover:text-foreground">
                {p.title}
                <span className="mt-1 block text-xs text-muted-foreground/70">
                  {formatDate(p.publishedAt)}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-3xl glass p-6">
        <p className="font-display text-base font-semibold">Categories</p>
        <div className="mt-4 space-y-2 text-sm">
          {categoryCounts().map((c) => (
            <Link
              key={c.name}
              to="/blog"
              search={{ category: c.name }}
              className="flex items-center justify-between rounded-lg px-2 py-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {c.name}
              <span className="font-mono text-xs text-neon">{c.count}</span>
            </Link>
          ))}
        </div>
      </div>

      <NewsletterCard />

      <div className="rounded-3xl glass p-6">
        <p className="font-display text-base font-semibold">Popular tags</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {allTags().map((t) => (
            <span
              key={t}
              className="rounded-full border border-glass-border px-3 py-1 text-xs text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

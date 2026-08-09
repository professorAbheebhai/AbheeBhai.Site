import { Link } from "@tanstack/react-router";
import { Clock, Eye } from "lucide-react";
import { useRef, useState } from "react";
import { formatDate, type Post } from "@/data/posts";

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 9, y: px * 11 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${
          tilt.x || tilt.y ? -6 : 0
        }px)`,
      }}
      className="group h-full rounded-3xl glass card-glow"
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="flex h-full flex-col overflow-hidden rounded-3xl"
      >
        <div className={`relative overflow-hidden ${large ? "aspect-16/9" : "aspect-3/2"}`}>
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            width={1600}
            height={900}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-medium text-neon">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3
            className={`font-semibold text-foreground transition-colors group-hover:text-gradient ${
              large ? "text-2xl" : "text-lg"
            }`}
          >
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-4 pt-2 text-xs text-muted-foreground">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readTime} min
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" /> {(post.views / 1000).toFixed(1)}k
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

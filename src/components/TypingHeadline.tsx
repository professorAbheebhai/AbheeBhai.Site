import { useEffect, useState } from "react";

const FULL = "The Future of Work is AI. Are You Ready?";

export function TypingHeadline() {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (n >= FULL.length) return;
    const t = setTimeout(() => setN((v) => v + 1), 42);
    return () => clearTimeout(t);
  }, [n]);

  return (
    <p className="font-mono text-sm text-neon sm:text-base">
      {FULL.slice(0, n)}
      <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-neon" />
    </p>
  );
}

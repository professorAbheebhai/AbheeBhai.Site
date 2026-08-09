import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-28 w-28">
            {[0, 0.6, 1.2].map((d) => (
              <span
                key={d}
                className="absolute inset-0 rounded-full border border-primary/60 animate-pulse-ring"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-10 w-10 rounded-full gradient-surface blur-[2px]" />
            </span>
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <span
                key={deg}
                className="absolute top-1/2 left-1/2 h-1.5 w-1.5 rounded-full bg-neon"
                style={{ transform: `rotate(${deg}deg) translate(46px) ` }}
              />
            ))}
          </div>
          <p className="mt-8 font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase">
            Initialising
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

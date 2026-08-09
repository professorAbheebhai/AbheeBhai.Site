import { useMemo } from "react";

/** Minimal markdown renderer for post bodies: headings, tables, lists, bold, quotes. */
function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**"))
      return (
        <strong key={i} className="font-semibold text-foreground">
          {p.slice(2, -2)}
        </strong>
      );
    if (p.startsWith("`") && p.endsWith("`"))
      return (
        <code
          key={i}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-neon"
        >
          {p.slice(1, -1)}
        </code>
      );
    if (p.startsWith("*") && p.endsWith("*"))
      return (
        <em key={i} className="italic text-muted-foreground">
          {p.slice(1, -1)}
        </em>
      );
    return <span key={i}>{p}</span>;
  });
}

type Block =
  | { kind: "h2" | "h3" | "p" | "quote"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };

function parse(md: string): Block[] {
  const lines = md.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = (lines[i] ?? "").trim();
    if (!line) {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ kind: "h3", text: line.slice(4) });
      i++;
    } else if (line.startsWith("## ")) {
      blocks.push({ kind: "h2", text: line.slice(3) });
      i++;
    } else if (line.startsWith("> ")) {
      blocks.push({ kind: "quote", text: line.slice(2) });
      i++;
    } else if (line.startsWith("| ")) {
      const rows: string[][] = [];
      while (i < lines.length && (lines[i] ?? "").trim().startsWith("|")) {
        const cells = (lines[i] ?? "")
          .trim()
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        if (!cells.every((c) => /^-{2,}$/.test(c))) rows.push(cells);
        i++;
      }
      blocks.push({ kind: "table", head: rows[0] ?? [], rows: rows.slice(1) });
    } else if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test((lines[i] ?? "").trim())) {
        items.push((lines[i] ?? "").trim().slice(2));
        i++;
      }
      blocks.push({ kind: "ul", items });
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test((lines[i] ?? "").trim())) {
        items.push((lines[i] ?? "").trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push({ kind: "ol", items });
    } else {
      blocks.push({ kind: "p", text: line });
      i++;
    }
  }
  return blocks;
}

export function Markdown({ content }: { content: string }) {
  const blocks = useMemo(() => parse(content), [content]);

  return (
    <div className="space-y-6 text-[1.06rem] leading-relaxed text-muted-foreground">
      {blocks.map((b, i) => {
        if (b.kind === "h2")
          return (
            <h2 key={i} className="pt-6 text-2xl font-bold text-foreground sm:text-3xl">
              {b.text}
            </h2>
          );
        if (b.kind === "h3")
          return (
            <h3 key={i} className="pt-2 text-xl font-semibold text-foreground">
              {b.text}
            </h3>
          );
        if (b.kind === "quote")
          return (
            <blockquote
              key={i}
              className="border-l-2 border-primary/70 pl-4 text-foreground/90 italic"
            >
              {inline(b.text)}
            </blockquote>
          );
        if (b.kind === "ul")
          return (
            <ul key={i} className="space-y-2 pl-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-surface" />
                  <span>{inline(it)}</span>
                </li>
              ))}
            </ul>
          );
        if (b.kind === "ol")
          return (
            <ol key={i} className="space-y-2 pl-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full glass font-mono text-xs text-neon">
                    {j + 1}
                  </span>
                  <span>{inline(it)}</span>
                </li>
              ))}
            </ol>
          );
        if (b.kind === "table")
          return (
          <div key={i} className="overflow-x-auto rounded-2xl glass">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  {b.head.map((h, j) => (
                    <th key={j} className="px-4 py-3 font-semibold text-foreground">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, j) => (
                  <tr key={j} className="border-b border-glass-border/60 last:border-0">
                    {r.map((c, k) => (
                      <td key={k} className="px-4 py-3 align-top">
                        {inline(c)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        if (b.kind === "p") return <p key={i}>{inline(b.text)}</p>;
        return null;
      })}
    </div>
  );
}

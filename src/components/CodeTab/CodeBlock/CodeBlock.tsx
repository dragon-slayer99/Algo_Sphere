// components/CodeBlock.tsx
import { useEffect, useState } from "react";
import { getHighlighter } from "shiki";

export default function CodeBlock({ code, lang }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function load() {
      const highlighter = await getHighlighter({
        themes: ["github-dark"],
        langs: [lang],
      });

      const out = highlighter.codeToHtml(code, {
        lang,
        theme: "github-dark",
      });

      setHtml(out);
    }
    load();
  }, [code, lang]);

  if (!html) return <div>Loading…</div>;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        borderRadius: "8px",
        padding: "1rem",
        overflowX: "auto",
      }}
    />
  );
}

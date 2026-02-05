import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  output?: string;
}

const CodeBlock = ({ code, output }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    const keywords = /\b(const|let|var|function|return|if|else|for|while|switch|case|break|default|console|log|typeof|new|true|false|null|undefined)\b/g;
    const strings = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g;
    const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
    const numbers = /\b(\d+)\b/g;

    let highlighted = code
      .replace(comments, '<span class="text-code-comment italic">$1</span>')
      .replace(strings, '<span class="text-code-string">$&</span>')
      .replace(keywords, '<span class="text-code-keyword">$1</span>')
      .replace(numbers, '<span class="text-code-variable">$1</span>');

    return highlighted;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-4"
    >
      <div className="code-block relative group">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-primary" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <pre className="p-4 overflow-x-auto">
          <code
            className="font-mono text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
          />
        </pre>
      </div>

      {/* Output */}
      {output && (
        <div className="mt-2 px-4 py-3 rounded-lg bg-muted/50 border-l-3 border-primary">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <span className="font-mono">→</span> Output
          </div>
          <pre className="font-mono text-sm text-primary whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </motion.div>
  );
};

export default CodeBlock;

import { useState } from "react";
import "./CodeBlock.css";

interface CodeBlockProps {
  /** 보여줄 코드 내용 */
  code: string;
  /** 헤더에 표시할 언어/파일명 라벨 (예: "bash", "package.json") */
  label?: string;
}

/** 라벨에 따라 언어를 표시하는 작은 점의 색상을 다르게 보여준다 */
const LANGUAGE_DOT_COLORS: Record<string, string> = {
  bash: "#a3a3a3",
  json: "#f0b429",
  ts: "#3b82f6",
  tsx: "#3b82f6",
  js: "#f0b429",
  css: "#a78bfa",
};

/** 코드를 보기 좋게 표시하고, 클릭 한 번으로 복사할 수 있는 컴포넌트 */
function CodeBlock({ code, label = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const dotColor = LANGUAGE_DOT_COLORS[label] ?? "#8b949e";

  const handleCopy = async () => {
    // "$ "는 화면에 보여주기 위한 프롬프트 표시일 뿐이라, 복사할 때는 빼고 실제 내용만 복사한다
    const copyText = code
      .split("\n")
      .map((line) => (line.startsWith("$ ") ? line.slice(2) : line))
      .join("\n");
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__label">
          <span className="code-block__dot" style={{ backgroundColor: dotColor }} />
          {label}
        </span>
        <button
          type="button"
          className="code-block__copy"
          onClick={handleCopy}
        >
          {copied ? "복사됨 ✓" : "복사"}
        </button>
      </div>
      <pre className="code-block__body">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;

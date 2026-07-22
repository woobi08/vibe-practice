import { useState } from "react";
import "./Terminal.css";

interface TerminalProps {
  /**
   * 터미널에 표시할 줄들.
   * "$ "로 시작하면 입력한 명령어로, 아니면 출력 결과로 표시된다.
   */
  code: string;
  /** 터미널 창 상단에 표시할 제목 */
  title?: string;
}

/** 실제 터미널처럼 보이도록 명령어와 출력을 구분해서 보여주는 컴포넌트 */
function Terminal({ code, title = "Terminal" }: TerminalProps) {
  const [copied, setCopied] = useState(false);
  const lines = code.split("\n");

  const handleCopy = async () => {
    // "$ "는 화면에 보여주기 위한 프롬프트 표시일 뿐이라, 복사할 때는 빼고 실제 명령어만 복사한다
    const copyText = lines
      .map((line) => (line.startsWith("$ ") ? line.slice(2) : line))
      .join("\n");
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="terminal">
      <div className="terminal__header">
        <div className="terminal__dots">
          <span className="terminal__dot terminal__dot--red" />
          <span className="terminal__dot terminal__dot--yellow" />
          <span className="terminal__dot terminal__dot--green" />
        </div>
        <span className="terminal__title">{title}</span>
        <button type="button" className="terminal__copy" onClick={handleCopy}>
          {copied ? "복사됨 ✓" : "복사"}
        </button>
      </div>
      <pre className="terminal__body">
        {lines.map((line, i) => {
          const isCommand = line.startsWith("$ ");
          return (
            <div className="terminal__line" key={i}>
              {isCommand ? (
                <>
                  <span className="terminal__prompt">$</span>
                  <span className="terminal__command">{line.slice(2)}</span>
                </>
              ) : (
                <span className="terminal__output">{line}</span>
              )}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

export default Terminal;

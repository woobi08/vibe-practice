import { Link } from "react-router-dom";
import Terminal from "../../components/Terminal/Terminal";
import Info from "../../components/Info/Info";
import Tip from "../../components/Tip/Tip";
import "../DocPage.css";

/** 도구 설정 > Figma MCP */
function FigmaMcpTool() {
  return (
    <article className="doc">
      <header className="doc-header">
        <p className="doc-eyebrow">🛠️ 도구 설정</p>
        <h1 className="doc-title">Figma MCP</h1>
        <p className="doc-goal">
          Claude Code가 Figma 파일의 레이어, 컴포넌트, 스타일을 직접 읽고
          코드로 옮길 수 있게 연결해주는 다리 역할을 해요.
        </p>
      </header>

      <section className="doc-section">
        <h2 className="doc-section-title">MCP란?</h2>
        <Info>
          MCP(Model Context Protocol)는 AI가 Figma 같은 외부 도구와 표준화된
          방식으로 대화할 수 있게 해주는 프로토콜이에요. Figma MCP가 연결되면
          Claude Code가 지금 선택된 프레임을 &quot;눈으로 보듯&quot; 이해할 수 있어요.
        </Info>
      </section>

      <section className="doc-section">
        <h2 className="doc-section-title">연결 방법</h2>
        <ul className="doc-list">
          <li>Figma에서 작업할 파일을 연다.</li>
          <li>Figma MCP 플러그인(Talk to Figma 등)을 설치하고 실행한다.</li>
          <li>플러그인에서 채널(channel)을 만들거나 접속한다.</li>
          <li>Claude Code에서 그 채널에 연결해달라고 요청한다.</li>
        </ul>
        <Terminal code={"$ Figma MCP 채널에 연결해줘"} title="Claude Code 프롬프트" />
      </section>

      <section className="doc-section">
        <h2 className="doc-section-title">연결 확인</h2>
        <Terminal code={"$ 지금 선택된 프레임 정보를 보여줘"} title="Claude Code 프롬프트" />
        <p className="doc-text">
          연결이 잘 되었다면 레이어 이름, 크기, 색상 같은 정보가 텍스트로
          출력돼요.
        </p>
      </section>

      <section className="doc-section">
        <Tip>
          실제 연결 과정을 순서대로 따라 하고 싶다면{" "}
          <Link to="/vibe-coding/04-figma-mcp" className="doc-inline-link">
            바이브 코딩 시작하기 &gt; STEP 04 Figma MCP 연결 →
          </Link>
        </Tip>
      </section>
    </article>
  );
}

export default FigmaMcpTool;

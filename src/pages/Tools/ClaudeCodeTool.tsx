import Terminal from "../../components/Terminal/Terminal";
import Info from "../../components/Info/Info";
import Question from "../../components/Question/Question";
import "../DocPage.css";

/** 도구 설정 > Claude Code */
function ClaudeCodeTool() {
  return (
    <article className="doc">
      <header className="doc-header">
        <p className="doc-eyebrow">🛠️ 도구 설정</p>
        <h1 className="doc-title">Claude Code</h1>
        <p className="doc-goal">
          터미널과 에디터에서 Claude AI와 대화하며 실제 프로젝트 파일을 읽고,
          코드를 작성하고, 명령어까지 실행할 수 있는 Anthropic의 CLI 도구예요.
        </p>
      </header>

      <section className="doc-section">
        <h2 className="doc-section-title">설치하기</h2>
        <Terminal code={"$ npm install -g @anthropic-ai/claude-code"} title="설치" />
        <Info>Node.js가 먼저 설치되어 있어야 해요.</Info>
      </section>

      <section className="doc-section">
        <h2 className="doc-section-title">실행 및 로그인</h2>
        <p className="doc-text">
          작업할 프로젝트 폴더 안에서 실행하면, 그 프로젝트를 기준으로 대화가
          시작돼요.
        </p>
        <Terminal code={"$ cd my-project\n$ claude"} title="실행" />
        <p className="doc-text">
          처음 실행하면 브라우저가 열리며 Anthropic 계정 로그인을 요청해요.
          로그인을 완료하면 터미널로 돌아와 바로 대화를 시작할 수 있어요.
        </p>
      </section>

      <section className="doc-section">
        <h2 className="doc-section-title">설치 확인</h2>
        <Terminal code={"$ claude --version"} title="확인" />
      </section>

      <section className="doc-section">
        <h2 className="doc-section-title">자주 하는 질문</h2>
        <Question question="Claude Code와 ChatGPT/Cursor의 차이는 뭔가요?">
          Claude Code는 터미널 기반으로 동작해서, 채팅창에서 답변만 보여주는
          것이 아니라 실제로 내 프로젝트의 파일을 읽고 수정하고, 명령어(npm
          install, git commit 등)까지 직접 실행해줘요.
        </Question>
        <Question question="꼭 터미널에서만 써야 하나요?">
          기본은 터미널이지만, VS Code 같은 에디터 확장으로 설치하면 에디터
          안에서도 동일하게 사용할 수 있어요.
        </Question>
      </section>
    </article>
  );
}

export default ClaudeCodeTool;

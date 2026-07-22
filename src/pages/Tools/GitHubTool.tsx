import Terminal from "../../components/Terminal/Terminal";
import Tip from "../../components/Tip/Tip";
import Question from "../../components/Question/Question";
import "../DocPage.css";

/** 도구 설정 > GitHub */
function GitHubTool() {
  return (
    <article className="doc">
      <header className="doc-header">
        <p className="doc-eyebrow">🛠️ 도구 설정</p>
        <h1 className="doc-title">GitHub</h1>
        <p className="doc-goal">
          완성한 프로젝트의 변경 이력을 관리하고, 다른 사람과 공유하거나
          배포할 때 사용해요.
        </p>
      </header>

      <section className="doc-section">
        <h2 className="doc-section-title">저장소 준비하기</h2>
        <ul className="doc-list">
          <li>GitHub 계정을 만든다.</li>
          <li>GitHub에서 새 저장소(Repository)를 만든다.</li>
          <li>로컬 프로젝트를 Git 저장소로 초기화하고 첫 커밋을 남긴다.</li>
        </ul>
        <Terminal
          code={`$ git init\n$ git add .\n$ git commit -m "first commit"`}
          title="로컬 저장소 초기화"
        />
      </section>

      <section className="doc-section">
        <h2 className="doc-section-title">원격 저장소 연결 & push</h2>
        <Terminal
          code={`$ git remote add origin <저장소 주소>\n$ git push -u origin main`}
          title="GitHub 연결"
        />
        <Tip>
          저장소 주소는 GitHub 저장소 페이지의 초록색 &quot;Code&quot; 버튼을
          누르면 복사할 수 있어요.
        </Tip>
      </section>

      <section className="doc-section">
        <h2 className="doc-section-title">자주 하는 질문</h2>
        <Question question="commit과 push는 뭐가 다른가요?">
          commit은 변경 내용을 내 컴퓨터(로컬)에 기록으로 남기는 것이고, push는
          그 기록들을 GitHub 같은 원격 저장소로 올려서 다른 곳에서도 볼 수
          있게 만드는 거예요.
        </Question>
        <Question question="매번 push 전에 commit을 해야 하나요?">
          네. push는 지금까지 쌓인 commit들을 원격 저장소로 전송하는
          동작이라, 새로 바뀐 내용이 있다면 먼저 commit으로 기록해둬야 해요.
        </Question>
      </section>
    </article>
  );
}

export default GitHubTool;

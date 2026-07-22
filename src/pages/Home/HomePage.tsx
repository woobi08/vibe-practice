import { Link } from "react-router-dom";
import { roadmapData } from "../../data/roadmapData";
import { stepsData } from "../../data/stepsData";
import StepProgressBadge from "./StepProgressBadge";
import "./HomePage.css";

const TOOL_LINKS = [
  { icon: "🤖", title: "Claude Code", path: "/tools/claude-code" },
  { icon: "🎨", title: "Figma MCP", path: "/tools/figma-mcp" },
  { icon: "💻", title: "GitHub", path: "/tools/github" },
];

/** Home: 바이브 코딩 로드맵 + STEP 카드 + 도구/용어사전 바로가기 */
function HomePage() {
  return (
    <div className="home">
      <header className="home__hero">
        <p className="home__eyebrow">디자이너를 위한 바이브 코딩 매뉴얼</p>
        <h1 className="home__title">아이디어에서 완성까지, 순서대로</h1>
        <p className="home__subtitle">
          새 프로젝트를 시작할 때마다 다시 찾아와서 그대로 따라 하면 돼요. 새
          폴더를 만드는 순간부터 배포까지, 전체 흐름을 로드맵으로
          정리했어요.
        </p>
      </header>

      {/* 전체 작업 흐름 로드맵: 4열 그리드라서 항상 2줄로 정렬된다.
          화살표는 각 박스의 ::after 장식으로 그려지고, 줄 끝(4번째 칸)에서는 CSS로 숨긴다. */}
      <section className="roadmap">
        <div className="roadmap__track">
          {roadmapData.map((node) =>
            node.path ? (
              <Link to={node.path} className="roadmap__node" key={node.label}>
                <span className="roadmap__icon">{node.icon}</span>
                <span className="roadmap__label">{node.label}</span>
              </Link>
            ) : (
              <div className="roadmap__node roadmap__node--static" key={node.label}>
                <span className="roadmap__icon">{node.icon}</span>
                <span className="roadmap__label">{node.label}</span>
              </div>
            ),
          )}
        </div>
      </section>

      {/* STEP 카드 그리드 */}
      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title">바이브 코딩 시작하기</h2>
          <Link to={`/vibe-coding/${stepsData[0].id}`} className="home__section-link">
            전체 보기 →
          </Link>
        </div>
        <div className="home__step-grid">
          {stepsData.map((step) => (
            <Link to={`/vibe-coding/${step.id}`} className="step-preview-card" key={step.id}>
              <div className="step-preview-card__top">
                <span className="step-preview-card__order">{step.order}</span>
                <StepProgressBadge stepId={step.id} total={step.checklist.length} />
              </div>
              <p className="step-preview-card__title">{step.title}</p>
              <p className="step-preview-card__summary">{step.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 도구 설정 & 용어 사전 바로가기 */}
      <section className="home__section">
        <h2 className="home__section-title">도구 설정</h2>
        <div className="home__tool-grid">
          {TOOL_LINKS.map((tool) => (
            <Link to={tool.path} className="tool-card" key={tool.path}>
              <span className="tool-card__icon">{tool.icon}</span>
              <span className="tool-card__title">{tool.title}</span>
            </Link>
          ))}
          <Link to="/glossary" className="tool-card">
            <span className="tool-card__icon">📖</span>
            <span className="tool-card__title">용어 사전</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

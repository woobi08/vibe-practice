import { Link, useParams } from "react-router-dom";
import { stepsData } from "../../data/stepsData";
import Terminal from "../../components/Terminal/Terminal";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import Checklist from "../../components/Checklist/Checklist";
import Summary from "../../components/Summary/Summary";
import StepActionItem from "./StepActionItem";
import "./StepPage.css";

/**
 * "바이브 코딩 시작하기"의 STEP 페이지 하나를 그려주는 템플릿.
 * URL의 stepId로 stepsData에서 내용을 찾아 항상 같은 5개 섹션으로 렌더링한다:
 * 강의 목표 및 준비물 → 작업 순서 → 결과 확인 → 오늘의 핵심 정리 → 완료 체크리스트.
 * "왜 필요한가", "이번 강의에서 배우는 것", "핵심 정리"는 데이터가 있을 때만 나타난다.
 */
function StepPage() {
  const { stepId } = useParams<{ stepId: string }>();
  const index = stepsData.findIndex((s) => s.id === stepId);
  const step = stepsData[index];

  if (!step) {
    return (
      <div className="step-page">
        <p className="step-page__not-found">존재하지 않는 STEP이에요.</p>
        <Link to="/" className="step-page__back-home">
          Home으로 돌아가기
        </Link>
      </div>
    );
  }

  const prevStep = stepsData[index - 1];
  const nextStep = stepsData[index + 1];

  return (
    <article className="step-page">
      <header className="step-page__header">
        <p className="step-page__eyebrow">{step.order}</p>
        <h1 className="step-page__title">{step.title}</h1>
        <p className="step-page__summary">{step.summary}</p>
      </header>

      {/* ① 강의 목표 및 준비물 */}
      <details className="step-card step-card--goal" open>
        <summary className="step-card__title step-card__title--toggle">
          <span className="step-card__icon">🎯</span>강의 목표 및 준비물
          <svg
            className="step-card__chevron"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </summary>

        <p className="step-card__text">{step.goal}</p>

        {step.whyNeeded && (
          <div className="step-goal__why">
            <h3 className="step-goal__why-title">왜 필요한가?</h3>
            <p className="step-card__text">{step.whyNeeded}</p>
          </div>
        )}

        {step.learningPoints && step.learningPoints.length > 0 && (
          <div className="step-goal__why">
            <h3 className="step-goal__why-title">이번 강의에서 배우는 것</h3>
            <ul className="step-prereq-list">
              {step.learningPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="step-goal__why">
          <h3 className="step-goal__why-title">준비물</h3>
          <Checklist storageKey={`${step.id}-prereq`} items={step.prerequisites} />
        </div>
      </details>

      {/* ② 작업 순서 */}
      <section className="step-card step-card--tasks">
        <h2 className="step-card__title">
          <span className="step-card__icon">🛠</span>작업 순서
        </h2>
        <p className="step-card__hint">항목을 누르면 상세 설명이 펼쳐져요.</p>
        <div className="step-actions">
          {step.actions.map((action, i) => (
            <StepActionItem key={action.title} index={i} action={action} />
          ))}
        </div>
      </section>

      {/* STEP 전체에 걸친 명령어(구버전 STEP 호환용). 각 작업 순서 항목에 자체 commands가
          있으면(STEP 01처럼) step.commands는 비어있어 이 섹션은 나타나지 않는다. */}
      {step.commands && (
        <section className="step-card">
          <h2 className="step-card__title">
            <span className="step-card__icon">⌨️</span>입력할 명령어
          </h2>
          <Terminal code={step.commands} title={step.title} />
        </section>
      )}

      {/* ③ 결과 확인 */}
      <section className="step-card step-card--result">
        <h2 className="step-card__title">
          <span className="step-card__icon">✅</span>결과 확인
        </h2>
        <p className="step-card__text">{step.expectedResult}</p>
        {step.resultTree && <CodeBlock code={step.resultTree} label="folder structure" />}
      </section>

      {/* ④ 오늘의 핵심 정리 */}
      {step.recap && step.recap.length > 0 && (
        <section className="step-recap-section">
          <Summary>
            <ul className="step-recap-list">
              {step.recap.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Summary>
        </section>
      )}

      {/* ⑤ 완료 체크리스트 */}
      <section className="step-card">
        <h2 className="step-card__title">
          <span className="step-card__icon">☑️</span>완료 체크리스트
        </h2>
        <Checklist storageKey={step.id} items={step.checklist} />
      </section>

      <nav className="step-nav">
        {prevStep ? (
          <Link to={`/vibe-coding/${prevStep.id}`} className="step-nav__link step-nav__link--prev">
            <span className="step-nav__label">이전</span>
            <span className="step-nav__title">{prevStep.order} {prevStep.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {nextStep ? (
          <Link to={`/vibe-coding/${nextStep.id}`} className="step-nav__link step-nav__link--next">
            <span className="step-nav__label">다음</span>
            <span className="step-nav__title">{nextStep.order} {nextStep.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

export default StepPage;

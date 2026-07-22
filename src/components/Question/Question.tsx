import type { ReactNode } from "react";
import "./Question.css";

interface QuestionProps {
  /** 질문 내용 */
  question: string;
  /** 답변 내용 */
  children: ReactNode;
}

/** 자주 하는 질문(FAQ)을 아코디언 형태로 보여주는 컴포넌트 */
function Question({ question, children }: QuestionProps) {
  return (
    <details className="question">
      <summary className="question__summary">
        <span className="question__icon">❓</span>
        <span className="question__text">{question}</span>
        <svg
          className="question__chevron"
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
      <div className="question__answer">{children}</div>
    </details>
  );
}

export default Question;

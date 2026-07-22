import type { StepAction } from "../../types/step";
import Terminal from "../../components/Terminal/Terminal";
import Warning from "../../components/Warning/Warning";
import Note from "../../components/Note/Note";

interface StepActionItemProps {
  index: number;
  action: StepAction;
}

/**
 * "작업 순서"의 항목 하나를 아코디언으로 보여준다.
 * 접으면 제목만 보이고, 펼치면 왜 하는가 → 해야 할 행동 → 명령어 → 화면 예시 →
 * 명령어 설명 → 자주 하는 실수 → 정상 결과 확인 순서로 상세 내용이 나온다.
 * 이렇게 하면 순서 목록 자체는 짧게 유지되고, 필요한 사람만 상세 내용을 펼쳐볼 수 있다.
 */
function StepActionItem({ index, action }: StepActionItemProps) {
  const hasDetail = Boolean(
    action.actionFlow ||
      action.description ||
      action.commands ||
      action.screen ||
      action.why ||
      action.terms ||
      action.mistake ||
      action.result,
  );

  return (
    <details className="step-action" open={index === 0}>
      <summary className="step-action__summary">
        <span className="step-action__number">{index + 1}</span>
        <span className="step-action__title">{action.title}</span>
        {hasDetail && (
          <svg
            className="step-action__chevron"
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
        )}
      </summary>

      {hasDetail && (
        <div className="step-action__body">
          {action.why && (
            <div>
              <p className="step-action__label">💡 왜 하는가?</p>
              <p className="step-action__desc">{action.why}</p>
            </div>
          )}

          {action.actionFlow && action.actionFlow.length > 0 && (
            <div>
              <p className="step-action__label">📍 해야 할 행동</p>
              <p className="step-action__desc">{action.actionFlow.join(" → ")}</p>
            </div>
          )}

          {action.description && <p className="step-action__desc">{action.description}</p>}

          {action.commands && (
            <div>
              <p className="step-action__label">⌨️ 입력할 명령어</p>
              <Terminal code={action.commands} title={action.title} />
            </div>
          )}

          {action.screen && (
            <div>
              <p className="step-action__label">🖥 실제 화면 예시</p>
              <Terminal code={action.screen} title="화면 예시" />
            </div>
          )}

          {action.terms && action.terms.length > 0 && (
            <Note>
              <dl className="step-action__terms">
                {action.terms.map((term) => (
                  <div className="step-action__term" key={term.term}>
                    <dt>{term.term}</dt>
                    <dd>{term.explanation}</dd>
                  </div>
                ))}
              </dl>
            </Note>
          )}

          {action.mistake && (
            <Warning>
              <strong>{action.mistake.title}</strong>
              <br />
              {action.mistake.description}
            </Warning>
          )}

          {action.result && (
            <div>
              <p className="step-action__label">✅ 정상 결과 확인</p>
              <p className="step-action__desc">{action.result}</p>
            </div>
          )}
        </div>
      )}
    </details>
  );
}

export default StepActionItem;

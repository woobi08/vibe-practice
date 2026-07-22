import { useEffect, useState } from "react";
import "./Checklist.css";

interface ChecklistProps {
  /** localStorage에 진행 상태를 저장할 때 쓰는 고유 키 (보통 STEP id) */
  storageKey: string;
  /** 체크리스트 항목들 */
  items: string[];
}

/** 체크박스를 누르면 브라우저에 진행 상태가 저장되어, 다시 방문해도 유지된다 */
function Checklist({ storageKey, items }: ChecklistProps) {
  const fullKey = `vibe-checklist-${storageKey}`;

  const [checked, setChecked] = useState<boolean[]>(() => {
    const saved = localStorage.getItem(fullKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as boolean[];
        if (Array.isArray(parsed) && parsed.length === items.length) return parsed;
      } catch {
        // 저장된 값이 손상됐으면 무시하고 기본값을 사용한다
      }
    }
    return items.map(() => false);
  });

  useEffect(() => {
    localStorage.setItem(fullKey, JSON.stringify(checked));
  }, [checked, fullKey]);

  const toggle = (index: number) => {
    setChecked((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  const doneCount = checked.filter(Boolean).length;
  const isComplete = doneCount === items.length;

  return (
    <div className="checklist">
      <div className="checklist__progress">
        <div className="checklist__progress-track">
          <div
            className="checklist__progress-bar"
            style={{ width: `${(doneCount / items.length) * 100}%` }}
          />
        </div>
        <span className={`checklist__count ${isComplete ? "checklist__count--done" : ""}`}>
          {isComplete ? "완료! 🎉" : `${doneCount} / ${items.length} 완료`}
        </span>
      </div>

      <ul className="checklist__items">
        {items.map((item, index) => (
          <li key={item}>
            <label className="checklist__item">
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => toggle(index)}
              />
              <span className="checklist__box" aria-hidden="true">
                {checked[index] && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className={`checklist__label ${checked[index] ? "checklist__label--done" : ""}`}>
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;

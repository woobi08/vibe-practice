interface StepProgressBadgeProps {
  stepId: string;
  total: number;
}

/** STEP 카드에 "2/4 완료" 진행 상태를 보여준다. Checklist 컴포넌트와 같은 localStorage 키를 읽는다 */
function StepProgressBadge({ stepId, total }: StepProgressBadgeProps) {
  const saved = localStorage.getItem(`vibe-checklist-${stepId}`);
  let done = 0;

  if (saved) {
    try {
      const parsed = JSON.parse(saved) as boolean[];
      if (Array.isArray(parsed)) done = parsed.filter(Boolean).length;
    } catch {
      done = 0;
    }
  }

  if (done === 0) return null;

  const isComplete = done === total;

  return (
    <span className={`step-progress-badge ${isComplete ? "step-progress-badge--done" : ""}`}>
      {isComplete ? "완료 ✓" : `${done}/${total}`}
    </span>
  );
}

export default StepProgressBadge;

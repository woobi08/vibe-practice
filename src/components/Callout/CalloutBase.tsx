import type { ReactNode } from "react";
import "./Callout.css";

export type CalloutType = "tip" | "warning" | "info" | "summary" | "note";

interface CalloutBaseProps {
  type: CalloutType;
  icon: string;
  title: string;
  children: ReactNode;
}

/**
 * Tip / Warning / Info / Summary가 공통으로 사용하는 내부 컴포넌트.
 * 색상과 아이콘만 다르고 구조는 같아서 하나로 묶어 관리한다.
 */
function CalloutBase({ type, icon, title, children }: CalloutBaseProps) {
  return (
    <div className={`callout callout--${type}`}>
      <p className="callout__title">
        <span className="callout__icon">{icon}</span>
        {title}
      </p>
      <div className="callout__body">{children}</div>
    </div>
  );
}

export default CalloutBase;

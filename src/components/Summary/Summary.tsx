import type { ReactNode } from "react";
import CalloutBase from "../Callout/CalloutBase";

/** ✅ 오늘의 핵심 정리 - 페이지 마지막에 배운 내용을 요약할 때 사용 */
function Summary({ children }: { children: ReactNode }) {
  return (
    <CalloutBase type="summary" icon="✅" title="오늘의 핵심 정리">
      {children}
    </CalloutBase>
  );
}

export default Summary;

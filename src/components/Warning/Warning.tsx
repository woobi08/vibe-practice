import type { ReactNode } from "react";
import CalloutBase from "../Callout/CalloutBase";

/** ⚠️ 자주 하는 실수 - 흔한 실수나 주의사항을 보여줄 때 사용 */
function Warning({ children }: { children: ReactNode }) {
  return (
    <CalloutBase type="warning" icon="⚠️" title="자주 하는 실수">
      {children}
    </CalloutBase>
  );
}

export default Warning;

import type { ReactNode } from "react";
import CalloutBase from "../Callout/CalloutBase";

/** 💡 알아두면 좋아요 - 보조 팁을 보여줄 때 사용 */
function Tip({ children }: { children: ReactNode }) {
  return (
    <CalloutBase type="tip" icon="💡" title="알아두면 좋아요">
      {children}
    </CalloutBase>
  );
}

export default Tip;

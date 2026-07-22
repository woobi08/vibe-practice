import type { ReactNode } from "react";
import CalloutBase from "../Callout/CalloutBase";

/** 📚 개념 설명 - 배경 지식이나 용어를 설명할 때 사용 */
function Info({ children }: { children: ReactNode }) {
  return (
    <CalloutBase type="info" icon="📚" title="개념 설명">
      {children}
    </CalloutBase>
  );
}

export default Info;

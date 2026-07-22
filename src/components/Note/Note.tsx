import type { ReactNode } from "react";
import CalloutBase from "../Callout/CalloutBase";

/** ⌨️ 명령어 설명 - 이번 단계에 나온 용어/명령어의 뜻을 풀어줄 때 사용 */
function Note({ children }: { children: ReactNode }) {
  return (
    <CalloutBase type="note" icon="⌨️" title="명령어 설명">
      {children}
    </CalloutBase>
  );
}

export default Note;

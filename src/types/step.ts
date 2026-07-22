/** 작업 순서 한 항목에서, 자주 하는 실수 */
export interface ActionMistake {
  title: string;
  description: string;
}

/** 작업 순서 한 항목에서 나온 용어/명령어 하나를 설명 (예: pwd, react, TypeScript) */
export interface TermNote {
  term: string;
  explanation: string;
}

/**
 * "작업 순서"의 항목 하나.
 * 클릭하면 펼쳐지는 토글(아코디언)로 렌더링된다 — 목록 자체는 짧게 유지하고,
 * 상세 내용(해야 할 행동/명령어/화면 예시/왜 하는가/실수/결과 확인)은 펼쳤을 때만 보이게 한다.
 */
export interface StepAction {
  /** STEP 제목 한 줄 (예: "프로젝트를 모아둘 폴더 만들기") */
  title: string;
  /** 📍 해야 할 행동: Finder → Desktop → 새 폴더 처럼 순서대로 나열 (선택) */
  actionFlow?: string[];
  /** 일반 설명. why가 없을 때 보조로 쓰는 자유 서술 (선택, 구버전 STEP 호환용) */
  description?: string;
  /** ⌨️ 입력할 명령어. "$ "로 시작하는 줄이 명령어로 표시된다 (선택) */
  commands?: string;
  /** 🖥 실제 화면 예시: 선택 화면/설치 로그 등 터미널에 보이는 그대로 (선택) */
  screen?: string;
  /** 💡 왜 하는가?: 한두 줄 설명 (선택) */
  why?: string;
  /** ⌨️ 명령어 설명: 이 단계에 나온 용어/명령어 뜻풀이. 자주 하는 실수 바로 위에 표시된다 (선택) */
  terms?: TermNote[];
  /** ⚠️ 자주 하는 실수 (선택) */
  mistake?: ActionMistake;
  /** ✅ 정상 결과 확인: 이 단계가 잘 끝났는지 확인하는 방법 (선택) */
  result?: string;
}

export interface Step {
  /** 라우트에 쓰이는 고유 slug (예: "01-project-setup") */
  id: string;
  /** STEP 01, STEP 02 ... */
  order: string;
  /** STEP 제목 (예: "프로젝트 생성") */
  title: string;
  /** 사이드바/카드에 보여줄 한 줄 요약 */
  summary: string;
  /** 이번 강의 목표 */
  goal: string;
  /** 왜 필요한가: 이 단계가 왜 필요한지에 대한 배경 설명 (선택) */
  whyNeeded?: string;
  /** 이번 강의에서 배우는 것 (선택) */
  learningPoints?: string[];
  /** 준비물 (체크리스트 형태로 표시된다) */
  prerequisites: string[];
  /** 작업 순서 */
  actions: StepAction[];
  /**
   * 단계별이 아니라 STEP 전체에 걸친 명령어가 있을 때만 사용.
   * (각 작업 순서 항목이 자체 commands를 가지고 있으면 이 필드는 비워둔다)
   */
  commands?: string;
  /** 결과 확인: 모든 작업이 끝났을 때의 상태 설명 */
  expectedResult: string;
  /** 결과 확인을 뒷받침하는 폴더 구조 등 코드 블록 (선택) */
  resultTree?: string;
  /** 오늘의 핵심 정리: 복습용 한 줄 정리 목록 (선택) */
  recap?: string[];
  /** 완료 체크리스트 */
  checklist: string[];
}

/** Home 화면의 로드맵 다이어그램 한 칸 */
export interface RoadmapNode {
  icon: string;
  label: string;
  /** 클릭했을 때 이동할 STEP 경로 (선택) */
  path?: string;
}

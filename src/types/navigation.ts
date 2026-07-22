// 사이드바 내비게이션 구조를 표현하는 타입들

/** 사이드바의 개별 강의/문서 항목 */
export interface NavItem {
  /** 카테고리 내에서 고유한 id */
  id: string;
  /** 사이드바에 보여줄 제목 */
  title: string;
  /**
   * 실제 라우트 경로.
   * 아직 작성되지 않은 페이지는 path가 없고, 사이드바에 비활성 상태로 표시된다.
   */
  path?: string;
}

/** 사이드바의 카테고리 (React, Claude Code 등) */
export interface NavCategory {
  id: string;
  icon: string;
  title: string;
  items: NavItem[];
  /** 사이드바에서 기본으로 펼쳐진 상태인지 여부 */
  defaultOpen?: boolean;
  /**
   * 카테고리 자체가 하나의 페이지로 연결되는 경우의 경로 (예: Home, Glossary).
   * path가 있으면 하위 items는 무시하고 바로 이동하는 링크로 렌더링된다.
   */
  path?: string;
  /** Home 화면의 카테고리 카드에 사용할 한 줄 소개 */
  description?: string;
}

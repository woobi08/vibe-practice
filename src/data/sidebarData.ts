import type { NavCategory } from "../types/navigation";
import { stepsData } from "./stepsData";

/**
 * 사이드바 전체 구조.
 * "디자이너를 위한 바이브 코딩 매뉴얼"에 맞춰 4개 최상위 메뉴만 유지한다:
 * Home / 바이브 코딩 시작하기 / 도구 설정 / 용어 사전.
 *
 * STEP을 새로 추가할 때는 stepsData에 항목을 추가하면 이 사이드바에도 자동으로 반영된다.
 */
export const sidebarData: NavCategory[] = [
  {
    id: "home",
    icon: "🏠",
    title: "Home",
    path: "/",
    items: [],
  },
  {
    id: "vibe-coding",
    icon: "🚀",
    title: "바이브 코딩 시작하기",
    description: "새 폴더 생성부터 배포까지, 실제 작업 순서 그대로 따라 하는 튜토리얼이에요.",
    defaultOpen: true,
    items: stepsData.map((step) => ({
      id: step.id,
      title: `${step.order} ${step.title}`,
      path: `/vibe-coding/${step.id}`,
    })),
  },
  {
    id: "tools",
    icon: "🛠️",
    title: "도구 설정",
    description: "Claude Code, Figma MCP, GitHub을 설치하고 연결하는 방법이에요.",
    items: [
      { id: "claude-code", title: "Claude Code", path: "/tools/claude-code" },
      { id: "figma-mcp", title: "Figma MCP", path: "/tools/figma-mcp" },
      { id: "github", title: "GitHub", path: "/tools/github" },
    ],
  },
  {
    id: "glossary",
    icon: "📖",
    title: "용어 사전",
    path: "/glossary",
    description: "React, Vite, npm, MCP 등 공부하며 만난 용어를 검색하고 다시 찾아볼 수 있어요.",
    items: [],
  },
];

import type { RoadmapNode } from "../types/step";

/** Home 화면에 보여줄 전체 작업 흐름 다이어그램 */
export const roadmapData: RoadmapNode[] = [
  { icon: "📁", label: "새 폴더 만들기", path: "/vibe-coding/01-project-setup" },
  { icon: "⚛️", label: "React 프로젝트 생성", path: "/vibe-coding/01-project-setup" },
  { icon: "📦", label: "npm install", path: "/vibe-coding/02-react-setup" },
  { icon: "▶️", label: "npm run dev", path: "/vibe-coding/02-react-setup" },
  { icon: "🤖", label: "Claude Code 실행", path: "/vibe-coding/03-claude-code" },
  { icon: "🎨", label: "Talk To Figma 연결", path: "/vibe-coding/04-figma-mcp" },
  { icon: "💬", label: "\"이 디자인 구현해줘\"", path: "/vibe-coding/05-design-implementation" },
  { icon: "✨", label: "완성", path: "/vibe-coding/06-deploy" },
];

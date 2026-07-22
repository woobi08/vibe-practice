import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import StepPage from "./pages/VibeCoding/StepPage";
import ClaudeCodeTool from "./pages/Tools/ClaudeCodeTool";
import FigmaMcpTool from "./pages/Tools/FigmaMcpTool";
import GitHubTool from "./pages/Tools/GitHubTool";
import GlossaryPage from "./pages/Glossary/GlossaryPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* 바이브 코딩 시작하기: STEP 01~06, 내용은 data/stepsData.ts에서 관리 */}
        <Route path="vibe-coding/:stepId" element={<StepPage />} />

        {/* 도구 설정 */}
        <Route path="tools/claude-code" element={<ClaudeCodeTool />} />
        <Route path="tools/figma-mcp" element={<FigmaMcpTool />} />
        <Route path="tools/github" element={<GitHubTool />} />

        {/* 용어 사전 */}
        <Route path="glossary" element={<GlossaryPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

import type { Step } from "../types/step";

/**
 * "바이브 코딩 시작하기"의 STEP 01~06 콘텐츠.
 * 새 STEP을 추가할 때는 이 배열에 항목만 추가하고, sidebarData의 vibe-coding 카테고리에
 * 같은 id로 path만 하나 추가하면 된다.
 */
export const stepsData: Step[] = [
  {
    id: "01-project-setup",
    order: "STEP 01",
    title: "프로젝트 생성",
    summary: "새 작업 폴더를 만들고 React 프로젝트의 뼈대를 생성해요.",
    goal:
      "React 프로젝트를 처음부터 끝까지 직접 만들어봐요. 폴더를 준비하고, Vite로 프로젝트를 생성하고, 개발 서버까지 실행해서 브라우저로 결과를 확인하는 것이 이번 목표예요.",
    whyNeeded:
      "React로 무언가를 만들려면 가장 먼저 '프로젝트'라는 작업 공간이 필요해요. 이 공간에는 코드, 라이브러리, 설정 파일이 함께 저장되기 때문에, 처음부터 구조를 잘 잡아두면 나중에 프로젝트가 여러 개로 늘어나도 헷갈리지 않아요. Vite는 이 작업 공간의 뼈대(기본 파일 구조)를 자동으로 만들어주는 도구라서, 복잡한 설정 없이도 바로 개발을 시작할 수 있게 해줘요.",
    learningPoints: [
      "프로젝트 폴더 구조를 정리하는 방법",
      "터미널 기본 명령어 (pwd, ls, cd)",
      "Vite로 React 프로젝트를 생성하는 방법",
      "개발 서버를 실행하고 브라우저로 확인하는 방법",
    ],
    prerequisites: ["Node.js 설치", "Antigravity IDE", "Claude Code", "Terminal"],
    actions: [
      {
        title: "프로젝트를 모아둘 폴더 만들기",
        actionFlow: ["Finder 실행", "Desktop 이동", "우클릭", "새 폴더", "MyProject"],
        why: "앞으로 만들 프로젝트를 모두 관리하는 상위 폴더예요.",
        mistake: {
          title: "프로젝트를 여기저기 흩어놓는 것",
          description:
            "프로젝트마다 다른 위치에 만들면 나중에 어디 있는지 찾기 어려워요. 앞으로 만드는 프로젝트는 모두 MyProject 안에서 관리해요.",
        },
        result: "Desktop에 MyProject 폴더가 생겨요.",
      },
      {
        title: "React 프로젝트 폴더 만들기",
        actionFlow: ["MyProject 열기", "우클릭", "새 폴더", "vibe-practice"],
        why: "이번 강의에서 만들 React 프로젝트 전용 폴더예요.",
        mistake: {
          title: "기존 React 프로젝트 안에 또 만드는 것",
          description:
            "이미 React 프로젝트인 폴더 안에 새 폴더를 만들면 프로젝트 안에 프로젝트가 들어가는 잘못된 구조가 돼요. 반드시 MyProject 바로 아래에 만들어요.",
        },
        result: "MyProject 안에 vibe-practice 폴더가 생겨요.",
      },
      {
        title: "Antigravity IDE 실행",
        actionFlow: ["Antigravity IDE 실행", "vibe-practice 폴더 열기", "Claude Code 실행", "Terminal 열기"],
        why: "Claude Code가 지금 작업 중인 프로젝트를 인식하려면, 그 프로젝트 폴더를 연 상태에서 터미널을 열어야 해요.",
        result: "화면에 터미널이 열린 상태가 돼요.",
      },
      {
        title: "현재 위치 확인",
        commands: "$ pwd",
        screen: "/Users/사용자/Desktop/MyProject",
        why: "명령어를 입력하기 전에 지금 내가 어느 폴더에 있는지 확인하는 습관을 들이면 실수를 줄일 수 있어요.",
        terms: [
          {
            term: "pwd",
            explanation: "'print working directory'의 줄임말로, 현재 작업 중인 폴더의 전체 경로를 보여줘요.",
          },
        ],
        mistake: {
          title: "다른 위치에서 작업을 시작하는 것",
          description:
            "MyProject가 아닌 다른 폴더에서 작업을 시작하면 나중에 파일을 찾기 어려워요. pwd 결과가 MyProject 경로로 끝나는지 꼭 확인해요.",
        },
        result: "출력된 경로 맨 끝이 MyProject라면 정상이에요.",
      },
      {
        title: "폴더 목록 확인",
        commands: "$ ls",
        screen: "ai\nfigma\nmy-react-app\nvibe-practice",
        why: "지금 폴더 안에 어떤 폴더/파일이 있는지 확인해요.",
        terms: [
          { term: "ls", explanation: "'list'의 줄임말로, 현재 폴더 안에 있는 파일과 폴더 목록을 보여줘요." },
        ],
        result: "출력 목록에 vibe-practice가 보이면 성공이에요.",
      },
      {
        title: "프로젝트 폴더로 이동",
        commands: "$ cd vibe-practice",
        why: "React 프로젝트를 생성할 폴더로 이동해요.",
        terms: [
          { term: "cd", explanation: "'change directory'의 줄임말로, 지정한 폴더로 위치를 이동해요." },
        ],
        result: "터미널 프롬프트에 표시되는 경로가 vibe-practice로 바뀌어요.",
      },
      {
        title: "현재 위치 다시 확인",
        commands: "$ pwd",
        screen: ".../MyProject/vibe-practice",
        why: "명령어를 실행하기 전, 정말 맞는 위치인지 마지막으로 한 번 더 확인해요.",
        result: "경로 맨 끝이 vibe-practice로 끝나면 준비 완료예요.",
      },
      {
        title: "React 프로젝트 생성",
        commands: "$ npm create vite@latest .",
        why:
          "현재 폴더(vibe-practice)를 React 프로젝트로 만들어요. 맨 끝의 점(.)은 '지금 있는 폴더에 바로 만든다'는 의미예요. 점을 쓰지 않으면 새 폴더 이름을 물어보고 별도의 폴더가 만들어져요.",
        terms: [
          { term: "npm", explanation: "Node.js의 패키지 관리자예요. 라이브러리를 설치하거나 프로젝트를 생성할 때 사용해요." },
          { term: "vite", explanation: "빠른 개발 서버와 빌드 도구를 제공하는 프론트엔드 도구예요." },
        ],
        mistake: {
          title: '"." 을 빼먹는 것',
          description:
            "점 없이 입력하면 새 프로젝트 이름을 따로 입력해야 하고, vibe-practice 폴더가 아닌 별도의 새 폴더가 생겨요.",
        },
        result: "Framework를 선택하는 화면이 이어서 나타나요.",
      },
      {
        title: "Framework 선택",
        screen: "Select a framework:\n○ Vanilla\n● React\n○ Vue\n○ Svelte",
        actionFlow: ["React 선택", "Enter"],
        why: "이번에는 React로 프로젝트를 만들 거라서 React를 선택해요.",
        terms: [
          { term: "React", explanation: "사용자 인터페이스(UI)를 만들기 위한 자바스크립트 라이브러리예요." },
        ],
        result: "다음으로 Variant(언어) 선택 화면이 나타나요.",
      },
      {
        title: "Variant 선택",
        screen: "Select a variant:\n● TypeScript\n○ JavaScript",
        actionFlow: ["TypeScript 선택", "Enter"],
        why: "TypeScript는 React 실무에서 가장 많이 사용하는 환경이라, 처음부터 익혀두면 좋아요.",
        terms: [
          {
            term: "TypeScript",
            explanation: "자바스크립트에 '타입'을 추가한 언어로, 실수를 미리 잡아주고 코드를 더 안전하게 만들어줘요.",
          },
        ],
        result: "다음으로 Linter 선택 화면이 나타나요.",
      },
      {
        title: "Linter 선택",
        screen: "Select a linter:\n○ Oxlint\n● ESLint",
        actionFlow: ["ESLint 선택", "Enter"],
        why: "ESLint는 코드 실수를 미리 찾아주는 도구예요.",
        terms: [
          { term: "ESLint", explanation: "코드의 문법 오류나 스타일 문제를 자동으로 찾아주는 도구예요." },
        ],
        result: "선택이 끝나면 자동으로 프로젝트 파일이 생성돼요.",
      },
      {
        title: "설치 진행",
        screen: "Installing dependencies...\nadded 152 packages, and audited 153 packages in 3s\nfound 0 vulnerabilities",
        why: "프로젝트 실행에 필요한 라이브러리들을 설치하는 중이에요. 잠깐 기다리면 돼요.",
        terms: [
          { term: "dependencies", explanation: "프로젝트가 동작하는 데 필요한 외부 라이브러리들을 말해요." },
        ],
        result: "'found 0 vulnerabilities' 같은 메시지가 뜨고 명령 프롬프트로 돌아오면 설치가 끝난 거예요.",
      },
      {
        title: "개발 서버 실행",
        commands: "$ npm run dev",
        screen: "VITE ready in 320 ms\n\n  Local:   http://localhost:5173/",
        why:
          "설치 중 자동 실행을 선택했다면 개발 서버가 곧바로 켜질 수 있어요. 자동으로 켜지지 않았다면 npm run dev를 직접 입력해서 켜요.",
        terms: [
          {
            term: "npm run dev",
            explanation: "package.json에 정의된 'dev' 스크립트를 실행해서 개발 서버를 켜는 명령어예요.",
          },
        ],
        mistake: {
          title: "포트 번호가 다르다고 당황하는 것",
          description:
            "5173 포트가 이미 사용 중이면 5174, 5175 등으로 자동 변경될 수 있어요. 터미널에 표시된 주소를 그대로 사용하면 돼요.",
        },
        result: "터미널에 Local: http://localhost:5173/ 같은 주소가 표시돼요.",
      },
      {
        title: "브라우저 확인",
        actionFlow: ["브라우저 실행", "localhost 주소 접속"],
        why: "실제로 화면이 잘 떠야 이번 강의가 완료된 거예요.",
        result: "Vite + React 기본 화면(로고와 카운터 버튼)이 보이면 성공이에요.",
      },
    ],
    expectedResult:
      "모든 과정을 마치면 vibe-practice 폴더 안에 아래와 같은 파일과 폴더가 생기고, 브라우저에서 http://localhost:5173 주소로 Vite 기본 화면이 보여요. 이 두 가지가 확인되면 이번 강의는 완료예요.",
    resultTree: `vibe-practice
├── node_modules
├── public
├── src
├── package.json
├── tsconfig.json
└── vite.config.ts`,
    recap: [
      "MyProject는 프로젝트를 관리하는 상위 폴더이다.",
      "vibe-practice가 하나의 React 프로젝트가 된다.",
      "pwd는 현재 위치를 확인한다.",
      "ls는 폴더 목록을 확인한다.",
      "cd는 폴더를 이동한다.",
      "npm create vite@latest . 으로 현재 폴더에 React 프로젝트를 생성한다.",
      "React + TypeScript + ESLint를 선택했다.",
    ],
    checklist: [
      "MyProject를 만들었다.",
      "vibe-practice를 만들었다.",
      "Terminal을 실행했다.",
      "pwd를 사용할 수 있다.",
      "ls를 사용할 수 있다.",
      "cd를 사용할 수 있다.",
      "React 프로젝트를 생성했다.",
      "React를 선택했다.",
      "TypeScript를 선택했다.",
      "ESLint를 선택했다.",
      "localhost에서 실행되는 것을 확인했다.",
    ],
  },
  {
    id: "02-react-setup",
    order: "STEP 02",
    title: "React 환경 설정",
    summary: "라이브러리를 설치하고 개발 서버를 켜서 화면을 직접 확인해요.",
    goal: "프로젝트에 필요한 라이브러리를 설치하고, 개발 서버를 실행해서 브라우저로 결과를 확인한다.",
    prerequisites: ["STEP 01에서 생성한 프로젝트 폴더"],
    actions: [
      { title: "npm install로 필요한 라이브러리를 설치한다" },
      { title: "npm run dev로 개발 서버를 실행한다" },
      { title: "터미널에 뜬 localhost 주소를 브라우저에서 연다" },
      {
        title: "포트 번호가 다르게 떠도 당황하지 않는다",
        description: "5173 포트가 사용 중이면 5174, 5175 등으로 자동 변경될 수 있어요. 정상 동작이에요.",
      },
    ],
    commands: `$ npm install
$ npm run dev`,
    expectedResult:
      "터미널에 'VITE ready' 메시지와 함께 Local: http://localhost:5173/ 주소가 뜨고, 브라우저에 기본 React 화면이 보여요.",
    checklist: [
      "npm install을 실행했다",
      "npm run dev로 개발 서버를 켰다",
      "브라우저에서 localhost 화면을 확인했다",
    ],
  },
  {
    id: "03-claude-code",
    order: "STEP 03",
    title: "Claude Code 연결",
    summary: "터미널에서 Claude Code를 실행해서 프로젝트와 대화할 준비를 해요.",
    goal: "터미널에서 Claude Code를 실행해서, 프로젝트 안에서 자연어로 대화하며 코드를 작성할 준비를 한다.",
    prerequisites: ["Claude Code 설치 (도구 설정 > Claude Code 참고)", "Anthropic 계정"],
    actions: [
      { title: "터미널에서 프로젝트 폴더로 이동한다" },
      { title: "claude 명령어로 Claude Code를 실행한다" },
      {
        title: "처음 실행이라면 로그인 절차를 따라 Anthropic 계정으로 로그인한다",
      },
      { title: "프롬프트 입력창이 뜨면 연결 완료 — 이제 자연어로 요청할 수 있다" },
    ],
    commands: `$ cd vibe-practice
$ claude`,
    expectedResult:
      "터미널 안에 Claude Code 채팅창이 열리고, 무엇을 도와줄지 물어보는 입력 대기 상태가 돼요.",
    checklist: [
      "Claude Code를 설치했다",
      "claude 명령어로 실행했다",
      "로그인을 완료했다",
      "프롬프트 입력창을 확인했다",
    ],
  },
  {
    id: "04-figma-mcp",
    order: "STEP 04",
    title: "Figma MCP 연결",
    summary: "Claude Code가 Figma 디자인 파일을 직접 읽을 수 있도록 연결해요.",
    goal: "Figma MCP를 연결해서 Claude Code가 Figma의 레이어, 컴포넌트, 스타일을 직접 읽을 수 있게 한다.",
    prerequisites: ["Figma 데스크톱 또는 웹 앱", "Figma MCP 플러그인 (도구 설정 > Figma MCP 참고)", "구현할 Figma 파일"],
    actions: [
      { title: "Figma에서 구현할 파일을 연다" },
      { title: "Figma MCP 플러그인(Talk to Figma 등)을 실행한다" },
      { title: "플러그인에서 채널(channel)을 생성하거나 접속한다" },
      { title: "Claude Code에게 그 채널에 연결해달라고 요청한다" },
      { title: "연결되면 Claude Code가 선택한 프레임 정보를 읽어올 수 있다" },
    ],
    commands: `$ Figma MCP 채널에 연결해줘
$ 지금 선택된 프레임 정보를 보여줘`,
    expectedResult: "Claude Code가 Figma 파일의 레이어 구조나 선택한 프레임 정보를 텍스트로 보여줘요.",
    checklist: ["Figma MCP 플러그인을 실행했다", "채널에 연결했다", "Claude Code에서 Figma 정보를 확인했다"],
  },
  {
    id: "05-design-implementation",
    order: "STEP 05",
    title: "디자인 구현",
    summary: "\"이 디자인 구현해줘\" 한 마디로 Figma 디자인을 코드로 만들어요.",
    goal: "연결된 Figma 디자인을 실제 동작하는 화면(코드)으로 구현한다.",
    prerequisites: ["STEP 04에서 연결한 Figma MCP", "구현하고 싶은 프레임/화면"],
    actions: [
      { title: "Figma에서 구현하고 싶은 프레임을 선택한다" },
      { title: "Claude Code에게 \"이 디자인 구현해줘\"라고 요청한다" },
      { title: "Claude Code가 레이아웃, 색상, 텍스트, 컴포넌트 정보를 읽어 코드로 변환한다" },
      { title: "브라우저(localhost)에서 결과를 확인한다" },
      { title: "다른 부분이 있으면 구체적으로 다시 요청한다", description: "예: \"버튼 hover 색상을 더 진하게 해줘\"" },
    ],
    commands: `$ 지금 선택된 프레임을 그대로 구현해줘
$ 버튼 hover 색상을 더 진하게 바꿔줘`,
    expectedResult: "브라우저 화면이 Figma 디자인과 비슷한 모습으로 바뀌어요.",
    checklist: [
      "Figma에서 프레임을 선택했다",
      "\"이 디자인 구현해줘\"를 요청했다",
      "브라우저에서 결과를 확인했다",
      "필요한 부분을 다시 요청해서 다듬었다",
    ],
  },
  {
    id: "06-deploy",
    order: "STEP 06",
    title: "배포",
    summary: "완성한 화면을 인터넷에 올려서 누구나 볼 수 있게 해요.",
    goal: "완성한 프로젝트를 GitHub에 올리고, Vercel로 배포해서 공개 URL을 만든다.",
    prerequisites: ["GitHub 계정 (도구 설정 > GitHub 참고)", "Vercel(또는 Netlify) 계정"],
    actions: [
      { title: "프로젝트를 Git 저장소로 만든다" },
      { title: "GitHub에 새 저장소를 만들고 코드를 push한다" },
      { title: "Vercel에서 그 GitHub 저장소를 연결한다" },
      { title: "빌드 설정을 확인하고 배포를 실행한다" },
      { title: "배포된 주소로 접속해서 확인한다" },
    ],
    commands: `$ git init
$ git add .
$ git commit -m "first commit"
$ git remote add origin <저장소 주소>
$ git push -u origin main`,
    expectedResult: "Vercel이 자동으로 빌드를 진행하고, 완료되면 누구나 접속할 수 있는 공개 URL이 생성돼요.",
    checklist: ["GitHub 저장소를 만들었다", "코드를 push했다", "Vercel에 연결했다", "배포된 주소를 확인했다"],
  },
];

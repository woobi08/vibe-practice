import type { GlossaryTerm } from "../types/glossary";

/**
 * 공부하면서 만난 용어들을 정리한 사전 데이터.
 * 새 용어를 추가할 때는 이 배열에 항목만 추가하면 Glossary 페이지에 자동으로 반영된다.
 */
export const glossaryData: GlossaryTerm[] = [
  {
    id: "react",
    term: "React",
    definition: "사용자 인터페이스(UI)를 만들기 위한 자바스크립트 라이브러리.",
    easyExplanation:
      "화면을 여러 개의 작은 조각(컴포넌트)으로 나눠서 만들고, 데이터가 바뀌면 화면이 자동으로 업데이트되게 해주는 도구예요.",
    designerPerspective:
      "Figma에서 컴포넌트를 만들고 Variant로 상태를 관리하는 것처럼, React도 화면을 컴포넌트 단위로 쪼개고 State에 따라 다른 모습을 보여줘요.",
    practicalUse:
      "대부분의 실무 웹 프로젝트에서 화면(UI)을 만드는 기본 라이브러리로 사용돼요. Next.js 같은 프레임워크도 React를 기반으로 만들어졌어요.",
    relatedTerms: ["jsx", "component", "state", "hook"],
  },
  {
    id: "jsx",
    term: "JSX",
    definition: "자바스크립트 안에 HTML과 비슷한 문법을 쓸 수 있게 해주는 React의 문법 확장.",
    easyExplanation:
      "<div>Hello</div> 처럼 HTML처럼 생긴 코드를 자바스크립트 함수 안에 바로 쓸 수 있게 해줘요.",
    designerPerspective:
      "Figma의 레이어 구조를 코드로 그대로 옮겨 적는다고 생각하면 돼요. 태그 하나하나가 레이어라고 볼 수 있어요.",
    practicalUse: "컴포넌트의 화면 구조(return 문 안)를 작성할 때 항상 사용돼요.",
    relatedTerms: ["react", "component"],
  },
  {
    id: "component",
    term: "Component",
    definition: "UI를 이루는 재사용 가능한 최소 단위 조각.",
    easyExplanation:
      "버튼, 카드, 헤더처럼 화면을 이루는 하나하나의 부품이에요. 레고 블록처럼 조립해서 전체 화면을 만들어요.",
    designerPerspective:
      "Figma의 Component(컴포넌트)와 개념이 완전히 동일해요. 한 번 만들어두고 여러 곳에서 재사용해요.",
    practicalUse: "버튼, 카드, 모달 등 반복되는 UI를 컴포넌트로 만들어서 여러 페이지에서 재사용해요.",
    relatedTerms: ["props", "state", "jsx"],
  },
  {
    id: "props",
    term: "Props",
    definition: "부모 컴포넌트가 자식 컴포넌트에게 전달하는 값(속성).",
    easyExplanation:
      "컴포넌트에게 전달하는 '재료'예요. 버튼 컴포넌트에 색상이나 텍스트를 Props로 넘겨줄 수 있어요.",
    designerPerspective:
      "Figma 컴포넌트의 Property(속성) 패널과 같아요. 버튼의 텍스트, 색상, 크기를 바꾸는 것처럼요.",
    practicalUse: "같은 컴포넌트를 다른 내용으로 여러 번 재사용할 때 Props로 값을 다르게 전달해요.",
    relatedTerms: ["component", "state"],
  },
  {
    id: "state",
    term: "State",
    definition: "컴포넌트 내부에서 관리하는, 변할 수 있는 데이터.",
    easyExplanation:
      "버튼을 누르면 숫자가 올라가는 카운터처럼, 시간이 지나거나 사용자 행동에 따라 바뀌는 값이에요.",
    designerPerspective:
      "Figma Variant의 상태(Default, Hover, Pressed)와 비슷해요. State가 바뀌면 화면도 그에 맞게 다시 그려져요.",
    practicalUse: "입력 폼의 값, 모달 열림/닫힘, 로딩 상태 등을 관리할 때 사용돼요.",
    relatedTerms: ["hook", "props", "effect"],
  },
  {
    id: "effect",
    term: "Effect (useEffect)",
    definition: "컴포넌트가 렌더링된 후 실행되는 부수 작업(사이드 이펙트)을 처리하는 React Hook.",
    easyExplanation:
      "화면이 그려진 다음에 '추가로 해야 할 일'을 정의하는 곳이에요. 예를 들어 데이터를 불러오거나, 창 크기를 감지하는 일 같은 거예요.",
    designerPerspective:
      "프로토타입에서 '화면이 열리면 자동으로 애니메이션 실행' 같은 트리거를 설정하는 것과 비슷해요.",
    practicalUse: "API로 데이터 불러오기, 문서 제목 바꾸기, 이벤트 리스너 등록 등에 자주 사용돼요.",
    relatedTerms: ["state", "hook", "react"],
  },
  {
    id: "hook",
    term: "Hook",
    definition: "함수형 컴포넌트에서 State나 생명주기 같은 React 기능을 사용할 수 있게 해주는 함수.",
    easyExplanation:
      "useState, useEffect처럼 'use'로 시작하는 함수들을 Hook이라고 불러요. React의 특별한 기능을 컴포넌트에 '연결(hook)'해준다고 생각하면 돼요.",
    designerPerspective: "Figma 플러그인처럼, 기본 기능에 필요한 기능을 붙여서 사용하는 것과 비슷해요.",
    practicalUse: "상태 관리(useState), 부수 효과 처리(useEffect) 등 대부분의 React 로직에서 사용돼요.",
    relatedTerms: ["state", "effect", "react"],
  },
  {
    id: "linter",
    term: "Linter",
    definition: "코드에서 오류나 잘못된 스타일을 자동으로 검사해주는 도구.",
    easyExplanation: "맞춤법 검사기처럼, 코드를 저장하기 전에 실수나 이상한 부분을 미리 알려줘요.",
    designerPerspective:
      "Figma에서 'Missing font' 경고가 뜨는 것처럼, 문제가 될 수 있는 부분을 미리 알려주는 자동 검수 도구예요.",
    practicalUse: "ESLint가 대표적이며, 프로젝트 생성 시 함께 설치해서 코드 품질을 유지해요.",
    relatedTerms: ["compiler", "npm"],
  },
  {
    id: "compiler",
    term: "Compiler",
    definition: "사람이 작성한 코드를 컴퓨터(또는 브라우저)가 이해할 수 있는 형태로 변환하는 프로그램.",
    easyExplanation:
      "우리가 쓰는 TypeScript나 JSX 코드를 브라우저가 실행할 수 있는 일반 자바스크립트로 '번역'해주는 역할이에요.",
    designerPerspective:
      "Figma에서 만든 디자인을 Export해서 PNG나 SVG로 변환하는 것과 비슷한 개념이에요. 형태를 다른 환경에 맞게 바꿔주는 거예요.",
    practicalUse: "Vite, TypeScript, Babel 등이 코드를 변환(컴파일)하는 역할을 담당해요.",
    relatedTerms: ["vite", "linter"],
  },
  {
    id: "token",
    term: "Token (Design Token)",
    definition: "색상, 간격, 폰트 크기 등 디자인 값을 이름을 가진 변수로 정의한 것.",
    easyExplanation:
      "'파란색'을 그냥 색상 코드(#2563eb)로 쓰는 대신 'color-accent'라는 이름을 붙여서 관리하는 방식이에요. 이름만 바꾸면 전체 디자인이 한 번에 바뀌어요.",
    designerPerspective:
      "Figma Variables와 정확히 같은 개념이에요. 값에 의미 있는 이름을 붙여서 디자인과 코드가 같은 기준을 공유하게 해줘요.",
    practicalUse:
      "디자인 시스템에서 색상/타이포/간격 값을 토큰화해서 Figma와 코드(tokens.json) 양쪽에서 동일하게 사용해요.",
    relatedTerms: ["tokens-json", "variable"],
  },
  {
    id: "tokens-json",
    term: "tokens.json",
    definition: "디자인 토큰 값들을 JSON 형태로 저장한 파일.",
    easyExplanation:
      "Figma에서 정의한 색상, 폰트, 간격 값들을 코드가 읽을 수 있는 JSON 파일로 내보낸 거예요.",
    designerPerspective: "Figma Variables 패널의 내용을 그대로 파일로 옮겨놓은 것이라고 보면 돼요.",
    practicalUse:
      "Tokens Studio 같은 플러그인으로 Figma Variables를 tokens.json으로 추출하고, 이를 코드(CSS 변수 등)로 변환해서 디자인과 개발이 같은 값을 사용하게 만들어요.",
    relatedTerms: ["token", "variable", "mcp"],
  },
  {
    id: "variable",
    term: "Variable",
    definition: "프로그래밍에서 값을 저장하고 이름으로 참조할 수 있게 해주는 그릇.",
    easyExplanation:
      "이름표가 붙은 상자라고 생각하면 돼요. 상자 안에 숫자, 글자, 색상 값 등을 넣고 이름으로 꺼내 쓸 수 있어요.",
    designerPerspective: "Figma의 Variables(색상, 숫자, 문자열 변수) 기능과 완전히 같은 개념이에요.",
    practicalUse: "CSS 변수(--color-accent), JS 변수(const, let) 등 코드 전반에서 값을 재사용할 때 사용해요.",
    relatedTerms: ["token", "tokens-json"],
  },
  {
    id: "npm",
    term: "npm",
    definition: "자바스크립트 패키지(라이브러리)를 설치하고 관리하는 도구.",
    easyExplanation:
      "다른 사람이 만들어둔 코드(라이브러리)를 다운로드해서 내 프로젝트에서 바로 쓸 수 있게 해주는 '앱스토어' 같은 거예요.",
    designerPerspective: "Figma의 커뮤니티 플러그인/템플릿을 설치해서 쓰는 것과 비슷해요.",
    practicalUse: "npm install로 필요한 라이브러리를 설치하고, npm run dev 같은 명령어로 프로젝트를 실행해요.",
    relatedTerms: ["node-js", "vite"],
  },
  {
    id: "node-js",
    term: "Node.js",
    definition: "브라우저 밖에서도 자바스크립트를 실행할 수 있게 해주는 실행 환경.",
    easyExplanation:
      "원래 자바스크립트는 브라우저 안에서만 실행됐는데, Node.js 덕분에 컴퓨터에서 직접 자바스크립트 코드를 실행할 수 있어요.",
    designerPerspective:
      "Figma 데스크톱 앱이 브라우저 없이도 실행되는 것처럼, Node.js는 브라우저 없이 자바스크립트를 돌릴 수 있게 해주는 엔진이에요.",
    practicalUse: "npm, Vite 등 대부분의 개발 도구가 Node.js 위에서 동작해요. 개발을 시작하려면 가장 먼저 설치해야 해요.",
    relatedTerms: ["npm", "localhost"],
  },
  {
    id: "localhost",
    term: "localhost",
    definition: "내 컴퓨터 안에서만 접속할 수 있는 가상의 주소(127.0.0.1).",
    easyExplanation: "인터넷에 올리기 전에, 내 컴퓨터 안에서만 웹사이트를 미리 볼 수 있게 해주는 주소예요.",
    designerPerspective: "Figma에서 실제 배포 전에 프로토타입을 미리보기(Preview)하는 것과 같은 역할이에요.",
    practicalUse: "npm run dev로 개발 서버를 켜면 http://localhost:5173 같은 주소로 결과물을 바로 확인할 수 있어요.",
    relatedTerms: ["node-js", "vite"],
  },
  {
    id: "vite",
    term: "Vite",
    definition: "빠른 개발 서버와 빌드 도구를 제공하는 프론트엔드 빌드 툴.",
    easyExplanation: "코드를 저장하는 순간 화면이 바로 바뀌는 걸 보여주는, 빠르고 가벼운 개발 도구예요.",
    designerPerspective:
      "Figma에서 수정하면 실시간으로 캔버스에 반영되는 것처럼, Vite도 코드를 저장하면 브라우저 화면이 즉시 반영돼요(HMR).",
    practicalUse: "React + TypeScript 프로젝트를 만들 때 npm create vite@latest 명령어로 가장 많이 사용돼요.",
    relatedTerms: ["npm", "compiler", "localhost"],
  },
  {
    id: "mcp",
    term: "MCP (Model Context Protocol)",
    definition: "AI 모델이 외부 도구나 데이터와 표준화된 방식으로 연결될 수 있게 해주는 프로토콜.",
    easyExplanation:
      "Claude 같은 AI가 Figma, 파일 시스템, 다른 앱들과 직접 대화하고 조작할 수 있게 연결해주는 '통역사' 역할이에요.",
    designerPerspective:
      "Figma 플러그인이 Figma API를 통해 캔버스를 조작하는 것처럼, MCP는 AI가 여러 도구(API)를 직접 조작할 수 있게 해줘요.",
    practicalUse:
      "Talk To Figma MCP처럼 Claude Code가 Figma 파일을 직접 읽고 조작하게 하거나, 다른 서비스와 연동할 때 사용해요.",
    relatedTerms: ["claude-code", "tokens-json"],
  },
  {
    id: "claude-code",
    term: "Claude Code",
    definition: "터미널/에디터에서 Claude AI와 함께 코드를 작성하고 실행할 수 있는 Anthropic의 CLI 도구.",
    easyExplanation:
      "채팅창처럼 대화하면서 실제로 내 프로젝트의 파일을 읽고, 코드를 작성하고, 명령어까지 실행해주는 AI 개발 파트너예요.",
    designerPerspective: "디자인 의도를 말로 설명하면 실제 코드로 구현해주는, 나만의 개발자 팀원이라고 생각하면 돼요.",
    practicalUse: "바이브 코딩(프롬프트로 코드를 작성하는 방식)의 핵심 도구로, 이 사이트를 만들 때도 사용되고 있어요.",
    relatedTerms: ["mcp", "npm"],
  },
  {
    id: "git",
    term: "Git",
    definition: "코드의 변경 이력을 기록하고 관리하는 버전 관리 시스템.",
    easyExplanation:
      "작업한 내용을 스냅샷처럼 저장해두고, 언제든 예전 버전으로 되돌리거나 비교할 수 있게 해주는 도구예요.",
    designerPerspective:
      "Figma의 Version History(버전 기록)와 같은 개념이에요. 다만 Git은 내가 원하는 시점에 직접 저장(commit)을 남겨요.",
    practicalUse: "거의 모든 개발 프로젝트에서 코드 변경 이력을 관리하고 협업하기 위해 사용돼요.",
    relatedTerms: ["commit", "branch"],
  },
  {
    id: "branch",
    term: "Branch",
    definition: "메인 코드에서 분기해서 독립적으로 작업할 수 있는 작업 라인.",
    easyExplanation: "원본은 그대로 두고, 안전하게 실험하거나 새 기능을 만들 수 있는 '복사본 작업 공간'이에요.",
    designerPerspective:
      "Figma에서 Branch(브랜치) 기능으로 메인 파일을 건드리지 않고 별도로 디자인 실험을 하는 것과 똑같은 개념이에요.",
    practicalUse: "새 기능을 개발할 때 main 브랜치에서 새 브랜치를 만들어 작업하고, 완료되면 다시 합쳐요(Merge).",
    relatedTerms: ["git", "commit"],
  },
  {
    id: "commit",
    term: "Commit",
    definition: "코드 변경 사항을 하나의 기록(스냅샷)으로 저장하는 것.",
    easyExplanation:
      "'저장하기' 버튼이라고 생각하면 돼요. 다만 파일 전체가 아니라 무엇을 왜 바꿨는지 메시지와 함께 기록을 남겨요.",
    designerPerspective: "Figma 버전 기록에 이름을 남기고 저장하는 것과 같아요. 나중에 그 시점으로 쉽게 되돌아갈 수 있어요.",
    practicalUse: "작업 단위별로 커밋을 남기면, 문제가 생겼을 때 원인을 추적하거나 이전 버전으로 되돌리기 쉬워져요.",
    relatedTerms: ["git", "branch"],
  },
];

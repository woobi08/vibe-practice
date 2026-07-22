/** 용어사전(Glossary) 한 항목의 구조 */
export interface GlossaryTerm {
  /** 다른 용어에서 relatedTerms로 참조할 때 사용하는 고유 id */
  id: string;
  /** 화면에 보여줄 용어 이름 */
  term: string;
  /** 용어 정의 */
  definition: string;
  /** 초보자도 이해할 수 있는 쉬운 설명 */
  easyExplanation: string;
  /** 디자인 경험이 있는 사람을 위한 비유 */
  designerPerspective: string;
  /** 실무에서 어떻게 쓰이는지 */
  practicalUse: string;
  /** 함께 보면 좋은 용어들의 id */
  relatedTerms: string[];
}

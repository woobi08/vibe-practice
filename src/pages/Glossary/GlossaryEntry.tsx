import type { GlossaryTerm } from "../../types/glossary";
import "./GlossaryEntry.css";

interface GlossaryEntryProps {
  term: GlossaryTerm;
  /** id로 관련 용어의 표시 이름을 찾기 위한 전체 용어 맵 */
  termMap: Map<string, GlossaryTerm>;
  /** 관련 용어 태그를 클릭했을 때 검색어를 그 용어로 바꾼다 */
  onSelectRelated: (term: string) => void;
}

/** 하나의 용어를 아코디언 카드로 보여준다. 클릭하면 상세 설명이 펼쳐진다 */
function GlossaryEntry({ term, termMap, onSelectRelated }: GlossaryEntryProps) {
  return (
    <details className="glossary-entry">
      <summary className="glossary-entry__summary">
        <div className="glossary-entry__heading">
          <span className="glossary-entry__term">{term.term}</span>
          <span className="glossary-entry__definition">{term.definition}</span>
        </div>
        <svg
          className="glossary-entry__chevron"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>

      <div className="glossary-entry__body">
        <section className="glossary-entry__block">
          <h4>쉬운 설명</h4>
          <p>{term.easyExplanation}</p>
        </section>
        <section className="glossary-entry__block">
          <h4>디자이너 관점</h4>
          <p>{term.designerPerspective}</p>
        </section>
        <section className="glossary-entry__block">
          <h4>실무에서는?</h4>
          <p>{term.practicalUse}</p>
        </section>

        {term.relatedTerms.length > 0 && (
          <section className="glossary-entry__block">
            <h4>관련 용어</h4>
            <div className="glossary-entry__tags">
              {term.relatedTerms.map((relatedId) => {
                const related = termMap.get(relatedId);
                if (!related) return null;
                return (
                  <button
                    type="button"
                    key={relatedId}
                    className="glossary-entry__tag"
                    onClick={() => onSelectRelated(related.term)}
                  >
                    {related.term}
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </details>
  );
}

export default GlossaryEntry;

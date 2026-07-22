import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { glossaryData } from "../../data/glossaryData";
import GlossaryEntry from "./GlossaryEntry";
import "./GlossaryPage.css";

const termMap = new Map(glossaryData.map((term) => [term.id, term]));

/** Glossary(용어사전) 페이지: 검색해서 용어를 찾고, 클릭하면 상세 설명이 펼쳐진다 */
function GlossaryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const handleQueryChange = (next: string) => {
    setQuery(next);
    setSearchParams(next ? { q: next } : {}, { replace: true });
  };

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return glossaryData;
    return glossaryData.filter(
      (term) =>
        term.term.toLowerCase().includes(normalized) ||
        term.id.toLowerCase().includes(normalized) ||
        term.definition.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <div className="glossary">
      <header className="glossary__header">
        <p className="glossary__eyebrow">📖 Glossary</p>
        <h1 className="glossary__title">용어사전</h1>
        <p className="glossary__desc">
          공부하며 배운 개발/디자인 용어를 정리했어요. 검색해서 언제든 다시
          찾아보세요.
        </p>
      </header>

      <div className="glossary__search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M21 21l-4.3-4.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="예: token, mcp, state..."
          autoFocus
        />
        {query && (
          <button
            type="button"
            className="glossary__clear"
            onClick={() => handleQueryChange("")}
          >
            지우기
          </button>
        )}
      </div>

      <p className="glossary__count">
        총 {glossaryData.length}개 중 {filtered.length}개
      </p>

      {filtered.length > 0 ? (
        <div className="glossary__list">
          {filtered.map((term) => (
            <GlossaryEntry
              key={term.id}
              term={term}
              termMap={termMap}
              onSelectRelated={handleQueryChange}
            />
          ))}
        </div>
      ) : (
        <div className="glossary__empty">
          <span className="glossary__empty-icon">🔍</span>
          <p>&quot;{query}&quot;에 대한 검색 결과가 없어요.</p>
        </div>
      )}
    </div>
  );
}

export default GlossaryPage;

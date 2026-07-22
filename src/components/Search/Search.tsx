import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

/**
 * 헤더의 검색 UI.
 * 지금은 전체 문서 검색 대신, Enter를 누르면 Glossary(용어사전) 검색으로 연결된다.
 * 나중에 전체 페이지를 대상으로 하는 검색 인덱스로 쉽게 확장할 수 있는 구조다.
 */
function Search() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // ⌘K / Ctrl+K로 검색창에 바로 포커스
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      navigate(`/glossary?q=${encodeURIComponent(value.trim())}`);
      inputRef.current?.blur();
    }
  };

  return (
    <div className="search">
      <svg
        className="search__icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M21 21l-4.3-4.3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        ref={inputRef}
        className="search__input"
        type="text"
        placeholder="용어 검색 (예: token, mcp, state...)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <kbd className="search__kbd">⌘K</kbd>
    </div>
  );
}

export default Search;

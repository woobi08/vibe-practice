import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useThemeContext";
import Search from "../Search/Search";
import "./Header.css";

interface HeaderProps {
  onMenuClick: () => void;
}

/** 상단 헤더: 모바일 메뉴 버튼, 로고, 검색, 다크모드 토글 */
function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header__left">
        <button
          type="button"
          className="header__menu-btn"
          onClick={onMenuClick}
          aria-label="메뉴 열기"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <Link to="/" className="header__logo">
          <span className="header__logo-text">리오의 바이브코딩 메뉴얼</span>
        </Link>
      </div>

      <div className="header__center">
        <Search />
      </div>

      <div className="header__right">
        <button
          type="button"
          className="header__theme-btn"
          onClick={toggleTheme}
          aria-label="다크모드 전환"
          title="다크모드 전환"
        >
          {theme === "light" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;

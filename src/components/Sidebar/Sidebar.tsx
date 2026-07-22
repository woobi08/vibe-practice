import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarData } from "../../data/sidebarData";
import "./Sidebar.css";

interface SidebarProps {
  open: boolean;
  onNavigate: () => void;
}

/** 좌측 사이드바. 카테고리는 접고 펼칠 수 있고, path가 없는 항목은 비활성 처리된다 */
function Sidebar({ open, onNavigate }: SidebarProps) {
  const { pathname } = useLocation();
  // 사용자가 직접 펼치거나 접은 카테고리만 기록한다. 기록이 없으면 기본값(defaultOpen 또는 현재 위치)을 따른다.
  const [manualOverrides, setManualOverrides] = useState<Record<string, boolean>>({});

  const activeCategoryId = sidebarData.find((category) =>
    category.items.some((item) => item.path === pathname),
  )?.id;

  const isCategoryOpen = (categoryId: string, defaultOpen?: boolean) => {
    if (categoryId in manualOverrides) return manualOverrides[categoryId];
    return Boolean(defaultOpen) || categoryId === activeCategoryId;
  };

  const toggleCategory = (categoryId: string, defaultOpen?: boolean) => {
    setManualOverrides((prev) => ({
      ...prev,
      [categoryId]: !isCategoryOpen(categoryId, defaultOpen),
    }));
  };

  return (
    <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <nav className="sidebar__nav">
        {sidebarData.map((category) => {
          // path가 있는 카테고리(Home, Glossary)는 하위 목록 없이 바로 이동하는 링크로 렌더링한다.
          if (category.path) {
            return (
              <div className="sidebar__category" key={category.id}>
                <NavLink
                  to={category.path}
                  end={category.path === "/"}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `sidebar__category-header sidebar__category-header--link ${
                      isActive ? "sidebar__category-header--active" : ""
                    }`
                  }
                >
                  <span className="sidebar__category-icon">{category.icon}</span>
                  <span className="sidebar__category-title">{category.title}</span>
                </NavLink>
              </div>
            );
          }

          const isOpen = isCategoryOpen(category.id, category.defaultOpen);
          return (
            <div className="sidebar__category" key={category.id}>
              <button
                type="button"
                className="sidebar__category-header"
                onClick={() => toggleCategory(category.id, category.defaultOpen)}
                aria-expanded={isOpen}
              >
                <span className="sidebar__category-icon">{category.icon}</span>
                <span className="sidebar__category-title">{category.title}</span>
                {category.items.length > 0 && (
                  <svg
                    className={`sidebar__chevron ${isOpen ? "sidebar__chevron--open" : ""}`}
                    width="14"
                    height="14"
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
                )}
              </button>

              {isOpen && category.items.length > 0 && (
                <ul className="sidebar__items">
                  {category.items.map((item) =>
                    item.path ? (
                      <li key={item.id}>
                        <NavLink
                          to={item.path}
                          onClick={onNavigate}
                          className={({ isActive }) =>
                            `sidebar__item ${isActive ? "sidebar__item--active" : ""}`
                          }
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ) : (
                      <li key={item.id}>
                        <span className="sidebar__item sidebar__item--disabled">
                          {item.title}
                          <span className="sidebar__badge">준비중</span>
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;

import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import "./Layout.css";

/** 전체 페이지 뼈대: Header + Sidebar + 본문(Outlet). 위치 표시는 Sidebar가 담당한다 */
function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="layout">
      <Header onMenuClick={() => setSidebarOpen((prev) => !prev)} />

      <div className="layout__body">
        <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />

        {sidebarOpen && (
          <div
            className="layout__overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="layout__content-area">
          <main className="layout__content page-fade-in" key={pathname}>
            <Outlet />
          </main>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Layout;

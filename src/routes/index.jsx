import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "../pages/homePage";
import Layout from "../components/Layout/Layout";

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // 해시 링크 스크롤이 아닌 경우에만 페이지 상단으로 이동
    if (location.pathname !== "/" && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      {/* 기존 경로들은 올바른 해시 링크로 리디렉션 */}
      <Route path="/service-intro" element={<Navigate to="/#home" replace />} />
      <Route
        path="/company-intro"
        element={<Navigate to="/#company-intro" replace />}
      />
      <Route path="/careers" element={<Navigate to="/#projects" replace />} />
      <Route
        path="/customer-service"
        element={<Navigate to="/#contact" replace />}
      />

      {/* 그 외 모든 알 수 없는 경로는 메인 페이지로 리디렉션 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;

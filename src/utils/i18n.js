import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // 훅을 react-i18next에 전달
  .use(HttpApi) // HTTP 백엔드 플러그인 사용
  .init({
    lng: localStorage.getItem("language") || "ko", // 기본 언어 설정
    fallbackLng: "ko", // 번역을 찾을 수 없을 때 사용할 언어
    debug: true, // 개발 중 디버그 로그 활성화
    interpolation: {
      escapeValue: false, // React는 XSS를 이미 방지하므로 필요 없음
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // 번역 파일 경로
    },
  });

export default i18n;

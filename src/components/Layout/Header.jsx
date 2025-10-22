import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import IconDarkMode from "../icons/IconDarkMode";
import IconLightMode from "../icons/IconLightMode";
import { useTranslation } from "react-i18next";
import IconLanguage from "../icons/IconLanguage";
import { Link } from "react-scroll";

export default function Header({ isSecondSectionVisible }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const [isHoverDark, setIsHoverDark] = useState(false);
  const [isHoverLight, setIsHoverLight] = useState(false);
  const [isHoverLanguage, setIsHoverLanguage] = useState(false);
  const [isDesktopLangModalOpen, setDesktopLangModalOpen] = useState(false);
  const [isMobileLangModalOpen, setMobileLangModalOpen] = useState(false);

  const changeLanguageAndStore = (lang, setModalOpen) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setModalOpen(false);
  };

  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const desktopLanguageButtonRef = useRef(null);
  const mobileLanguageButtonRef = useRef(null);
  const desktopLangModalRef = useRef(null);
  const mobileLangModalRef = useRef(null);

  // 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // 클린업 함수: 컴포넌트 언마운트 시 실행
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // 모달 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop Language modal outside click
      if (
        desktopLangModalRef.current &&
        !desktopLangModalRef.current.contains(event.target) &&
        desktopLanguageButtonRef.current &&
        !desktopLanguageButtonRef.current.contains(event.target)
      ) {
        setDesktopLangModalOpen(false);
      }

      // Mobile Language modal outside click
      if (
        mobileLangModalRef.current &&
        !mobileLangModalRef.current.contains(event.target) &&
        mobileLanguageButtonRef.current &&
        !mobileLanguageButtonRef.current.contains(event.target)
      ) {
        setMobileLangModalOpen(false);
      }

      // Mobile menu outside click
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isMenuOpen,
    desktopLangModalRef,
    desktopLanguageButtonRef,
    mobileLangModalRef,
    mobileLanguageButtonRef,
    mobileMenuRef,
    hamburgerButtonRef,
  ]);

  return (
    <>
      <header
        className={`custom-pd fixed top-0 z-50 w-full max-w-[1920px] items-center py-5 shadow-2xl backdrop-blur-sm transition-all duration-300 lg:py-6 ${isSecondSectionVisible === true ? (theme == "dark" ? "bg-[#000000]/10" : "bg-[#FFFFFF]/10") : ""}`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 md:px-[40px] lg:px-0">
          <h2 className="text-[26px] font-bold text-blue-300 md:text-[28px] lg:text-[30px]">
            김찬우
          </h2>
          <nav
            className={`hidden items-center space-x-10 text-[16px] font-bold md:flex ${
              theme == "dark" ? "text-[#F8F8F8]" : "text-[#212121]"
            }`}
          >
            <Link
              to="home" // 섹션 id
              smooth={true}
              duration={100}
              offset={-80} // 헤더 높이만큼 보정
              className="nav-link-underline inline-block cursor-pointer"
              activeClass="active" // 현재 섹션에 있으면 적용할 클래스
              spy={true} // 스크롤 위치 감지
            >
              홈
            </Link>
            <Link
              to="intro"
              smooth={true}
              duration={100}
              offset={-80}
              className="nav-link-underline inline-block cursor-pointer"
              activeClass="active"
              spy={true}
            >
              소개
            </Link>
            <Link
              to="tech-stack"
              smooth={true}
              duration={100}
              offset={-80}
              className="nav-link-underline inline-block cursor-pointer"
              activeClass="active"
              spy={true}
            >
              기술스택
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={100}
              offset={-80}
              className="nav-link-underline inline-block cursor-pointer"
              activeClass="active"
              spy={true}
            >
              프로젝트
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={100}
              offset={-80}
              className="nav-link-underline inline-block cursor-pointer"
              activeClass="active"
              spy={true}
            >
              연락처
            </Link>
            {/* 우측: 다크/라이트 모드 */}
            <div className="flex justify-end gap-4 md:justify-end">
              {/* 우측: 다크/라이트 모드 및 언어 선택 */}
              <div className="relative flex justify-end gap-6 md:justify-end">
                {/* Mode Button */}
                {theme == "dark" ? (
                  <div
                    onClick={() => setTheme("light")}
                    className="cursor-pointer rounded-[8px] border border-[#E6E7E8] bg-[#FFFFFF]/80 hover:bg-[#FFFFFF]/100 dark:border-0 dark:bg-[#FFFFFF]/20 dark:hover:bg-[#FFFFFF]/50"
                    onMouseEnter={() => setIsHoverLight(true)}
                    onMouseLeave={() => setIsHoverLight(false)}
                  >
                    <IconLightMode
                      color={theme == "dark" ? "#FFFFFF" : "#212121"}
                      strokeOpacity={isHoverLight ? "1" : "0.8"}
                      className="icon_light_mode"
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer rounded-[8px] border border-[#E6E7E8] bg-[#FFFFFF]/80 hover:bg-[#FFFFFF]/100 dark:border-0 dark:bg-[#FFFFFF]/20 dark:hover:bg-[#FFFFFF]/50"
                    onMouseEnter={() => setIsHoverDark(true)}
                    onMouseLeave={() => setIsHoverDark(false)}
                  >
                    <IconDarkMode
                      color={theme == "dark" ? "#FFFFFF" : "#212121"}
                      strokeOpacity={isHoverDark ? "1" : "0.8"}
                      className="icon_dark_mode"
                    />
                  </div>
                )}

                {/* Language Button */}
                {/* <div
                  ref={desktopLanguageButtonRef}
                  onClick={() =>
                    setDesktopLangModalOpen(!isDesktopLangModalOpen)
                  }
                  className="cursor-pointer rounded-[8px] border border-[#E6E7E8] bg-[#FFFFFF]/80 hover:bg-[#FFFFFF]/100 dark:border-0 dark:bg-[#FFFFFF]/20 dark:hover:bg-[#FFFFFF]/50"
                  onMouseEnter={() => setIsHoverLanguage(true)}
                  onMouseLeave={() => setIsHoverLanguage(false)}
                >
                  <IconLanguage
                    color={theme == "dark" ? "#FFFFFF" : "#212121"}
                    strokeOpacity={isHoverLanguage ? "1" : "0.8"}
                    className="icon_language_mode"
                  />
                </div> */}

                {/* Language Modal */}
                {/* <div
                  ref={desktopLangModalRef}
                  className={`ring-opacity-5 absolute top-full right-0 mt-2 w-44 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black transition-all duration-300 ease-in-out focus:outline-none ${
                    isDesktopLangModalOpen
                      ? "visible max-h-screen opacity-100"
                      : "invisible max-h-0 opacity-0"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="w-full px-6 py-5" role="none">
                    <button
                      onClick={() => {
                        changeLanguageAndStore("ko", setDesktopLangModalOpen);
                      }}
                      className={`block w-full text-[16px] hover:text-gray-900 ${i18n.language === "ko" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      한국어
                    </button>
                    <button
                      onClick={() => {
                        changeLanguageAndStore("en", setDesktopLangModalOpen);
                      }}
                      className={`mt-4 block w-full text-[16px] hover:text-gray-900 ${i18n.language === "en" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      English
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </nav>

          {/* 햄버거 버튼 */}
          <button
            ref={hamburgerButtonRef}
            className={`focus:outline-none md:hidden lg:hidden ${
              theme == "dark" ? "text-[#F8F8F8]" : "text-[#212121]"
            }`}
            onClick={toggleMenu}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 슬라이드 - 헤더 아래만 덮도록 수정 */}
        <div
          ref={mobileMenuRef}
          className={`absolute left-0 z-40 w-full overflow-hidden bg-[#F8F8F8] transition-all duration-300 ease-in-out md:hidden dark:bg-[#0f2643] ${
            isMenuOpen ? "max-h-[550px]" : "max-h-0"
          }`}
          style={{
            top: "100%", // 헤더 바로 아래
          }}
        >
          {/* 메뉴 전체를 감싸는 flex 컨테이너 */}
          <div className="flex h-full flex-col justify-between">
            {/* 상단 메뉴 링크 */}
            <div className="mt-10 flex flex-col space-y-11 px-5 text-left text-[20px] font-bold text-[#212121] dark:text-[#F8F8F8]">
              <div>
                <Link
                  to="home" // 섹션 id
                  smooth={true}
                  duration={100}
                  offset={-80} // 헤더 높이만큼 보정
                  className="nav-link-underline inline-block cursor-pointer"
                  activeClass="active" // 현재 섹션에 있으면 적용할 클래스
                  spy={true} // 스크롤 위치 감지
                  onClick={toggleMenu}
                >
                  홈
                </Link>
              </div>

              <div>
                <Link
                  to="intro"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-link-underline inline-block cursor-pointer"
                  activeClass="active"
                  spy={true}
                  onClick={toggleMenu}
                >
                  소개
                </Link>
              </div>

              <div>
                <Link
                  to="tech-stack"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-link-underline inline-block cursor-pointer"
                  activeClass="active"
                  spy={true}
                  onClick={toggleMenu}
                >
                  기술스택
                </Link>
              </div>

              <div>
                <Link
                  to="projects"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-link-underline inline-block cursor-pointer"
                  activeClass="active"
                  spy={true}
                  onClick={toggleMenu}
                >
                  프로젝트
                </Link>
              </div>

              <div>
                <Link
                  to="contact"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-link-underline inline-block cursor-pointer"
                  activeClass="active"
                  spy={true}
                  onClick={toggleMenu}
                >
                  연락처
                </Link>
              </div>
            </div>

            {/* 하단 아이콘 및 저작권 */}
            <div className="mt-20 px-5 pb-5">
              <div className="mb-6 flex w-full flex-row justify-end gap-[16px]">
                {/* Dark Mode Button */}
                {theme == "dark" ? (
                  <div
                    onClick={() => {
                      setTheme("light");
                    }}
                    className="cursor-pointer rounded-[8px] border border-[#E6E7E8] bg-[#FFFFFF]/80 hover:bg-[#FFFFFF]/100 dark:border-0 dark:bg-[#FFFFFF]/50"
                    onMouseEnter={() => setIsHoverDark(true)}
                    onMouseLeave={() => setIsHoverDark(false)}
                  >
                    <IconDarkMode
                      color={"#FFFFFF"}
                      strokeOpacity={isHoverDark ? "1" : "0.8"}
                      className="icon_dark_mode"
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setTheme("dark");
                    }}
                    className="cursor-pointer rounded-[8px] border border-[#E6E7E8] bg-[#FFFFFF]/80 hover:bg-[#FFFFFF]/100 dark:border-0 dark:bg-[#FFFFFF]/50"
                    onMouseEnter={() => setIsHoverLight(true)}
                    onMouseLeave={() => setIsHoverLight(false)}
                  >
                    <IconLightMode
                      color={"#212121"}
                      strokeOpacity={isHoverLight ? "1" : "0.8"}
                      className="icon_light_mode"
                    />
                  </div>
                )}

                {/* Mobile Language Modal */}
                {/* <div className="relative">
                  <div
                    ref={mobileLanguageButtonRef}
                    onClick={() =>
                      setMobileLangModalOpen(!isMobileLangModalOpen)
                    }
                    className="cursor-pointer rounded-[8px] border border-[#E6E7E8] bg-[#FFFFFF]/80 hover:bg-[#FFFFFF]/100 dark:border-0 dark:bg-[#FFFFFF]/50"
                    onMouseEnter={() => setIsHoverLanguage(true)}
                    onMouseLeave={() => setIsHoverLanguage(false)}
                  >
                    <IconLanguage
                      color={theme == "dark" ? "#FFFFFF" : "#212121"}
                      strokeOpacity={isHoverLanguage ? "1" : "0.8"}
                      className="icon_language_mode"
                    />
                  </div>

                  <div
                    ref={mobileLangModalRef}
                    className={`ring-opacity-5 absolute bottom-[calc(100%+8px)] left-0 w-44 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black transition-all duration-300 ease-in-out focus:outline-none ${
                      isMobileLangModalOpen
                        ? "visible max-h-screen opacity-100"
                        : "invisible max-h-0 opacity-0"
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="w-full px-6 py-5" role="none">
                      <button
                        onClick={() => {
                          changeLanguageAndStore("ko", setDesktopLangModalOpen);
                        }}
                        className={`block w-full text-[16px] hover:text-gray-900 ${i18n.language === "ko" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        한국어
                      </button>
                      <button
                        onClick={() => {
                          changeLanguageAndStore("en", setDesktopLangModalOpen);
                        }}
                        className={`mt-4 block w-full text-[16px] hover:text-gray-900 ${i18n.language === "en" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        English
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex w-full justify-center text-[12px] text-[#676E77] dark:text-[#F8F8F8]">
                {t("copyright")}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

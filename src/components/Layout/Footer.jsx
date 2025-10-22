import React, { useState, useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import IconDarkMode from "../icons/IconDarkMode";
import IconLightMode from "../icons/IconLightMode";
import IconLanguage from "../icons/IconLanguage";
import { useTranslation } from "react-i18next";

function Footer() {
  const [isHoverDark, setIsHoverDark] = useState(false);
  const [isHoverLight, setIsHoverLight] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  const [isHoverLanguage, setIsHoverLanguage] = useState(false);
  const [isDesktopLangModalOpen, setDesktopLangModalOpen] = useState(false);
  const desktopLanguageButtonRef = useRef(null);
  const desktopLangModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopLangModalRef.current &&
        !desktopLangModalRef.current.contains(event.target) &&
        desktopLanguageButtonRef.current &&
        !desktopLanguageButtonRef.current.contains(event.target)
      ) {
        setDesktopLangModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopLangModalOpen, desktopLangModalRef, desktopLanguageButtonRef]);

  const changeLanguageAndStore = (lang, setModalOpen) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setModalOpen(false);
  };

  /* ---------------------- Queries ---------------------- */

  return (
    <>
      <footer className="bg-[#F7F8F8] px-5 py-10 md:px-10 md:py-12 lg:py-12 dark:bg-[#06182f]">
        <div className="mx-auto max-w-[1200px] text-left text-[#676E77] dark:text-[#AEB2B7]">
          <div className="text-center text-[12px] md:text-[14px]">
            {t("copyright")}
          </div>
          <div className="mt-8 flex w-full flex-col gap-10 md:mt-10 md:flex-row md:items-start md:justify-between md:gap-0 lg:mt-10 lg:gap-0">
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
                  className={`ring-opacity-5 absolute bottom-[calc(100%+8px)] left-0 z-50 w-44 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black transition-all duration-300 ease-in-out focus:outline-none md:-left-18 lg:-left-18 ${
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
                    <button
                      onClick={() => {
                        changeLanguageAndStore("ja", setDesktopLangModalOpen);
                      }}
                      className={`mt-4 block w-full text-[16px] hover:text-gray-900 ${i18n.language === "ja" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      日本語
                    </button>
                    <button
                      onClick={() => {
                        changeLanguageAndStore(
                          "zh-CN",
                          setDesktopLangModalOpen,
                        );
                      }}
                      className={`mt-4 block w-full text-[16px] hover:text-gray-900 ${i18n.language === "zh-CN" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      中国
                      <br />
                      简体
                    </button>
                    <button
                      onClick={() => {
                        changeLanguageAndStore(
                          "zh-TW",
                          setDesktopLangModalOpen,
                        );
                      }}
                      className={`mt-4 block w-full text-[16px] hover:text-gray-900 ${i18n.language === "zh-TW" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                    >
                      中國
                      <br />
                      繁體
                    </button>
                    <button
                      onClick={() => {
                        changeLanguageAndStore(
                          "es-ES",
                          setDesktopLangModalOpen,
                        );
                      }}
                      className={`mt-4 block w-full text-[16px] hover:text-gray-900 ${i18n.language === "es-ES" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-5"
                    >
                      Español
                      <br />
                      Europa
                    </button>
                    <button
                      onClick={() => {
                        changeLanguageAndStore(
                          "es-LA",
                          setDesktopLangModalOpen,
                        );
                      }}
                      className={`mt-4 block w-full text-[16px] hover:text-gray-900 ${i18n.language === "es-LA" ? "font-bold text-[#212121]" : "font-normal text-[#8D9299]"}`}
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-6"
                    >
                      Español
                      <br />
                      la América Latina
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

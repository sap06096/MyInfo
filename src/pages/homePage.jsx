import React, { useState, useEffect } from "react";
import "../styles/index.css";
import Header from "../components/Layout/Header";
import myPhoto from "../assets/images/main/myPhoto.JPG";

import { ThemeContext } from "../contexts/ThemeProvider";
import IconMail from "../components/icons/IconMail";
import IconPhone from "../components/icons/IconPhone";
import IconGithub from "../components/icons/IconGithub";
import { Link } from "react-scroll";

const initialItems = [
  // {
  //   title: "LServer & LFront (개인 사이드 프로젝트)",
  //   period: "2025.06 ~ (진행중)",
  //   desc: "중고거래 플랫폼(Server + Client) 풀스택 개발",
  //   tags: [
  //     "Java",
  //     "Spring Boot",
  //     "Spring Security",
  //     "JPA",
  //     "MySQL",
  //     "React",
  //     "TypeScript",
  //     "Zustand",
  //     "Tailwind CSS",
  //   ],
  //   architectureDetails: {
  //     summary:
  //       "중고거래 플랫폼. 서버와 클라이언트를 모두 개발한 풀스택 프로젝트입니다.",
  //     server: {
  //       title: "LServer 프로젝트 (Back-End)",
  //       tasks: [
  //         "Spring Security 기반 보안 설계",
  //         "토큰 기반 인증·인가",
  //         "보안 설정 강화 & Role 기반 권한 확장성 고려",
  //         "JPA Specification을 활용한 동적 쿼리 검색 기능 구현",
  //       ],
  //       techStack: ["Java", "Spring Boot", "Spring Security", "JPA", "MySQL"],
  //     },
  //     client: {
  //       title: "LFront 프로젝트 (Front-End)",
  //       tasks: [
  //         "Zustand를 활용한 모듈화된 상태 관리",
  //         "localStorage 토큰 확인 후 백엔드 검증을 통한 인증된 사용자만 접근 제어",
  //         "기능 단위의 UI 컴포넌트 분리",
  //       ],
  //       techStack: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
  //     },
  //   },
  // },
  {
    title: "타사 홈페이지 개발",
    period: "2025.07 ~ 2025.07",
    desc: "반응형 기업 홈페이지 제작",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    architectureDetails: {
      summary:
        "React와 Vite 기반의 반응형 기업 홈페이지를 제작하였습니다. 다국어 지원과 다크 모드를 구현하여 사용자 경험을 개선했습니다.",
      mainTasks: [
        "토스와 트리플 홈페이지를 모티브로 한 현대적인 UI/UX 디자인 구현",
        "Context API와 localStorage를 이용한 라이트/다크 모드 기능 개발",
        "Tailwind CSS를 활용하여 데스크탑, 태블릿, 모바일 완벽 반응형 디자인 적용",
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "i18next"],
      apiArchitecture: {
        title: "다국어 지원 라이브러리 통합",
        integrations: [
          {
            name: "i18next",
            details: [
              "7개국 다국어 번역 기능 구현으로 글로벌 사용자 접근성 확보",
            ],
          },
        ],
      },
    },
  },
  {
    title: "셀러 앱셀",
    period: "2024.05 ~ 2025.06",
    desc: "소비 연금형 캐시백 플랫폼. 제휴 서비스 이용 시 소비액 일부를 캐시백",
    tags: [
      "Vue.js",
      "Quasar Framework",
      "Cordova",
      "JavaScript",
      "GitHub",
      "Firebase",
    ],
    architectureDetails: {
      company: "주식회사 셀러",
      teamSize: "2명",
      summary:
        "Vue.js와 Quasar 프레임워크를 사용한 하이브리드 앱 개발 프로젝트. 사용자가 제휴 서비스를 이용하면 소비 금액의 일부를 캐시백해주는 소비연금 플랫폼입니다.",
      mainTasks: [
        "추천인 등록 및 캐시백 기능을 갖춘 '셀러' 중계 플랫폼 서비스 개발",
        "QR 코드를 활용한 결제 및 사용자 인증 플로우 개발",
        "전반적인 UI/UX 수정 및 반응형 디자인 개선",
        "앱 빌드 및 Cordova 기반의 배포 업무 수행",
      ],
      techStack: [
        "Vue.js",
        "Quasar Framework",
        "Cordova",
        "JavaScript",
        "GitHub",
        "Firebase",
      ],
      apiArchitecture: {
        title: "외부 API 통합 아키텍처",
        integrations: [
          {
            name: "제휴 서비스 API",
            details: [
              "쿠팡, 알리익스프레스 API 연동을 통한 제휴 상품/서비스 데이터 처리",
            ],
          },
          {
            name: "위치 기반 서비스 API",
            details: ["대리운전 API 연동으로 사용자 위치 기반 호출 기능 구현"],
          },
          {
            name: "결제 및 인증 API",
            details: ["NICEPAY 결제 모듈 연동", "KMC 본인인증 연동"],
          },
          {
            name: "알림 서비스 API",
            details: [
              "Kakao 알림톡/메시지 API를 통한 사용자 인증 및 광고 메시지 전송",
              "Firebase Cloud Messaging(FCM)을 통한 실시간 푸시 알림",
            ],
          },
          {
            name: "소셜 로그인 API",
            details: ["Kakao 로그인 API 연동", "Apple 로그인 API 연동"],
          },
        ],
      },
    },
  },
  {
    title: "Core-Payment (CP)",
    period: "2023.07 ~ 2023.12",
    desc: "가맹점 결제 데이터를 기반으로 상위업체 수수료 정산을 지원하는 프로그램",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Axios",
      "MySQL",
      "Vercel",
    ],
    architectureDetails: {
      company: "주식회사 오비시스",
      teamSize: "2명",
      summary:
        "가맹점의 결제 통계를 기반으로 상위 업체에 수수료를 정산해주는 관리 프로그램입니다. Next.js의 SSR 방식을 활용하여 개발되었습니다.",
      mainTasks: [
        "회원 정보 등록 및 관리 기능 개발",
        "로그인 시도 시 브라우저, IP 주소, 성공 여부 등 로그 데이터 저장",
        "결제 취소 및 정산 차감 기능 구현",
        "미디어 쿼리를 사용한 반응형 웹/모바일 UI/UX 구현",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Axios", "MySQL", "Vercel"],
      apiArchitecture: {
        title: "데이터 처리 및 시각화 API",
        integrations: [
          {
            name: "Excel API",
            details: [
              "테이블 데이터를 Excel 시트 형식으로 다운로드하는 기능 제공",
            ],
          },
          {
            name: "데이터 시각화 (Chart.js & Calendar)",
            details: [
              "월별/일자별 결제 및 정산 금액을 그래프와 달력 형태로 시각화",
            ],
          },
        ],
      },
    },
  },
  {
    title: "ALLpin",
    period: "2023.01 ~ 2023.06",
    desc: "결제 관리 시스템(ERP) 유지보수",
    tags: [
      "Spring",
      "Java",
      "JavaScript",
      "MyBatis",
      "Oracle",
      "CSS3",
      "Linux",
      "Ajax",
    ],
    architectureDetails: {
      company: "주식회사 오비시스",
      teamSize: "4명",
      role: "유지보수",
      summary:
        "6개의 프로그램이 연동된 복잡한 구조의 결제 관리 시스템(ERP) 유지보수를 담당했습니다.",
      mainTasks: [
        "프로그램 전반의 오류 수정 및 안정화",
        "Front-end 화면설계서 및 프로세스 정의서 기반의 메뉴얼 PPT 작성 (3개월 소요)",
        "Linux(CentOS 7) 환경에 Apache, Tomcat, MySQL을 설치하고 포트를 설정하여 내부 서버 배포",
      ],
      techStack: [
        "Spring",
        "Java",
        "JavaScript",
        "MyBatis",
        "Oracle",
        "CSS3",
        "Linux",
        "Ajax",
      ],
    },
  },
];

const contacts = [
  {
    id: 1,
    icon: <IconMail size={28} />,
    title: "이메일",
    value: "gimchanu141@gmail.com",
    link: "mailto:gimchanu141@gmail.com",
  },
  {
    id: 2,
    icon: <IconPhone size={28} />,
    title: "전화",
    value: "010-7604-2346",
    link: "tel:01076042346",
  },
  {
    id: 3,
    icon: <IconGithub size={28} />,
    title: "GitHub",
    value: "github.com/sap06096",
    link: "https://github.com/sap06096",
  },
];

function HomePage() {
  const [items, setItems] = useState(
    initialItems.map((item) => ({ ...item, isExpanded: false })),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 },
    );

    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => observer.observe(el));
  }, []);

  const handleToggle = (idx) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === idx ? { ...item, isExpanded: !item.isExpanded } : item,
      ),
    );
  };

  return (
    <>
      {/* 홈 section */}
      <section
        name="home"
        className="custom-pd font-pretendard flex h-screen w-full items-center"
      >
        <div className="mx-auto max-w-[1200px] text-center">
          <img
            src={myPhoto}
            className="mx-auto mt-8 block h-40 w-40 rounded-full border-4 border-gray-200 object-cover object-top md:h-45 md:w-45 lg:h-45 lg:w-45"
          ></img>
          <h1 className="scroll-reveal leading-1.6 font-bolder md:[text-22px] mt-10 mb-5 translate-y-10 text-[18px] font-bold text-[#2563eb] italic opacity-0 transition-all delay-200 duration-700 md:mt-12 md:mb-5 lg:mt-14 lg:mb-6 lg:text-[24px] dark:text-[#589AF9]">
            Fullstack Developer
          </h1>
          <p className="scroll-reveal leading-1.6 mb-6 translate-y-10 text-[20px] font-semibold text-[#6b7280] italic opacity-0 transition-all delay-200 duration-700 md:mb-8 md:text-[22px] lg:mb-10 lg:text-[24px] dark:text-[#589AF9]">
            김찬우 / Kim Chan Woo
          </p>

          <div className="scroll-reveal flex translate-y-10 flex-col items-center justify-center gap-2 text-base text-[14px] opacity-0 transition-all delay-400 duration-700 md:text-[16px] lg:flex-row lg:text-[16px]">
            <span className="font-bold text-[#6b7280] italic dark:text-[#589AF9]">
              "트렌드에 맞춰 발전하는 풀스택 개발자"
            </span>
          </div>

          {/* <div className="mt-8 flex items-center justify-center gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
              프로젝트 보기
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
              연락하기
            </button>          
          </div> */}

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="projects" // 섹션 id
              smooth={true}
              duration={100}
              offset={-80} // 헤더 높이만큼 보정
              className="inline-block cursor-pointer"
              activeClass="active" // 현재 섹션에 있으면 적용할 클래스
              spy={true} // 스크롤 위치 감지
            >
              <button className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2 font-medium text-white shadow hover:from-blue-400 hover:to-indigo-500">
                프로젝트 보기
              </button>
            </Link>
            <Link
              to="contact" // 섹션 id
              smooth={true}
              duration={100}
              offset={-80} // 헤더 높이만큼 보정
              className="inline-block cursor-pointer"
              activeClass="active" // 현재 섹션에 있으면 적용할 클래스
              spy={true} // 스크롤 위치 감지
            >
              <button className="rounded-full border border-gray-200 px-5 py-2 font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white dark:text-white">
                연락하기
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section name="intro" className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="mx-auto inline-block text-[12px] font-bold text-black md:text-[14px] lg:text-[16px] dark:text-white">
          <h1 className="relative inline-block">
            소개
            {/* 그라데이션 밑줄 */}
            <span className="absolute -bottom-4 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
          </h1>
        </div>
        <div className="mt-16 rounded-2xl bg-white p-8 shadow-lg lg:p-12">
          <div className="grid grid-cols-1 items-start gap-8">
            <div className="w-full text-left">
              <p className="mb-6 leading-relaxed text-gray-700">
                안녕하세요!{" "}
                <strong>
                  사용자 중심 기술을 실현하는 백엔드 개발자 김찬우
                </strong>
                입니다. <br />
                저는 단순히 코드를 작성하는 것을 넘어, 팀의 문화를 형성하고 함께
                성장하는 리더십을 추구합니다. 다양한 프로젝트 리더 역할을 통해
                기술적 우수성과 팀워크의 시너지가 만들어내는 가치를 깊이
                이해하게 되었습니다.
              </p>

              <blockquote className="mb-6 border-l-4 border-blue-400 pl-4 text-gray-600 italic">
                "좋은 코드는 좋은 문화에서 나온다" — GitHub 코드 리뷰 문화를
                정착시키고 팀원들과 함께 기술적 도전 과제를 해결해 나가는 과정을
                즐깁니다.
              </blockquote>

              <p className="leading-relaxed text-gray-700">
                사용자의 실제 문제를 해결하는 것을 최우선으로 삼고 있으며, 이를
                위해 끊임없이 소통하고 개선합니다.
              </p>
            </div>

            <aside className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-center rounded-lg bg-white p-3 shadow">
                  {/* 간단한 아이콘 (SVG) */}
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2v6"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 8v8a7 7 0 007 7 7 7 0 007-7V8"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-semibold text-gray-900">
                    기술 철학
                  </h4>
                  <p className="text-sm text-gray-600">
                    사용자 중심 개발 · 실제 문제 해결에 집중
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-center rounded-lg bg-white p-3 shadow">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                      stroke="#7C3AED"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
                      stroke="#7C3AED"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-semibold text-gray-900">
                    협업 스타일
                  </h4>
                  <p className="text-sm text-gray-600">
                    코드 리뷰 문화 정착 · 팀과 함께 성장
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-center rounded-lg bg-white p-3 shadow">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7h18"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 11h12"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 15h6"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-semibold text-gray-900">
                    프로젝트 접근법
                  </h4>
                  <p className="text-sm text-gray-600">
                    리더십과 기술력의 조화 · 지속 가능한 솔루션 추구
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center justify-center rounded-lg bg-white p-3 shadow">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#10B981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.4 15a7 7 0 00-14.8 0"
                      stroke="#10B981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-semibold text-gray-900">
                    관심 분야
                  </h4>
                  <p className="text-sm text-gray-600">
                    마이크로서비스 아키텍처 · 성능 최적화 & 클린 코드
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        name="tech-stack"
        className="mx-auto max-w-6xl px-6 py-16 lg:px-8"
      >
        <div className="mx-auto inline-block text-[12px] font-bold text-black md:text-[14px] lg:text-[16px] dark:text-white">
          <h1 className="relative inline-block">
            기술 스택
            {/* 그라데이션 밑줄 */}
            <span className="absolute -bottom-4 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
          </h1>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {/* Backend Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out group-hover:w-full"></div>
            <h3 className="text-2xl font-bold text-blue-600">💻 BackEnd</h3>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Java, Spring Boot</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Spring Security, JPA, QueryDSL</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>REST API, FastAPI</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>MySQL, Redis, Swagger</span>
              </li>
            </ul>
          </div>

          {/* Frontend Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out group-hover:w-full"></div>
            <h3 className="text-2xl font-bold text-blue-600">🎨 FrontEnd</h3>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>React, Vue</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>JavaScript (ES6+), TypeScript</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Tailwind CSS, Styled-Components</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>React Query, zustand, pinia</span>
              </li>
            </ul>
          </div>

          {/* DevOps & Tools Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out group-hover:w-full"></div>
            <h3 className="text-2xl font-bold text-blue-600">
              🛠️ DevOps & Tools
            </h3>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Git, GitHub</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Docker, Kubernetes</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Jenkins, Github Actions</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>AWS (EC2, S3, RDS)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section name="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mx-auto inline-block text-[12px] font-bold text-black md:text-[14px] lg:text-[16px] dark:text-white">
          <h1 className="relative inline-block">
            프로젝트 경험
            {/* 그라데이션 밑줄 */}
            <span className="absolute -bottom-4 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
          </h1>
        </div>

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2"></div>

          <div className="space-y-16">
            {items.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Dot */}
                <div className="absolute top-1 -left-1 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-1/2 md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                </div>

                {/* Card */}
                <div
                  className={`pl-16 text-left md:w-1/2 lg:w-1/2 ${
                    idx % 2 === 0
                      ? "md:pr-8 lg:pr-8"
                      : "md:ml-auto md:pl-8 lg:ml-auto lg:pl-8"
                  }`}
                >
                  <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300">
                    <span className="text-sm text-gray-500">{item.period}</span>
                    <h3 className="primaryText mt-1 text-[16px] font-bold md:text-[20px] lg:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-semibold text-gray-600">
                      {item.desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => handleToggle(idx)}
                      className="mt-4 cursor-pointer rounded-xl bg-blue-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500"
                    >
                      {item.isExpanded ? "간략히 보기" : "자세히 보기"}
                    </button>

                    {/* Collapsible Details Section */}
                    {item.isExpanded && (
                      <div className="animate-fade-in mt-6 space-y-6 rounded-xl border-t bg-gray-50 px-4 py-6">
                        {item.architectureDetails.summary && (
                          <p className="text-gray-600 italic">
                            {item.architectureDetails.summary}
                          </p>
                        )}

                        {/* Server/Client Details for Side Project */}
                        {item.architectureDetails.server && (
                          <div className="">
                            <h4 className="text-md font-bold text-gray-800">
                              주요 업무 및 성과
                            </h4>
                            <div className="mt-3 rounded-xl border-2 border-gray-200 bg-white p-4 hover:border-blue-500">
                              <h4 className="text-md primaryText font-extrabold">
                                {item.architectureDetails.server.title}
                              </h4>
                              <ul className="pt-2 text-sm text-gray-700">
                                {item.architectureDetails.server.tasks.map(
                                  (task, i) => (
                                    <li key={i}>• {task}</li>
                                  ),
                                )}
                              </ul>
                            </div>

                            <div className="mt-4">
                              <h4 className="text-md font-bold text-gray-800">
                                기술 스택
                              </h4>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {item.architectureDetails.server.techStack.map(
                                  (tech, i) => (
                                    <span
                                      key={i}
                                      className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-800"
                                    >
                                      {tech}
                                    </span>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                        {item.architectureDetails.server &&
                          item.architectureDetails.client && (
                            <hr className="my-6 border-gray-200" />
                          )}
                        {item.architectureDetails.client && (
                          <div className="">
                            <div className="rounded-xl border-2 border-gray-200 bg-white p-4 hover:border-blue-500">
                              <h4 className="text-md primaryText font-extrabold">
                                {item.architectureDetails.client.title}
                              </h4>
                              <ul className="pt-2 text-sm text-gray-700">
                                {item.architectureDetails.client.tasks.map(
                                  (task, i) => (
                                    <li key={i}>• {task}</li>
                                  ),
                                )}
                              </ul>
                            </div>
                            <div className="mt-4">
                              <h4 className="text-md font-bold text-gray-800">
                                기술 스택
                              </h4>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {item.architectureDetails.client.techStack.map(
                                  (tech, i) => (
                                    <span
                                      key={i}
                                      className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-800"
                                    >
                                      {tech}
                                    </span>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* General Details for other projects */}
                        {item.architectureDetails.mainTasks && (
                          <div className="">
                            <h4 className="text-md font-bold text-gray-800">
                              주요 업무 및 성과
                            </h4>
                            <div className="mt-3 space-y-4 rounded-xl border-2 border-gray-200 bg-white p-4 hover:border-blue-500">
                              <ul className="pt-2 text-sm text-gray-700">
                                {item.architectureDetails.mainTasks.map(
                                  (task, i) => (
                                    <li key={i}>• {task}</li>
                                  ),
                                )}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* API Architecture Section */}
                        {item.architectureDetails.apiArchitecture && (
                          <div className="">
                            <h4 className="text-md font-bold text-gray-800">
                              {item.architectureDetails.apiArchitecture.title}
                            </h4>
                            <div className="mt-3 space-y-4">
                              {item.architectureDetails.apiArchitecture.integrations.map(
                                (integration, i) => (
                                  <div
                                    className="rounded-xl border-2 border-gray-200 bg-white p-4 hover:border-blue-500"
                                    key={i}
                                  >
                                    <p className="primaryText font-extrabold">
                                      {integration.name}
                                    </p>
                                    <ul className="pt-3 text-sm text-gray-600">
                                      {integration.details.map((det, j) => (
                                        <li key={j}>• {det}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        )}

                        {item.architectureDetails.techStack && (
                          <div className="mt-4">
                            <h4 className="text-md font-bold text-gray-800">
                              기술 스택
                            </h4>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {item.architectureDetails.techStack.map(
                                (tech, i) => (
                                  <span
                                    key={i}
                                    className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-800"
                                  >
                                    {tech}
                                  </span>
                                ),
                              )}
                            </div>
                          </div>
                        )}

                        <div className="mt-4 flex justify-between text-sm text-gray-500">
                          {item.architectureDetails.company && (
                            <span>{item.architectureDetails.company}</span>
                          )}
                          {item.architectureDetails.teamSize && (
                            <span>
                              개발 인원: {item.architectureDetails.teamSize}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section name="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mx-auto inline-block text-[12px] font-bold text-black md:text-[14px] lg:text-[16px] dark:text-white">
          <h1 className="relative inline-block">
            연락처
            {/* 그라데이션 밑줄 */}
            <span className="absolute -bottom-4 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
          </h1>
        </div>
        <div className="mx-auto my-10 max-w-4xl text-center">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {contacts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center rounded-2xl p-6 transition hover:bg-white hover:shadow-lg"
              >
                <div className="ho mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 font-bold text-blue-600"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

import React from "react";

const IconLanguage = ({
  color = "currentColor",
  strokeOpacity = "0.8",
  strokeWidth = 1.5,
}) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_208_1529)">
      <path
        d="M20.0001 29.2863C25.1284 29.2863 29.2858 25.1289 29.2858 20.0006C29.2858 14.8722 25.1284 10.7148 20.0001 10.7148C14.8717 10.7148 10.7144 14.8722 10.7144 20.0006C10.7144 25.1289 14.8717 29.2863 20.0001 29.2863Z"
        stroke={color}
        stroke-opacity={strokeOpacity}
        strokeWidth={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.7144 20H29.2858"
        stroke={color}
        stroke-opacity={strokeOpacity}
        strokeWidth={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.5716 20.0006C23.3961 23.3963 22.1454 26.6482 20.0001 29.2863C17.8549 26.6482 16.6041 23.3963 16.4287 20.0006C16.6041 16.6049 17.8549 13.3529 20.0001 10.7148C22.1454 13.3529 23.3961 16.6049 23.5716 20.0006V20.0006Z"
        stroke={color}
        stroke-opacity={strokeOpacity}
        strokeWidth={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_208_1529">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(10 10)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default IconLanguage;

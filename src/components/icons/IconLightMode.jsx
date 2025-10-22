import React from "react";

const IconLightMode = ({
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
    {[
      "M10.7691 20H8",
      "M13.4649 13.4647L11.5081 11.5078",
      "M13.4649 26.5352L11.5081 28.492",
      "M29.2307 20H31.9998",
      "M26.5349 26.5352L28.4918 28.492",
      "M19.9998 29.2305V31.9996",
      "M26.5349 13.4647L28.4918 11.5078",
      "M19.9998 10.7691V8",
    ].map((d, i) => (
      <path
        key={i}
        d={d}
        stroke={color}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ))}
    <circle
      cx="20.0001"
      cy="20.0003"
      r="6.04525"
      stroke={color}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default IconLightMode;

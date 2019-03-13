import React, { useEffect } from "react";
import { animated, useSpring, config } from "react-spring";

import styles from "./style.css";

export const Backdrop = () => {
  const height = 550;
  const [{ offset }, set] = useSpring(() => ({
    offset: 0,
    config: {
      ...config.stiff
    }
  }));

  useEffect(() => {
    function listener() {
      set({
        offset: Math.min(height, window.scrollY)
      });
    }
    listener();
    window.addEventListener("scroll", listener, { passive: true });

    return () => window.removeEventListener("scroll", listener);
  }, []);

  const transform = offset.interpolate(
    (value: number) => `translate3d(-50%, ${value * 0.05}px, 0)`
  );

  return (
    <>
      <animated.svg
        className={styles.backdrop}
        style={{
          transform
        }}
        viewBox="0 0 2494 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <g style={{ mixBlendMode: "overlay" }} opacity=".5">
            <path
              d="M1903.67 175l-195.12 156h493.28l-298.16-156z"
              fill="#fff"
              filter="url(#filter0_d)"
            />
            <path
              d="M1811.62 200L1674 309.5h347.91L1811.62 200z"
              fill="#fff"
              filter="url(#filter1_d)"
            />
            <path
              d="M2023.7 214l-137.61 109.5H2234L2023.7 214z"
              fill="#fff"
              filter="url(#filter2_d)"
            />
            <path d="M2285.74 229L2209 290h194l-117.26-61z" fill="#fff" filter="url(#filter3_d)" />
            <path
              d="M1918.85 224l-137.62 109.5h347.92L1918.85 224z"
              fill="#fff"
              filter="url(#filter4_d)"
            />
          </g>
          <g style={{ mixBlendMode: "overlay" }} opacity=".5">
            <path d="M216 181l137.63 136.25H5.69L216 181z" fill="#fff" filter="url(#filter5_d)" />
            <path
              d="M131.34 215.06l97.06 95.64H-17l148.34-95.64z"
              fill="#fff"
              filter="url(#filter6_d)"
            />
            <path
              d="M205.3 223.8l97.06 95.63H56.96l148.33-95.64z"
              fill="#fff"
              filter="url(#filter7_d)"
            />
          </g>
          <g style={{ mixBlendMode: "overlay" }} opacity=".5">
            <path
              d="M533.34 212l97.06 95.63H385L533.34 212z"
              fill="#fff"
              filter="url(#filter8_d)"
            />
            <path
              d="M607.3 220.73l97.06 95.64h-245.4l148.33-95.64z"
              fill="#fff"
              filter="url(#filter9_d)"
            />
          </g>
        </g>
        <filter
          id="filter0_d"
          x="1700.55"
          y="169"
          width="509.28"
          height="172"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter1_d"
          x="1666"
          y="194"
          width="363.92"
          height="125.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter2_d"
          x="1878.09"
          y="208"
          width="363.92"
          height="125.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter3_d"
          x="2201"
          y="223"
          width="210"
          height="77"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter4_d"
          x="1773.23"
          y="218"
          width="363.92"
          height="125.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter5_d"
          x="-2.31"
          y="175"
          width="363.94"
          height="152.25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter6_d"
          x="-25"
          y="209.06"
          width="261.4"
          height="111.63"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter7_d"
          x="48.96"
          y="217.79"
          width="261.4"
          height="111.63"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter8_d"
          x="377"
          y="206"
          width="261.4"
          height="111.63"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter9_d"
          x="450.96"
          y="214.73"
          width="261.4"
          height="111.63"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </animated.svg>
      <svg
        className={styles.backdrop}
        viewBox="0 0 2494 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <g opacity=".35">
            <path
              d="M1496.07 213l2.74.24-.25 2.91m-2.49-3.15l-.25 2.91m.25-2.91l2.49 3.15m-6.56 43.42l2.74.24.25-2.9m-2.99 2.66l.25-2.9m-.25 2.9l2.99-2.67m1.79-20.37l-2.74-.24m2.74.24l.25-2.91m-.25 2.9l-.26 2.92m-2.48-3.15l.25-2.91m-.25 2.9l2.99-2.66m-2.99 2.67l-.26 2.9m.26-2.9l2.48 3.15m-1.46-14.8l2.74.24m-2.74-.24l-.26 2.91m.26-2.9l.25-2.92m-.25 2.91l2.48 3.15m-2.48-3.15l2.99-2.67m-.25 2.91l-.26 2.91m.26-2.9l.25-2.92m-2.48-3.15l2.73.24m-2.73-.24l.25-2.9m-.25 2.9l-.26 2.91m.26-2.9l2.48 3.14m-2.48-3.15l2.99-2.67m-.26 2.91l.26-2.91m-.26 2.91l-.25 2.91m-2.23-6.06l2.74.24m-4.01 14.31l2.74.24m-2.74-.23l.25-2.92m-.25 2.91l-.26 2.91m.26-2.9l2.48 3.15m-2.48-3.16l2.99-2.67m-.25 2.91l.25-2.9m-.25 2.9l-.26 2.92m-2.23-6.07l2.74.24m-2.23-6.06l2.74.24m-3.76 11.4l2.74.25m-1.27 14.55l-2.74-.24m2.74.24l-.26 2.91m.26-2.91l.25-2.91m-2.99 2.67l-.26 2.91m.26-2.91l.25-2.91m-.25 2.9l2.99-2.66m-2.99 2.67l2.48 3.15m-1.97-8.97l2.74.24m-2.74-.24l-.26 2.9m.26-2.9l.25-2.91m-.25 2.9l2.99-2.66m-2.99 2.67l2.48 3.15m.26-2.91l-.26 2.9m.26-2.9l.25-2.91m-4.01 14.31l2.74.24m-2.74-.24l.25-2.91m-.25 2.91l2.99-2.67m-2.99 2.67l-.26 2.91m.26-2.9l2.48 3.14m.26-2.91l.25-2.91m-.25 2.91l-.26 2.91m-2.23-6.06l2.74.24m-2.23-6.06l2.74.24m.51-5.82l-2.74-.24m-1.53 17.46l2.74.24"
              stroke="#fff"
            />
            <path d="M1496 246.5l-1.5 16.5h16.75v-16.5H1496z" fill="#fff" />
          </g>
          <ellipse cx="1246.5" cy="330" rx="1968.5" ry="70" fill="#37109F" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M604.1 253.4l2.4-4.59 2.5 4.55-.49.57 2 3.98-.48.58 2 3.98-.48.57 2 3.98-.48.58-6.37.64-6.37-.5-.5-.57 1.92-4.02-.5-.57 1.92-4.02-.5-.57 1.93-4.02-.5-.56z"
            fill="#fff"
            filter="url(#filter10_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M621.75 251.69l2.4-4.6 2.5 4.54-.49.58 2 3.98-.48.58 2 3.98-.48.57 2 3.98-.48.58-6.37.64-6.37-.5-.5-.57 1.92-4.02-.5-.57 1.92-4.02-.5-.57 1.93-4.02-.5-.56z"
            fill="#fff"
            filter="url(#filter11_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M683.24 254.88l2.4-4.6 2.5 4.55-.5.58 2.01 3.98-.48.57 2 3.98-.49.58 2 3.98-.48.57-6.36.64-6.37-.5-.5-.57 1.92-4.02-.5-.56 1.92-4.02-.5-.57 1.92-4.02-.5-.57z"
            fill="#fff"
            filter="url(#filter12_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M611.84 248.15l3.72-7.12 3.86 7.04-.75.9 3.1 6.16-.75.89 3.1 6.16-.75.9 3.1 6.16-.75.89-9.85.99-9.87-.79-.76-.87 2.97-6.23-.77-.87 2.97-6.23-.77-.88 2.97-6.22-.77-.88z"
            fill="#fff"
            filter="url(#filter13_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M651.07 247.97l2.9-6.57 3.04 6.5-.58.83 2.43 5.7-.58.81 2.43 5.7-.58.82 2.44 5.7-.59.82-7.72.9-7.73-.74-.6-.8 2.32-5.75-.6-.81 2.31-5.75-.6-.8 2.31-5.75-.6-.81z"
            fill="#fff"
            filter="url(#filter14_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M660.2 245.07l3.7-8.38 3.88 8.3-.74 1.05 3.1 7.27-.74 1.05 3.11 7.27-.75 1.05 3.11 7.27-.75 1.05-9.84 1.14-9.87-.93-.77-1.04 2.96-7.33-.77-1.04 2.95-7.33-.77-1.03 2.96-7.34-.77-1.03z"
            fill="#fff"
            filter="url(#filter15_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1634.22 249.59l3.3-5.89 3.07 6.01-.65.73 2.44 5.26-.65.73 2.45 5.26-.65.73 2.44 5.26-.65.73-8.31.58-8.27-.91-.62-.76 2.65-5.15-.62-.76 2.66-5.16-.63-.75 2.66-5.16-.62-.75z"
            fill="#fff"
            filter="url(#filter16_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1657.25 248.05l3.31-5.89 3.07 6.02-.65.73 2.44 5.26-.65.73 2.44 5.26-.65.73 2.45 5.25-.66.74-8.3.57-8.27-.9-.62-.76 2.65-5.16-.62-.76 2.65-5.15-.62-.76 2.66-5.15-.63-.76z"
            fill="#fff"
            filter="url(#filter17_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1714.18 252.2l3.31-5.89 3.07 6.01-.66.74 2.45 5.25-.65.74 2.44 5.25-.65.73 2.44 5.26-.65.73-8.3.58-8.27-.91-.63-.76 2.66-5.15-.62-.76 2.65-5.15-.62-.76 2.65-5.16-.62-.75z"
            fill="#fff"
            filter="url(#filter18_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1644.5 243.06l5.12-9.12 4.75 9.31-1.01 1.14 3.79 8.14-1.01 1.13 3.78 8.14-1.01 1.13 3.79 8.14-1.01 1.14-12.86.89-12.81-1.41-.96-1.17 4.11-7.98-.97-1.18 4.12-7.98-.97-1.17 4.11-7.98-.96-1.17z"
            fill="#fff"
            filter="url(#filter19_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1702.54 245.52l4.03-8.43 3.7 8.59-.8 1.04 2.95 7.51-.8 1.05 2.95 7.5-.8 1.05 2.95 7.51-.8 1.05-10.07.86-10.04-1.27-.75-1.08 3.24-7.38-.75-1.08 3.25-7.38-.76-1.08 3.25-7.38-.75-1.08z"
            fill="#fff"
            filter="url(#filter20_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1615.61 237.12l5.16-10.76 4.71 10.96-1.01 1.34 3.76 9.58-1.02 1.34 3.76 9.58-1.02 1.34 3.76 9.58-1.01 1.34-12.86 1.1-12.81-1.62-.96-1.38 4.14-9.42-.96-1.38 4.14-9.42-.96-1.38 4.14-9.42-.96-1.38z"
            fill="#fff"
            filter="url(#filter21_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M801.24 249.98l3.14-5.95 3.14 5.94-.63.75 2.52 5.2-.63.75 2.52 5.2-.63.75 2.51 5.2-.62.75-8.16.75-8.16-.74-.63-.74 2.5-5.21-.62-.74 2.5-5.21-.63-.75 2.51-5.2-.63-.75z"
            fill="#fff"
            filter="url(#filter22_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M823.88 247.96l3.13-5.96 3.15 5.95-.63.75 2.52 5.2-.63.75 2.52 5.2-.63.75 2.51 5.2-.62.75-8.16.75-8.16-.74-.63-.74 2.5-5.21-.62-.74 2.5-5.21-.63-.75 2.51-5.2-.63-.75z"
            fill="#fff"
            filter="url(#filter23_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M867.2 250.92l3.13-5.95 3.14 5.94-.62.75 2.51 5.2-.63.75 2.52 5.2-.63.75 2.52 5.2-.63.75-8.16.75-8.16-.74-.63-.74 2.51-5.2-.63-.75 2.5-5.21-.62-.75 2.5-5.2-.62-.75z"
            fill="#fff"
            filter="url(#filter24_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M832.88 243.22l4.85-9.22 4.87 9.2-.97 1.16 3.9 8.06-.98 1.15 3.9 8.06-.97 1.16 3.9 8.06-.98 1.15-12.63 1.16-12.64-1.14-.97-1.15 3.88-8.07-.97-1.15 3.88-8.06-.98-1.16 3.88-8.06-.97-1.15z"
            fill="#fff"
            filter="url(#filter25_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M876.27 244.47l3.8-8.51 3.81 8.5-.76 1.07 3.06 7.44-.76 1.07 3.05 7.44-.76 1.06 3.05 7.45-.76 1.06-9.9 1.07-9.9-1.05-.76-1.06 3.04-7.45-.76-1.06 3.03-7.45-.76-1.07 3.04-7.45-.76-1.06z"
            fill="#fff"
            filter="url(#filter26_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M786.4 237.9l4.74-10.86 4.76 10.86-.95 1.35 3.8 9.5-.94 1.37 3.8 9.5-.94 1.36 3.8 9.5-.95 1.35-12.34 1.37-12.34-1.34-.95-1.36 3.8-9.5-.96-1.37 3.79-9.5-.95-1.36 3.79-9.5-.95-1.37z"
            fill="#fff"
            filter="url(#filter27_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2074.24 253.55l3.01-5.42 2.87 5.5-.6.67 2.28 4.81-.59.67 2.28 4.8-.59.68 2.28 4.8-.6.68-7.64.58-7.63-.79-.58-.69 2.42-4.74-.58-.69 2.41-4.74-.57-.69 2.41-4.74-.58-.69z"
            fill="#fff"
            filter="url(#filter28_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2095.45 252l3.02-5.4 2.86 5.49-.6.67 2.29 4.8-.6.68 2.28 4.8-.59.68 2.28 4.8-.59.68-7.65.57-7.63-.78-.58-.7 2.42-4.73-.58-.7 2.42-4.73-.58-.7 2.41-4.73-.58-.7z"
            fill="#fff"
            filter="url(#filter29_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2135.95 255.3l3.01-5.4 2.86 5.49-.59.67 2.28 4.8-.6.68 2.29 4.8-.6.68 2.29 4.8-.6.68-7.65.58-7.62-.79-.58-.69 2.41-4.74-.57-.69 2.41-4.74-.58-.69 2.42-4.74-.58-.7z"
            fill="#fff"
            filter="url(#filter30_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2103.94 247.78l4.66-8.38 4.44 8.5-.93 1.05 3.54 7.44-.92 1.04 3.53 7.44-.92 1.05 3.54 7.44-.93 1.04-11.84.9-11.81-1.22-.89-1.07 3.74-7.34-.9-1.07 3.74-7.34-.89-1.07 3.74-7.34-.9-1.07z"
            fill="#fff"
            filter="url(#filter31_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2144.52 249.52l3.67-7.75 3.46 7.85-.73.96 2.76 6.87-.72.96 2.75 6.86-.72.97 2.75 6.86-.72.97-9.28.85-9.25-1.1-.7-.99 2.95-6.78-.7-.99 2.94-6.79-.7-.98 2.94-6.79-.7-.98z"
            fill="#fff"
            filter="url(#filter32_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2060.52 242.28l4.58-9.9 4.3 10.02-.9 1.23 3.43 8.77-.9 1.23 3.43 8.76-.9 1.23 3.43 8.76-.9 1.23-11.57 1.09-11.53-1.4-.87-1.26 3.67-8.66-.87-1.26 3.67-8.66-.87-1.26 3.67-8.66-.87-1.26z"
            fill="#fff"
            filter="url(#filter33_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1845.57 254.07l1.74-3.22 1.74 3.22-.35.4 1.4 2.82-.35.4 1.39 2.83-.35.4 1.4 2.82-.35.4-4.54.4-4.53-.4-.35-.4 1.4-2.82-.35-.4 1.4-2.82-.35-.4 1.39-2.83-.34-.4z"
            fill="#fff"
            filter="url(#filter34_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1830.34 250.41l2.7-4.99 2.7 5-.55.62 2.16 4.37-.54.62 2.16 4.37-.54.62 2.16 4.37-.54.63-7.02.62-7.02-.63-.54-.62 2.16-4.37-.54-.63 2.16-4.36-.54-.63 2.16-4.36-.53-.63z"
            fill="#fff"
            filter="url(#filter35_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1866.47 250.59l2.12-4.61 2.11 4.61-.42.58 1.69 4.03-.43.58 1.69 4.03-.42.58 1.69 4.03-.42.58-5.5.57-5.5-.58-.42-.57 1.69-4.04-.42-.57 1.69-4.04-.42-.57 1.69-4.04-.42-.57z"
            fill="#fff"
            filter="url(#filter36_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1837.45 248.6l2.7-5.88 2.7 5.88-.55.74 2.16 5.15-.54.73 2.16 5.15-.54.74 2.16 5.15-.54.73-7.02.73-7.02-.74-.54-.73 2.16-5.15-.54-.73 2.16-5.15-.54-.74 2.17-5.14-.54-.74z"
            fill="#fff"
            filter="url(#filter37_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M231.42 267.18l1-2 1.09 1.96-.2.25.86 1.72-.2.25.87 1.72-.2.26.86 1.72-.2.25-2.72.3-2.72-.2-.22-.25.8-1.75-.2-.24.8-1.75-.22-.25.81-1.75-.21-.24z"
            fill="#fff"
            filter="url(#filter38_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M238.95 266.37l1-2 1.1 1.96-.21.26.87 1.72-.2.25.86 1.72-.2.25.86 1.72-.2.25-2.72.3-2.72-.2-.21-.24.8-1.75-.21-.25.8-1.75-.21-.24.8-1.75-.21-.25z"
            fill="#fff"
            filter="url(#filter39_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M257.67 267.03l1-2 1.09 1.96-.2.25.86 1.72-.2.25.87 1.73-.2.25.86 1.72-.2.25-2.72.3-2.72-.2-.22-.25.8-1.75-.2-.24.8-1.75-.21-.25.8-1.75-.21-.24z"
            fill="#fff"
            filter="url(#filter40_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M234.7 264.87l1.57-3.1 1.67 3.04-.31.4 1.34 2.66-.32.39 1.35 2.66-.32.39 1.35 2.66-.32.4-4.2.45-4.22-.3-.33-.38 1.24-2.71-.33-.38 1.25-2.71-.33-.38 1.25-2.71-.34-.38z"
            fill="#fff"
            filter="url(#filter41_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M253.76 264.95l1.22-2.86 1.32 2.82-.25.36 1.06 2.46-.24.36 1.06 2.46-.25.36 1.06 2.46-.25.36-3.29.42-3.3-.3-.26-.35.97-2.5-.26-.35.97-2.5-.26-.35.97-2.5-.27-.35z"
            fill="#fff"
            filter="url(#filter42_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M225.16 263.26l1.55-3.65 1.69 3.6-.32.45 1.35 3.15-.31.45 1.35 3.15-.31.46 1.35 3.14-.31.46-4.2.53-4.23-.38-.33-.44 1.24-3.2-.33-.44 1.23-3.2-.33-.44 1.24-3.19-.33-.45z"
            fill="#fff"
            filter="url(#filter43_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M413.35 262.1l1.82-3.48 1.87 3.46-.37.44 1.5 3.02-.37.44 1.5 3.03-.37.43 1.5 3.03-.37.44-4.79.47-4.8-.4-.36-.43 1.45-3.05-.37-.43 1.45-3.05-.37-.43 1.45-3.05-.37-.43z"
            fill="#fff"
            filter="url(#filter44_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M426.64 260.84l1.82-3.48 1.86 3.46-.36.43 1.5 3.03-.37.44 1.5 3.02-.37.44 1.5 3.03-.37.44-4.79.46-4.8-.4-.37-.43 1.46-3.05-.37-.43 1.45-3.05-.37-.43 1.45-3.05-.37-.43z"
            fill="#fff"
            filter="url(#filter45_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M452.09 262.41l1.81-3.49 1.87 3.46-.36.44 1.5 3.03-.37.43 1.5 3.03-.37.44 1.5 3.02-.37.44-4.79.47-4.8-.4-.36-.43 1.45-3.05-.38-.43 1.46-3.05-.37-.43 1.45-3.05-.37-.43z"
            fill="#fff"
            filter="url(#filter46_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M431.9 258.04l2.82-5.4 2.9 5.36-.57.68 2.31 4.69-.56.67 2.32 4.69-.57.67 2.32 4.7-.57.67-7.41.72-7.43-.62-.57-.66 2.24-4.72-.57-.67 2.25-4.72-.58-.67 2.25-4.72-.57-.67z"
            fill="#fff"
            filter="url(#filter47_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M457.4 258.61l2.2-4.98 2.26 4.95-.44.63 1.82 4.33-.44.62 1.82 4.33-.44.62 1.82 4.33-.45.63-5.8.66-5.82-.58-.45-.62 1.75-4.35-.45-.62 1.76-4.36-.45-.61 1.75-4.36-.45-.62z"
            fill="#fff"
            filter="url(#filter48_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M404.6 255.12l2.73-6.36 2.84 6.32-.56.8 2.27 5.52-.55.8 2.27 5.53-.55.8 2.27 5.52-.55.8-7.24.84-7.25-.74-.57-.79 2.2-5.56-.57-.79 2.19-5.56-.56-.78 2.18-5.56-.56-.8z"
            fill="#fff"
            filter="url(#filter49_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2322.68 264.25l1.76-2.93 1.62 3.01-.34.37 1.29 2.63-.35.37 1.29 2.63-.35.37 1.29 2.63-.35.37-4.41.26-4.39-.48-.33-.38 1.42-2.57-.33-.38 1.42-2.57-.33-.38 1.42-2.57-.33-.38z"
            fill="#fff"
            filter="url(#filter50_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2334.92 263.55l1.76-2.93 1.62 3.02-.34.36 1.29 2.64-.35.36 1.29 2.64-.35.36 1.29 2.64-.35.36-4.41.26-4.39-.48-.33-.38 1.42-2.57-.33-.38 1.42-2.57-.33-.38 1.42-2.57-.33-.38z"
            fill="#fff"
            filter="url(#filter51_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2377.34 267.1l1.77-2.93 1.62 3.02-.35.36 1.29 2.64-.35.36 1.29 2.64-.35.36 1.29 2.64-.34.36-4.41.26-4.4-.48-.33-.38 1.42-2.57-.33-.38 1.42-2.57-.33-.38 1.42-2.57-.33-.38z"
            fill="#fff"
            filter="url(#filter52_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2328.15 261.01l2.74-4.54 2.5 4.67-.54.57 2 4.08-.54.56 2 4.09-.54.56 2 4.08-.54.56-6.83.41-6.8-.74-.51-.6 2.2-3.97-.52-.59 2.2-3.98-.51-.59 2.2-3.98-.51-.59z"
            fill="#fff"
            filter="url(#filter53_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2355.27 261.83l2.16-4.2 1.95 4.3-.42.53 1.55 3.76-.43.52 1.55 3.76-.42.53 1.55 3.76-.42.52-5.36.4-5.32-.66-.4-.55 1.73-3.68-.39-.54 1.73-3.68-.4-.54 1.74-3.68-.4-.55z"
            fill="#fff"
            filter="url(#filter54_d)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2361.65 260.17l2.76-5.37 2.48 5.5-.54.66 1.98 4.8-.54.67 1.98 4.8-.54.67 1.98 4.8-.54.67-6.84.51-6.8-.85-.5-.69 2.21-4.7-.51-.69 2.22-4.7-.51-.7 2.22-4.69-.51-.7z"
            fill="#fff"
            filter="url(#filter55_d)"
          />
          <g opacity=".35">
            <path
              d="M1717.02 148.82a1 1 0 1 0 1.96.36l-1.96-.36zm2-11l-1 5.5 1.96.36 1-5.5-1.96-.36zm-1 5.5l-1 5.5 1.96.36 1-5.5-1.96-.36zM1724.72 154.55l.46-.54.54.46.27 3.5-1 .07-.27-3.5z"
              fill="#fff"
            />
            <path
              d="M1724.5 145.04l.68 8.97m0 0l-.46.54.27 3.49 1-.08-.27-3.49-.54-.46z"
              stroke="#fff"
              stroke-width="2"
            />
            <path
              d="M1712.32 107.72l5.07-.85 4.79-.28 5.36.28 5.64.85 4.79 1.69s2.82-12.69-15.79-12.4c-18.6.28-15.22 12.4-15.22 12.4l5.36-1.7z"
              fill="#fff"
            />
            <path
              d="M1720 138.5l2.18-11.61m0-11l-9.86-8.17m9.86 8.17l-4.79-9.02m4.79 9.02v11m0-11l-15.22-6.48m15.22 6.48v-9.3m0 9.3l5.36-9.02m-5.36 9.02l11-8.17m-11 8.17l15.79-6.48m-13.47 36.09l-2.32-18.61m-9.86-19.17l5.07-.85m-5.07.85l-5.36 1.69m10.43-2.54l4.79-.28m0 0l5.36.28m0 0l5.64.85m0 0l4.79 1.69m0 0s2.82-12.69-15.79-12.4c-18.6.28-15.22 12.4-15.22 12.4"
              stroke="#fff"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter10_d"
            x="591.64"
            y="242.74"
            width="29.92"
            height="35.57"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter11_d"
            x="609.29"
            y="241.02"
            width="29.92"
            height="35.57"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter12_d"
            x="670.78"
            y="244.21"
            width="29.92"
            height="35.57"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter13_d"
            x="596.94"
            y="234.92"
            width="37.55"
            height="46.31"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter14_d"
            x="637.66"
            y="235.31"
            width="32.93"
            height="43.95"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter15_d"
            x="645.29"
            y="230.57"
            width="37.61"
            height="51.68"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter16_d"
            x="1620.09"
            y="237.52"
            width="34.36"
            height="41.65"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter17_d"
            x="1643.12"
            y="235.98"
            width="34.36"
            height="41.65"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter18_d"
            x="1700.05"
            y="240.13"
            width="34.36"
            height="41.65"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter19_d"
            x="1627.01"
            y="227.66"
            width="44.43"
            height="55.72"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter20_d"
            x="1687.02"
            y="230.87"
            width="38.38"
            height="52.6"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter21_d"
            x="1598.02"
            y="220.08"
            width="44.57"
            height="62.71"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter22_d"
            x="787.59"
            y="238.02"
            width="33.6"
            height="41.31"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter23_d"
            x="810.23"
            y="236"
            width="33.6"
            height="41.31"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter24_d"
            x="853.54"
            y="238.96"
            width="33.6"
            height="41.31"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter25_d"
            x="816.13"
            y="227.98"
            width="43.25"
            height="55.19"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter26_d"
            x="861.41"
            y="229.95"
            width="37.35"
            height="52.19"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter27_d"
            x="769.85"
            y="221.03"
            width="42.62"
            height="62.19"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter28_d"
            x="2060.71"
            y="242.02"
            width="32.76"
            height="39.41"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter29_d"
            x="2081.93"
            y="240.48"
            width="32.76"
            height="39.41"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter30_d"
            x="2122.42"
            y="243.78"
            width="32.76"
            height="39.41"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter31_d"
            x="2087.38"
            y="233.22"
            width="41.96"
            height="52.25"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter32_d"
            x="2129.77"
            y="235.63"
            width="36.4"
            height="49.42"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter33_d"
            x="2044.09"
            y="226.22"
            width="41.45"
            height="58.65"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter34_d"
            x="1834.42"
            y="244.84"
            width="25.77"
            height="29.71"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter35_d"
            x="1817.47"
            y="239.42"
            width="31.13"
            height="37.22"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter36_d"
            x="1854.66"
            y="239.98"
            width="27.85"
            height="35.6"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter37_d"
            x="1824.58"
            y="236.71"
            width="31.13"
            height="41.01"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter38_d"
            x="221.5"
            y="259.12"
            width="22.01"
            height="24.54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter39_d"
            x="229.03"
            y="258.32"
            width="22.01"
            height="24.54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter40_d"
            x="247.75"
            y="258.97"
            width="22.01"
            height="24.54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter41_d"
            x="223.73"
            y="255.69"
            width="25.31"
            height="29.22"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter42_d"
            x="243.43"
            y="256.03"
            width="23.33"
            height="28.18"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter43_d"
            x="214.18"
            y="253.53"
            width="25.35"
            height="31.55"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter44_d"
            x="402.01"
            y="252.58"
            width="26.43"
            height="30.83"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter45_d"
            x="415.3"
            y="251.32"
            width="26.43"
            height="30.83"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter46_d"
            x="440.74"
            y="252.89"
            width="26.43"
            height="30.83"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter47_d"
            x="418.73"
            y="246.59"
            width="32.15"
            height="38.96"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter48_d"
            x="445.33"
            y="247.59"
            width="28.67"
            height="37.19"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter49_d"
            x="391.53"
            y="242.71"
            width="31.8"
            height="43.04"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter50_d"
            x="2311.39"
            y="255.2"
            width="25.8"
            height="28.88"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter51_d"
            x="2323.63"
            y="254.5"
            width="25.8"
            height="28.88"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter52_d"
            x="2366.05"
            y="258.05"
            width="25.8"
            height="28.88"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter53_d"
            x="2315.06"
            y="250.29"
            width="31.17"
            height="35.94"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter54_d"
            x="2343.23"
            y="251.49"
            width="27.95"
            height="34.36"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter
            id="filter55_d"
            x="2348.49"
            y="248.62"
            width="31.25"
            height="39.44"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h2494v298H0z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

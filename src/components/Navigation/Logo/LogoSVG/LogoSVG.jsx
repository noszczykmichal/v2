import { forwardRef } from "react";

import "./LogoSVG.scss";

const LogoSVG = forwardRef(function LogoSVG(props, ref) {
  return (
    <div className="logo" ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1080"
        zoomAndPan="magnify"
        viewBox="0 0 810 809.999993"
        height="1080"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <g />
          <clipPath id="df283dd1ae">
            <path
              d="M 0 0 L 805 0 L 805 805 L 0 805 Z M 0 0 "
              clipRule="nonzero"
            />
          </clipPath>
          <clipPath id="2ef7ae0bc5">
            <path
              d="M 405 0 C 181.324219 0 0 181.324219 0 405 C 0 628.675781 181.324219 810 405 810 C 628.675781 810 810 628.675781 810 405 C 810 181.324219 628.675781 0 405 0 "
              clipRule="nonzero"
            />
          </clipPath>
          <clipPath id="d57b39598e">
            <path
              d="M 405 0 C 181.324219 0 0 181.324219 0 405 C 0 628.675781 181.324219 810 405 810 C 628.675781 810 810 628.675781 810 405 C 810 181.324219 628.675781 0 405 0 "
              clipRule="nonzero"
            />
          </clipPath>
        </defs>
        <rect
          x="-81"
          width="972"
          fill="#ffffff"
          y="-80.999999"
          height="971.999992"
          fillOpacity="1"
        />
        <rect
          x="-81"
          width="972"
          fill="#ffffff"
          y="-80.999999"
          height="971.999992"
          fillOpacity="1"
        />
        <rect
          x="-81"
          width="972"
          fill="#0a192f"
          y="-80.999999"
          height="971.999992"
          fillOpacity="1"
        />
        <g clipPath="url(#df283dd1ae)">
          <g clipPath="url(#2ef7ae0bc5)">
            <path
              fill="#0a192f"
              d="M 0 0 L 804.78125 0 L 804.78125 804.78125 L 0 804.78125 Z M 0 0 "
              fillOpacity="1"
              fillRule="nonzero"
            />
          </g>
        </g>
        <g clipPath="url(#d57b39598e)">
          <path
            strokeLinecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 0.0000035, 0.00002)"
            fill="none"
            strokeLinejoin="miter"
            d="M 540.000023 -0.0000266667 C 241.765632 -0.0000266667 -0.00000466667 241.76561 -0.00000466667 540.000001 C -0.00000466667 838.234391 241.765632 1080.000028 540.000023 1080.000028 C 838.234413 1080.000028 1080.00005 838.234391 1080.00005 540.000001 C 1080.00005 241.76561 838.234413 -0.0000266667 540.000023 -0.0000266667 "
            stroke="#64ffda"
            strokeWidth="80"
            strokeOpacity="1"
            strokeMiterlimit="4"
          />
        </g>
        <g fill="#64ffda" fillOpacity="1">
          <g transform="translate(162.587487, 582.495983)">
            <g>
              <path d="M 222.359375 0 L 92.296875 -339.828125 L 90.203125 -339.828125 C 92.648438 -312.898438 93.875 -280.910156 93.875 -243.859375 L 93.875 0 L 52.703125 0 L 52.703125 -383.34375 L 119.828125 -383.34375 L 241.234375 -67.125 L 243.328125 -67.125 L 365.78125 -383.34375 L 432.375 -383.34375 L 432.375 0 L 387.796875 0 L 387.796875 -247 C 387.796875 -275.320312 389.019531 -306.085938 391.46875 -339.296875 L 389.375 -339.296875 L 258.28125 0 Z M 222.359375 0 " />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
});

export default LogoSVG;

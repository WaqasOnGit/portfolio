import React, { useEffect } from "react";

export default function Loader({ onDone }) {
  useEffect(() => {
    const loaderBox = document.getElementById("h-loaderBox");
    const paths = document.querySelectorAll(".h-loader-svg path");

    // Setup stroke-dash for animation
    paths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.setProperty("--len", len);
    });

    let animationDone = false;

    const timer = setTimeout(() => {
      animationDone = true;
      removeLoader();
    }, 6000);

    window.addEventListener("load", removeLoader);

    function removeLoader() {
      if (animationDone && loaderBox) {
        loaderBox.classList.add("hidden");
        if (onDone) onDone();
      }
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", removeLoader);
    };
  }, [onDone]);

  return (
    <div
      id="h-loaderBox"
      className="fixed inset-0 bg-[#0B0F1C] flex justify-center items-center z-[999999]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="583"
        height="100"
        viewBox="0 0 583 100"
        fill="none"
        className="max-w-[90vw] max-h-[90vh] h-loader-svg"
      >
        {/* W */}
        <g transform="translate(0, 0)">
          <path
            className="stroke-[#8e6edb] stroke-[2px] fill-none animate-draw"
            d="M27.3276 91.5L1.32764 1H27.3276L41.3276 56L55.8276 1H77.3276L93.8276 56L104.328 1H133.328L107.828 91.5H83.3276L67.3276 41L50.8276 91.5H27.3276Z"
          />
        </g>

        {/* A */}
        <g transform="translate(155, 0)">
          <path
            className="stroke-[#8e6edb] stroke-[2px] fill-none animate-draw"
            d="M31.8828 1L1.38281 93.5H28.3828L34.3828 76H63.3828L70.3828 93.5H96.8828L66.3828 1H31.8828Z"
          />
          <path
            className="stroke-[#8e6edb] stroke-[2px] fill-none animate-draw"
            d="M49.3828 26L39.3828 56H59.3828L49.3828 26Z"
          />
        </g>

        {/* Q (Corrected) */}
        <g transform="translate(274, 0)">
          <path
            className="stroke-[#8e6edb] stroke-[2px] fill-none animate-draw"
            d="M44.5 1C68.4544 1 88 21.97 88 48C88 74.03 68.4544 95 44.5 95C20.5456 95 1 74.03 1 48C1 21.97 20.5456 1 44.5 1Z"
          />
          <path
            className="stroke-[#8e6edb] stroke-[2px] fill-none animate-draw"
            d="M56 60L75 85" // The diagonal tail of Q
          />
        </g>

        {/* A */}
        <g transform="translate(384, 0)">
          <path
            className="stroke-[#8e6edb] stroke-[2px] fill-none animate-draw"
            d="M31.8828 1L1.38281 93.5H28.3828L34.3828 76H63.3828L70.3828 93.5H96.8828L66.3828 1H31.8828Z"
          />
          <path
            className="stroke-[#8e6edb] stroke-[2px] fill-none animate-draw"
            d="M49.3828 26L39.3828 56H59.3828L49.3828 26Z"
          />
        </g>

        {/* S */}
        <g transform="translate(503, 0)">
          <path
            className="stroke-[#8e6edb] stroke-[2px] fill-none animate-draw"
            d="M77 31.189H53.5C49 16.1905 24.5 20.6905 30.5 33.189C44.002 38.6905 72.0166 39.6905 78.5 63.189C81.0166 108.19 1 110.19 1 63.189H24.5C24.5 63.189 27.0166 80.1905 49 73.189C64.0166 60.6905 22.5 54.6891 22.5 54.6891C22.5 54.6891 0.998555 44.1903 3 31.189C6.00195 -8.30951 74.502 -9.80951 77 31.189Z"
          />
        </g>
      </svg>
    </div>
  );
}

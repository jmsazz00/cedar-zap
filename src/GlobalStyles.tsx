import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }
        ::-webkit-scrollbar-track {
          background-color: #2a2a2a;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #444;
          border-radius: 10px;
          transition: background-color 0.3s, width 0.3s;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #666;
        }
        @keyframes vibrateWithPause {
          0%,
          88% {
            /* Pause for 88% of the time */
            transform: rotate(0deg);
          }
          90% {
            /* Start the vibration */
            transform: rotate(-10deg);
          }
          92% {
            transform: rotate(10deg);
          }
          94% {
            transform: rotate(-10deg);
          }
          96% {
            transform: rotate(10deg);
          }
          98%,
          100% {
            /* Reset */
            transform: rotate(0deg);
          }
        }
      `}
    />
  );
};

export default GlobalStyles;

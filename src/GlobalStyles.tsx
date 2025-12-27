import { Global, css } from "@emotion/react";
import { useTheme } from "@mui/material";

const GlobalStyles = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Global
      styles={css`
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }
        ::-webkit-scrollbar-track {
          background-color: ${isDark ? "#2a2a2a" : "#e0e0e0"};
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${isDark ? "#444" : "#bdbdbd"};
          border-radius: 10px;
          transition: background-color 0.3s, width 0.3s;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${isDark ? "#666" : "#9e9e9e"};
        }
        @keyframes vibrateWithPause {
          0%,
          88% {
            transform: rotate(0deg);
          }
          90% {
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
            transform: rotate(0deg);
          }
        }
      `}
    />
  );
};

export default GlobalStyles;

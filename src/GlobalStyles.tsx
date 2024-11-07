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

        /* Remove white focus outline on buttons */
        button:focus {
          outline: none;
        }
      `}
    />
  );
};

export default GlobalStyles;

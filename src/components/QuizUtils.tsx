import { Box } from "@mui/material";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";
import QuizPause from "./QuizPause";
import QuizTimer from "./QuizTimer";

const QuizUtils: React.FC<{ duration: number }> = ({ duration }) => {
  const { isMobile } = useCheckMobileScreen();

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: "134px", sm: "146px", md: "95px", lg: "90px" },
        right: { xs: "16px", sm: "23px" },
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-end" : "initial",
        gap: isMobile ? 0.1 : 0,
        zIndex: 999,
      }}
    >
      <QuizTimer duration={duration} />
      <QuizPause />
    </Box>
  );
};

export default QuizUtils;

import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { useQuizStateStore } from "../store/QuizStateStore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";

const hoverPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const PauseDialog = () => {
  const open = useQuizStateStore((st) => st.pauseDialogOpen);
  const onClose = useQuizStateStore((st) => st.closePauseDialog);

  return (
    <Dialog
      open={open}
      disableEscapeKeyDown
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DialogContent
        sx={{
          bgcolor: "primary.dark",
          borderRadius: 2,
          padding: 4,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#fff" : "#ffffff",
            fontWeight: 700,
            marginBottom: 3,
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Paused
        </Typography>
        <Box
          onClick={onClose}
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "secondary.main",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            animation: `${hoverPulse} 2s infinite`,
            "&:hover": {
              backgroundColor: "secondary.dark",
              transform: "scale(1.1)",
              transition: "all 0.3s ease",
            },
          }}
        >
          <PlayArrowIcon
            sx={{
              fontSize: "3.5rem",
              color: (theme) =>
                theme.palette.mode === "dark" ? "#fff" : "#ffffff",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            opacity: 0.9,
          }}
        >
          Tap to resume quiz
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default PauseDialog;

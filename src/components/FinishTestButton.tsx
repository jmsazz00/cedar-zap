import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Box, Button } from "@mui/material";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";

interface FinishTestButtonProps {
  onFinish: () => void;
  disabled?: boolean;
  contained?: boolean;
}

const FinishTestButton = ({
  onFinish,
  disabled = false,
  contained = false,
}: FinishTestButtonProps) => {
  const { isMobile } = useCheckMobileScreen();

  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant={contained ? "contained" : "outlined"}
        disabled={disabled}
        onClick={onFinish}
        size={isMobile ? "medium" : "large"}
        sx={{
          fontWeight: "bold",
          color: "primary",
          bgcolor: contained ? "primary.dark" : "none",
        }}
      >
        <DoneOutlineIcon
          sx={{
            mr: { xs: 0.75, lg: 1.25 },
            fontSize: { xs: ".9rem", md: "1rem" },
          }}
        />
        Submit
      </Button>
    </Box>
  );
};

export default FinishTestButton;

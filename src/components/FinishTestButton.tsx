import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

interface FinishTestButtonProps {
  onFinish: () => void;
  disabled: boolean;
  contained?: boolean;
}

const FinishTestButton = ({
  onFinish,
  disabled,
  contained = false,
}: FinishTestButtonProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant={contained ? "contained" : "outlined"}
        disabled={disabled}
        onClick={onFinish}
        size={isMobile ? "small" : "large"}
        sx={{
          fontWeight: "bold",
          color: "primary",
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

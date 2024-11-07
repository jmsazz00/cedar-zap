import { Box, Button } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

interface FinishTestButtonProps {
  onFinish: () => void;
  label?: string;
}

const FinishTestButton = ({
  onFinish,
  label = "Finish Test",
}: FinishTestButtonProps) => {
  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="outlined"
        onClick={onFinish}
        sx={{
          mt: 2,
          fontWeight: "bold",
          color: "primary",
        }}
      >
        <DoneOutlineIcon sx={{ mr: 0.75, fontSize: "1rem" }} />
        {label}
      </Button>
    </Box>
  );
};

export default FinishTestButton;

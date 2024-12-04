import { Box, Button } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

interface FinishTestButtonProps {
  onFinish: () => void;
  label?: string;
}

const FinishTestButton = ({
  onFinish,
  label = "Submit",
}: FinishTestButtonProps) => {
  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="outlined"
        onClick={onFinish}
        sx={{
          width: { md: "66.67%" },
          fontWeight: "bold",
          color: "primary",
        }}
      >
        <DoneOutlineIcon
          sx={{ mr: { xs: 0.75, lg: 1.25 }, fontSize: "1rem" }}
        />
        {label}
      </Button>
    </Box>
  );
};

export default FinishTestButton;

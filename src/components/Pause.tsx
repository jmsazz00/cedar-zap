import { Box } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";

interface Props {
  onPause: () => void;
}

const Pause = ({ onPause }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "#fff",
        p: { xs: "1.5px 3px", lg: "4px 8px" },
        borderRadius: 0.5,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onPause}
    >
      <PauseIcon
        sx={{
          fontSize: { xs: "1.25rem", md: "1.5rem", lg: "1.6rem" },
        }}
      />
    </Box>
  );
};

export default Pause;

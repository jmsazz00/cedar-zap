import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

interface QuizFilterProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const QuizFilter = ({
  value,
  onChange,
  placeholder = "Enter quiz code or name",
}: QuizFilterProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 6 }}>
      <TextField
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(0, 0, 0, 0.3)",
                }}
              />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            background:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            fontSize: { xs: "1rem", md: "1.1rem" },
            transition: "all 0.3s ease",
            "& fieldset": {
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(92, 107, 192, 0.3)"
                  : "rgba(92, 107, 192, 0.2)",
            },
            "&:hover fieldset": {
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(92, 107, 192, 0.5)"
                  : "rgba(92, 107, 192, 0.4)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 0 0 3px rgba(92, 107, 192, 0.15)"
                  : "0 0 0 3px rgba(92, 107, 192, 0.1)",
            },
          },
          "& .MuiOutlinedInput-input": {
            color:
              theme.palette.mode === "dark"
                ? "text.primary"
                : "text.primary",
            fontSize: { xs: "1rem", md: "1.1rem" },
            py: 2.5,
            px: 1.5,
            "&::placeholder": {
              opacity: theme.palette.mode === "dark" ? 0.5 : 0.6,
            },
          },
        }}
      />
    </Box>
  );
};

export default QuizFilter;

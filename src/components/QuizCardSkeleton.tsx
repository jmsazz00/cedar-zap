import { Card, Box, Skeleton, useTheme } from "@mui/material";

const QuizCardSkeleton = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 3,
        background:
          theme.palette.mode === "dark"
            ? "rgba(29, 29, 29, 0.8)"
            : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        border: "1px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(92, 107, 192, 0.2)"
            : "rgba(92, 107, 192, 0.15)",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "220px",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <Skeleton
            variant="rounded"
            width={80}
            height={24}
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
            }}
          />
          <Skeleton
            variant="rounded"
            width={80}
            height={24}
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
        <Skeleton
          variant="text"
          height={32}
          width="80%"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
            mb: 1,
          }}
        />
        <Skeleton
          variant="text"
          height={20}
          width="60%"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
            mb: 1,
          }}
        />
        <Skeleton
          variant="text"
          height={16}
          width="40%"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>

      <Box
        sx={{
          pt: 2,
          borderTop: "1px solid",
          borderColor:
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.05)",
        }}
      >
        <Skeleton
          variant="text"
          height={20}
          width={100}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
            ml: "auto",
          }}
        />
      </Box>
    </Card>
  );
};

export default QuizCardSkeleton;

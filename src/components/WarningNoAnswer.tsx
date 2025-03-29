import { Typography } from "@mui/material";

const WarningNoAnswer = () => (
  <Typography
    variant="body2"
    color="warning.main"
    sx={{
      mb: 0.8,
      fontWeight: 600,
      fontSize: { xs: "0.8rem", md: "0.9rem" },
    }}
  >
    &#9888;&nbsp; Not Answered
  </Typography>
);

export default WarningNoAnswer;

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#2e1f3e",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.4)",
        borderBottom: "1px solid rgba(187, 134, 252, 0.3)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #bb86fc, #8e24aa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
              mr: 2,
            }}
          >
            CEDAR-ZAP
          </Typography>
        </Box>

        {/* Right Section: Home Icon */}
        <IconButton color="inherit" edge="end" aria-label="menu">
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

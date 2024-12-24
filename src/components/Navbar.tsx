import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../assets/logo.png";
import logo_name from "../assets/logo-name.png";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
        borderBottom: "1px solid rgba(187, 134, 252, 0.2)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section: Logo Name */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Box display={"flex"} alignItems={"center"} mr={1}>
            <img src={logo_name} height={40} alt="Logo Name" />
          </Box>
        </Box>

        {/* Center Section: Logo */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Ensures vertical centering
          }}
        >
          <img src={logo} height={50} alt="Logo" />
        </Box>

        {/* Right Section: Home Icon */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <IconButton color="inherit" edge="end" aria-label="menu">
            <HomeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

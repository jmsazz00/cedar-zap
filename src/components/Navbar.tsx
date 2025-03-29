import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import main_logo from "../assets/main-logo.png";
import cedar_logo from "../assets/cedar-logo.png";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";

const Navbar = () => {
  const { isMobile } = useCheckMobileScreen();

  return (
    <AppBar
      sx={{
        bgcolor: "#252525",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
        borderBottom: "1px solid rgba(92, 107, 192, 0.3)",
        display: "flex",
        justifyContent: "center",
        maxHeight: isMobile ? 50 : "initial",
      }}
    >
      <Toolbar sx={{ position: "relative" }}>
        {/* Left Section: Logo Name */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Box display={"flex"} alignItems={"center"} mr={1}>
            <img src={main_logo} height={isMobile ? 33 : 40} alt="Logo Name" />
          </Box>
        </Box>

        {/* Center Section: Logo */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={cedar_logo} height={isMobile ? 42 : 50} alt="Logo" />
        </Box>

        {/* Right Section: Home Icon */}
        <Box>
          <IconButton color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

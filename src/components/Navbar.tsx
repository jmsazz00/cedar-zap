import HomeIcon from "@mui/icons-material/Home";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import main_logo from "../assets/main-logo.png";
import cedar_logo from "../assets/cedar-logo.png";
import { useCheckMobileScreen } from "../hooks/useCheckMobileScreen";
import { useThemeStore } from "../store/ThemeStore";

const Navbar = () => {
  const { isMobile } = useCheckMobileScreen();
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        bgcolor: mode === "dark" ? "#252525" : "#f9f9f9",
        boxShadow:
          mode === "dark"
            ? "0px 2px 8px rgba(0, 0, 0, 0.5)"
            : "0px 2px 8px rgba(0, 0, 0, 0.1)",
        borderBottom:
          mode === "dark"
            ? "1px solid rgba(92, 107, 192, 0.3)"
            : "1px solid rgba(92, 107, 192, 0.2)",
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

        {/* Right Section: Theme Toggle & Home Icon */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            color="default"
            onClick={toggleTheme}
            aria-label="toggle theme"
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton
            color="default"
            aria-label="home"
            onClick={() => navigate("/")}
          >
            <HomeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../assets/logo.png";
import logo_name from "../assets/cedar-logo-1.png";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      sx={{
        bgcolor: "#252525",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
        borderBottom: "1px solid rgba(92, 107, 192, 0.3)",
      }}
    >
      <Toolbar sx={{ position: "relative" }}>
        {/* Left Section: Logo Name */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Box display={"flex"} alignItems={"center"} mr={1}>
            <img src={logo_name} height={isMobile ? 33 : 40} alt="Logo Name" />
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
          <img src={logo} height={isMobile ? 45 : 50} alt="Logo" />
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

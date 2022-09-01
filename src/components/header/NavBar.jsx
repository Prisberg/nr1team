import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "About", "Cases", "Team", "Contact"];

const Hamburgermenu = {
  display: "none",
  "@media (max-width: 640px)": {
    display: "flex",
  },
  mr: "0.5rem",
};
const font = {
  fontWeight: "bold",
};

const Nav = {
  display: "flex",
  "@media (max-width: 640px)": {
    display: "none",
  },
  mr: "3rem",
};

function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "transparent", zIndex: "100" }}>
      <AppBar
        sx={{
          mt: "1.5rem",
          flexGrow: 1,
          backgroundColor: "transparent",
          color: "#F1F1F1",
        }}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, ml: "4rem", fontWeight: "bold" }}
          >
            PHIEE
          </Typography>
          <Box sx={Nav}>
            <Button sx={font} color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button
              sx={font}
              onClick={() => navigate("/about")}
              color="inherit"
            >
              About
            </Button>
            <Button
              sx={font}
              onClick={() => navigate("/cases")}
              color="inherit"
            >
              Cases
            </Button>
            <Button sx={font} onClick={() => navigate("/team")} color="inherit">
              Team
            </Button>

            <Button
              sx={font}
              onClick={() => navigate("/contact")}
              color="inherit"
            >
              Contact
            </Button>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={Hamburgermenu}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem
              sx={{ display: "flex", flexDirection: "column" }}
              onClick={handleCloseNavMenu}
            >
              <Button
                color="inherit"
                onClick={() => navigate("/")}
                textAlign="center"
              >
                {pages[0]}
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/about")}
                textAlign="center"
              >
                {pages[1]}
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/cases")}
                textAlign="center"
              >
                {pages[2]}
              </Button>
              <Button color="inherit" onClick={() => navigate("/team")}>
                {pages[3]}
              </Button>
              <Button color="inherit" onClick={() => navigate("/contact")}>
                {pages[4]}
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

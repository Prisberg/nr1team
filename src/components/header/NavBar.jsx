import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Hamburgermenu = {
  display: "none",
  "@media (max-width: 640px)": {
    display: "flex",
  },
};

const Nav = {
  display: "flex",
  "@media (max-width: 640px)": {
    display: "none",
  },
  mr: 1,
};

function NavBar() {
  const navigate = useNavigate();

  // function scrollIntoView() {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ flexGrow: 1, backgroundColor: "#1F271B" }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Box sx={Nav}>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button onClick={() => navigate("/about")} color="inherit">
              About
            </Button>

            <Button onClick={() => navigate("/team")} color="inherit">
              Team
            </Button>

            <Button onClick={() => navigate("/contact")} color="inherit">
              Contact
            </Button>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={Hamburgermenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

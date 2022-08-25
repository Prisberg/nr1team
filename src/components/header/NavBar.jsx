import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
};

function NavBar() {
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
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Team</Button>
            <Button color="inherit">Contact</Button>
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

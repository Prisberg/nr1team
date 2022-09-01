import React, { useEffect, useState } from "react";
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
import { usePortfolioContext } from "../../utils/PortfolioContext";
import { Alert, Snackbar } from "@mui/material";

const pages = ["Home", "About", "Cases", "Team", "Contact"];

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
  const { loggedIn, username } = usePortfolioContext();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function logOut() {
    window.localStorage.setItem('loggedIn', 'false');
    window.location.reload();
  }

  useEffect(() => {
    if (loggedIn) {
      setOpen(true)
    }
  }, [loggedIn])

  function handleClose() {
    setOpen(false)
  }

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
            <Button onClick={() => navigate("/cases")} color="inherit">
              Cases
            </Button>
            <Button onClick={() => navigate("/team")} color="inherit">
              Team
            </Button>

            <Button onClick={() => navigate("/contact")} color="inherit">
              Contact
            </Button>

            {loggedIn ?
              <Button onClick={logOut} color="inherit">
                Log out
              </Button> :
              <Button onClick={() => navigate("/login")} color="inherit">
                Log in
              </Button>}
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
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Welcome {username}!
        </Alert>
      </Snackbar>
    </Box >
  );
}

export default NavBar;

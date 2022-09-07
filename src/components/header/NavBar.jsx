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
import icon from "../../assets/images/icon.svg";

// const pages = ["Home", "Team", "Skills", "Cases", "Contact", "Login"];

const Hamburgermenu = {
  display: "none",
  "@media (max-width: 750px)": {
    display: "flex",
  },
  mr: "0.5rem",
  "&:hover": {
    color: "#A51D57",
  },
};

const font = {
  mr: "0.1rem",
  fontWeight: "bold",
  fontSize: "1.1rem",
  backgroundColor: "transparent",
  "&:hover": {
    color: "#A51D57",
    backgroundColor: "transparent",
  },
};

const Nav = {
  display: "flex",
  "@media (max-width: 750px)": {
    display: "none",
  },
  mr: "2rem",
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
    window.localStorage.setItem("loggedIn", "false");
    window.location.reload();
  }

  useEffect(() => {
    if (loggedIn) {
      setOpen(true);
    }
  }, [loggedIn]);

  function handleClose() {
    setOpen(false);
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "transparent",
        zIndex: "100",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AppBar
        sx={{
          mt: "1.5rem",
          maxWidth: "2000px",
          flexGrow: 1,
          backgroundColor: "transparent",
          color: "#F1F1F1",
        }}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Box
            component="img"
            src={icon}
            sx={{
              height: "1.6rem",
              width: "2rem",
              ml: "2rem",
              mb: "0.3rem",
              mr: "0.3rem",
              "@media (max-width: 450px)": {
                ml: "1rem",
              },
            }}
            loading="lazy"
          />
          <Typography
            onClick={() => navigate("/")}
            variant="h4"
            component="div"
            sx={{
              "@media (max-width: 800px)": {},
              flexGrow: 1,
              fontWeight: "bold",
              "&:hover": {
                color: "#A51D57",
              },
            }}
          >
            PHIEE
          </Typography>
          <Box sx={Nav}>
            <Button sx={font} color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button onClick={() => navigate("/team")} sx={font} color="inherit">
              Team
            </Button>
            <Button
              onClick={() => navigate("/skills")}
              sx={font}
              color="inherit"
            >
              Skills
            </Button>
            <Button
              onClick={() => navigate("/cases")}
              sx={font}
              color="inherit"
            >
              Cases
            </Button>
            <Button
              sx={font}
              onClick={() => navigate("/contact")}
              color="inherit"
            >
              Contact
            </Button>
            {loggedIn ? (
              <Button sx={font} onClick={logOut} color="inherit">
                Log out
              </Button>
            ) : (
              <Button
                sx={font}
                onClick={() => navigate("/login")}
                color="inherit"
              >
                Login
              </Button>
            )}
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={Hamburgermenu}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon
              sx={{
                fontSize: "2.5rem",
              }}
            />
          </IconButton>

          <Menu
            disableScrollLock={true}
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
              dense="true"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              onClick={handleCloseNavMenu}
            >
              <Button
                color="inherit"
                onClick={() => navigate("/")}
                textAlign="center"
              >
                Home
              </Button>

              <Button
                onClick={() => navigate("/team")}
                color="inherit"
                textAlign="center"
              >
                Team
              </Button>

              <Button onClick={() => navigate("/skills")} color="inherit">
                Skills
              </Button>

              <Button color="inherit" onClick={() => navigate("/contact")}>
                Contact
              </Button>
              <Button
                onClick={() => navigate("/login")}
                color="inherit"
                textAlign="center"
              >
                Login
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Welcome {username}!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default NavBar;

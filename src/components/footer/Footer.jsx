import { Box, Typography } from "@mui/material";
import Map from "./map.jpg";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#EDE6E3" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F9F7F7",
            borderRadius: "25px",
            padding: "2rem",
            display: "flex",
            margin: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ margin: "1rem" }}>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              Nr 1 TEAM
            </Typography>
            <Typography sx={{ fontWeight: "bolder" }}>
              For smart web designs
            </Typography>
            <Typography>Anders Personsgatan 18</Typography>
            <Typography>416 64 Göteborg</Typography>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${Map})`,
              backgroundSize: "contain",
              height: "10rem",
              width: "15rem",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F9F7F7",
            borderRadius: "25px",
            display: "flex",
            padding: "2rem",
            margin: "1rem",
          }}
        >
          <Box sx={{ margin: "1rem" }}>
            <Typography variant="h6"> Lets get in touch</Typography>
            <Typography>Email: nr1team@gmail.com</Typography>
            <Typography>Phone: 070 666 666</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: "2rem",
            }}
          >
            <LinkedInIcon sx={{ height: "40px", width: "40px" }} />
            <GitHubIcon sx={{ height: "40px", width: "40px" }} />
            <FacebookIcon sx={{ height: "40px", width: "40px" }} />
            <InstagramIcon sx={{ height: "40px", width: "40px" }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
        <CopyrightIcon />
        <Typography sx={{ fontWeight: "50", pl: "5px" }}>NR 1 TEAM</Typography>
      </Box>
    </Box>
  );
}

export default Footer;

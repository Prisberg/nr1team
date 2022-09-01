import { Box, Typography } from "@mui/material";
import Map from "./map.jpg";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const mapstyling = {
  border: "0",
};

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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.198258585644!2d11.990865735479428!3d57.70999836278882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1662019796756!5m2!1ssv!2sse"
          width="600"
          height="450"
          style={mapstyling}
          allowfullscreen="true"
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
        <CopyrightIcon />
        <Typography sx={{ fontWeight: "50", pl: "5px" }}>NR 1 TEAM</Typography>
      </Box>
    </Box>
  );
}

export default Footer;

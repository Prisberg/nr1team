import { Box, Typography } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const mapstyling = {
  border: "0",
};

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#000E1A", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Box
          sx={{
            padding: "4rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.198258585644!2d11.990865735479428!3d57.70999836278882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1662019796756!5m2!1ssv!2sse"
            width="600"
            maxwidth="auto"
            height="auto"
            style={mapstyling}
            allowfullscreen="true"
            loading="lazy"
            title="map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <Box sx={{ p: "2rem" }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bolder", color: "white" }}
              >
                Nr 1 TEAM
              </Typography>
              <Typography sx={{ fontWeight: "bolder", color: "white" }}>
                For smart web designs
              </Typography>
              <Typography sx={{ color: "white" }}>
                Anders Personsgatan 18
              </Typography>
              <Typography sx={{ color: "white" }}>416 64 Göteborg</Typography>
            </Box>

            <Box sx={{ pt: "3rem" }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Let's get in touch
              </Typography>
              <Typography sx={{ color: "white" }}>
                Email: nr1team@gmail.com
              </Typography>
              <Typography sx={{ color: "white" }}>
                Phone: 070 666 666
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <LinkedInIcon
                sx={{
                  height: "40px",
                  width: "40px",
                  color: "white",
                  pr: "1rem",
                }}
              />
              <GitHubIcon
                sx={{
                  height: "40px",
                  width: "40px",
                  color: "white",
                  pr: "1rem",
                }}
              />
              <FacebookIcon
                sx={{ height: "40px", width: "40px", color: "white" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
        <CopyrightIcon sx={{ color: "white" }} />
        <Typography sx={{ fontWeight: "50", pl: "5px", color: "white" }}>
          NR 1 TEAM
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;

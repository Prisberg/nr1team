import { Box, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

const mapstyling = {
  border: "0",
  marginTop: "2.4rem",
  borderRadius: "7px",
};

function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#000E1A",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: "2rem",
          mb: "3rem",
          width: "100%",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.198258585644!2d11.990865735479428!3d57.70999836278882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1662019796756!5m2!1ssv!2sse"
          width="100%"
          height="400"
          style={mapstyling}
          allowfullscreen="true"
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              p: "2rem",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bolder", color: "white" }}
            >
              PHIEE
            </Typography>
            <Typography sx={{ color: "white" }}>
              Anders Personsgatan 18
            </Typography>
            <Typography sx={{ color: "white" }}>416 64 Göteborg</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: "2rem",
            }}
          >
            <Button
              sx={{ backgroundColor: "#A51D57", color: "white" }}
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>

            <Typography sx={{ color: "white", pt: "1rem" }}>
              phiee@gmail.com
            </Typography>
            <Typography sx={{ color: "white" }}>070 666 666</Typography>

            <Box>
              <IconButton sx={{ pl: "0" }}>
                <LinkedInIcon
                  sx={{
                    height: "40px",
                    width: "40px",
                    color: "white",
                  }}
                />
              </IconButton>
              <IconButton>
                <GitHubIcon
                  sx={{
                    height: "40px",
                    width: "40px",
                    color: "white",
                  }}
                />
              </IconButton>
              <IconButton>
                <FacebookIcon
                  sx={{ height: "40px", width: "40px", color: "white" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

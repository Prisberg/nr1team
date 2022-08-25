import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EDE6E3",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F9F7F7",
          borderRadius: "25px",
          padding: "2rem",
          display: "flex",
        }}
      >
        <Box>
          <Typography variant="h6">Nr 1 TEAM</Typography>
          <Typography variant="subtitle2">For smart web designs</Typography>
          <Typography>Anders Personsgatan 18</Typography>
          <Typography>416 64 Göteborg</Typography>
        </Box>
        <Box>Map</Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F9F7F7",
          borderRadius: "25px",
          padding: "2rem",
        }}
      >
        <Typography variant="subtitle1"> Lets get in touch</Typography>
        <Typography>Email: nr1team@gmail.com</Typography>
        <Typography>Phone: 070 666 666</Typography>
      </Box>
    </Box>
  );
}

export default Footer;

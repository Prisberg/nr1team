import { Box, Container, Button, Typography } from "@mui/material";
import React from "react";
import greetingimg from "../../../assets/images/greeting-background.svg";

const slogan = {
  color: "#F1F1F1",
  textAlign: "start",
  textShadow: "1.5px 1.5px 2px #A51D57",
  letterSpacing: "1px",
  width: "auto",
};

const secondslogan = {
  color: "#F1F1F1",
  textAlign: "start",
  textShadow: "1.5px 1.5px 2px #A51D57",
  letterSpacing: "1px",
  width: "50rem",
};
const button = {
  backgroundColor: "#A51D57",
  color: "#F1F1F1",
  mt: "1rem",
  ml: "4rem",
  fontWeight: "bold",
};

function Greeting() {
  return (
    <Box
      sx={{
        zIndex: "10",
      }}
    >
      <Box sx={{ height: "700px" }}>
        <img
          src={greetingimg}
          alt="greeting"
          style={{
            height: "800px",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: "1px",
            zIndex: "-1",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "19rem",
            left: "10rem",
            width: "57rem",
          }}
        >
          <Typography variant="h2" sx={slogan}>
            We don’t just design websites, we design experiences.
          </Typography>
          <Typography variant="h5" sx={secondslogan}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
            ex a corporis saepe, nobis aperiam, quia deserunt minima eius
          </Typography>
          <Button variant="contained" sx={button} color="inherit">
            Contact us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Greeting;

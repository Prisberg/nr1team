import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { aboutData } from "../../../assets/aboutData";

const textStyling = {
  mt: "4rem",
  ml: "4rem",
  fontWeight: "regular",
};

function About() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EDE6E3",
        color: "#1F271B",
      }}
      maxWidth=""
    >
      <Box
        sx={{
          mt: "4rem",
          mb: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "8px",
          width: "100rem",
          backgroundColor: "#F9F7F7",
          flexShrink: 1,
        }}
      >
        <Box
          sx={{
            maxWidth: "65rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            mt: "6rem",
          }}
        >
          <Typography sx={textStyling} variant="h4">
            About us
          </Typography>
          <Typography
            sx={{ ml: "4rem", mt: "2.2rem", mr: "4rem", fontWeight: "medium" }}
            variant="h6"
          >
            Creative team core with a strong connection in the industry
          </Typography>
          <Typography
            sx={{
              mt: "0.8rem",
              ml: "4rem",
              mr: "4rem",
              mb: "5rem",
              flexShrink: "1",
              height: "20rem",
            }}
          >
            We work simply and without prestige with full focus on delivering
            solutions that have an effect. We know that in today's world our
            clients need flexibile solutions. That is why our team always works
            agile according to the scrum method. Our team have broad knowledge
            and specialties in web development. Our main goal is to always
            deilver a product that is tailored to our clients needs and desire.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default About;

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

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  height: "500",
  mt: "4rem",
};

const cardStyling = {
  minWidth: 200,
  minHeight: 200,
  m: "2rem",
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
          m: "5rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "8px",
          width: "80rem",
          backgroundColor: "#F9F7F7",
          flexShrink: 1,
        }}
      >
        <Box sx={{ maxWidth: "65rem" }}>
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
            sx={{ mt: "0.5rem", ml: "4rem", mr: "4rem", flexShrink: "1" }}
          >
            We work simply and without prestige with full focus on delivering
            solutions that have an effect. We know that in today's world our
            clients need flexibile solutions. That is why our team always works
            agile according to the scrum method. Our team have broad knowledge
            and specialties in web development. Our main goal is to always
            deilver a product that is tailored to our clients needs and desire.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: "1rem",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {/* <Typography sx={{ fontWeight: "medium", mt: "2rem" }} variant="h6">
            Clients
          </Typography> */}
          <ImageList sx={{ mt: "3rem", mb: "3rem" }}>
            {aboutData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: "7px",
                    margin: "1rem",
                    maxWidth: "20rem",
                  }}
                />
                <ImageListItemBar title={item.title} position="below" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        {/* <Box sx={cardContainer}>
          <Card sx={cardStyling}>
            <CardContent>Bild</CardContent>
          </Card>
          <Card sx={cardStyling}>
            <CardContent>bild</CardContent>
          </Card>
          <Card sx={cardStyling}>
            <CardContent>bild</CardContent>
          </Card>
          <Card sx={cardStyling}>
            <CardContent>bild</CardContent>
          </Card>
        </Box> */}
      </Box>
    </Container>
  );
}

export default About;

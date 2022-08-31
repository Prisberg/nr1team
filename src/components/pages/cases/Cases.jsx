import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
          mt: "2rem",
          mb: "2rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "8px",
          width: "100rem",
          backgroundColor: "#F9F7F7",
          flexShrink: 1,
        }}
      >
        <Box sx={{ maxWidth: "65rem" }}>
          <Typography sx={textStyling} variant="h4">
            Cases
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
          <ImageList gap={10} sx={{ m: "3rem" }}>
            {aboutData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: "7px",
                    maxWidth: "20rem",
                  }}
                />
                <ImageListItemBar title={item.title} position="below" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Container>
  );
}

export default About;

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
  fontWeight: "regular",
};

const images = {
  borderRadius: "7px",
  maxHeight: "20rem",
  maxWidth: "40rem",
  objectFit: "cover",
  boxShadow: "1px 2px 1.5px rgba(0, 0, 0, 0.1)",
};

const imglist = {
  // "@media (max-width: 480px)": {
  //   maxHeight: "23rem",
  //   maxWidth: "20rem",
  objectFit: "cover",
  //   m: "1rem",
  // },
  width: { xs: "17rem", sm: "30rem", md: "40rem" },
  height: { xs: "10rem", sm: "30rem", md: "40rem" },
};

function Cases() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EDE6E3",
        color: "#1F271B",
      }}
      maxWidth="1920px"
    >
      <Box
        sx={{
          mt: "2rem",
          mb: "2rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "8px",
          width: "180rem",
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
            "@media (max-width: 480px)": {
              maxWidth: "20rem",
            },
          }}
        >
          <ImageList gap={10} cols={1} rowHeight={400} sx={{ m: "0.3rem" }}>
            {aboutData.map((item) => (
              <ImageListItem sx={imglist} key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={images}
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

export default Cases;

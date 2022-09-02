import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { aboutData } from "../../../assets/aboutData";

const textStyling = {
  mt: "4rem",
  mb: "3rem",
  fontWeight: "medium",
  fontFamily: "Montserrat",
  color: "#F1F1F1",
};

const images = {
  width: { xs: "12rem", sm: "17rem", md: "25rem", lg: "30rem" },
  height: { xs: "10rem", sm: "15rem", md: "20rem", lg: "30rem" },
  borderRadius: "7px",
  objectFit: "cover",
  boxShadow: "1px 2px 1.5px rgba(0, 0, 0, 0.1)",
};

const imglist = {
  objectFit: "cover",
  width: { xs: "12rem", sm: "17rem", md: "25rem", lg: "30rem" },
  color: "#F1F1F1",
  fontWeight: "medium",
  fontFamily: "Montserrat",
};

function Cases() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#001220",
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
        }}
      >
        <ImageList
          gap={25}
          cols={2}
          rowHeight={{ xs: "", sm: "17rem", md: "25rem", lg: "30rem" }}
        >
          {aboutData.map((item) => (
            <ImageListItem sx={imglist} key={item.img}>
              <Box
                component="img"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                sx={images}
              />
              <ImageListItemBar title={item.title} position="center" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Cases;

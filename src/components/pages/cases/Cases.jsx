import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { aboutData } from "../../../assets/aboutData";

const textStyling = {
  mt: "3rem",
  mb: "1rem",
  fontWeight: "medium",
  fontFamily: "Montserrat",
  color: "#F1F1F1",
  textAlign: "start",
};

const images = {
  width: { xs: "12rem", sm: "17rem", md: "25rem", lg: "30rem" },
  height: { xs: "10rem", sm: "15rem", md: "20rem", lg: "25rem" },
  borderRadius: "7px",
  objectFit: "cover",
  boxShadow: "1px 2px 1.5px rgba(0, 0, 0, 0.1)",
  "@media (max-width: 450px)": {
    height: "7rem",
    width: "8rem",
  },
};

const imglist = {
  objectFit: "cover",
  width: { xs: "12rem", sm: "17rem", md: "25rem", lg: "30rem" },
  "@media (max-width: 450px)": {
    width: "8rem",
  },
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
      <Box
        sx={{
          display: "flex",
          m: "1rem",
          flexDirection: "column",
        }}
      >
        <Typography sx={textStyling} variant="h4">
          Cases
        </Typography>
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
              <ImageListItemBar
                sx={{
                  height: "4rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                title={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Cases;

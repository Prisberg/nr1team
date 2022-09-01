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
  borderRadius: "7px",
  maxHeight: "20rem",
  maxWidth: "40rem",
  objectFit: "cover",
  boxShadow: "1px 2px 1.5px rgba(0, 0, 0, 0.1)",
};

const imglist = {
  objectFit: "cover",
  width: { xs: "17rem", sm: "30rem", md: "40rem" },
  height: { xs: "10px", sm: "10px", md: "10px" },
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
              <ImageListItemBar title={item.title} position="center" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Cases;

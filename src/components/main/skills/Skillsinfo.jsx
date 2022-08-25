import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const textStyling = {
  m: "2rem",
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  height: "500",
};

const cardStyling = {
  minWidth: 200,
  minHeight: 200,
  m: "3rem",
};

function Skillsinfo() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EDE6E3",
      }}
      maxWidth="xl"
    >
      <Box
        sx={{
          m: "4rem",
          justifyContent: "center",
          borderRadius: "8px",
          width: 1200,
          height: 800,
          backgroundColor: "#F9F7F7",
        }}
      >
        <Typography sx={textStyling} variant="h3">
          JavaScript
        </Typography>
        <Box sx={cardContainer}>
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
        </Box>
        <Typography sx={textStyling}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in
          perspiciatis consequuntur aut rerum voluptate quia nisi quo cumque
          soluta tempore error, laudantium animi voluptas? Officia officiis
          molestiae quae soluta? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Impedit, in perspiciatis consequuntur aut rerum
          voluptate quia nisi quo cumque soluta tempore error, laudantium animi
          voluptas? Officia officiis molestiae quae soluta? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Impedit, in perspiciatis
          consequuntur aut rerum voluptate quia nisi quo cumque soluta tempore
          error, laudantium animi voluptas? Officia officiis molestiae quae
          soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Impedit, in perspiciatis consequuntur aut rerum voluptate quia nisi
          quo cumque soluta tempore error, laudantium animi voluptas? Officia
          officiis molestiae quae soluta? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Impedit, in perspiciatis consequuntur
          aut rerum voluptate quia nisi quo cumque soluta tempore error,
          laudantium animi voluptas? Officia officiis molestiae quae soluta?
        </Typography>
      </Box>
    </Container>
  );
}

export default Skillsinfo;

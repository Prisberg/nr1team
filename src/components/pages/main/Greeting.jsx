import { Box, Button, Typography } from "@mui/material";
import React from "react";
import greetingimg from "../../../assets/images/greeting-background.svg";
import MovingText from "react-moving-text";
import { useNavigate } from "react-router-dom";

const imgstyling = {
  height: "790px",
  width: "100%",
  objectFit: "cover",
  position: "absolute",
  top: "0px",
  zIndex: "-1",
  "@media (max-width: 450px)": {
    height: "500px",
  },
  "@media (max-width: 360px)": {
    height: "800px",
  },
};
const slogan = {
  color: "#F1F1F1",
  textAlign: "start",
  textShadow: "1.5px 1.5px 2px #A51D57",
  fontFamily: "Montserrat",
  "@media (max-width: 880px)": {
    fontSize: "3rem",
  },
  "@media (max-width: 450px)": {
    fontSize: "2rem",
  },
  "@media (max-width: 360px)": {
    fontSize: "1.5rem",
  },
};

const secondslogan = {
  color: "#F1F1F1",
  textAlign: "start",
  fontWeight: "regular",
  width: "50rem",
  mt: "0.5rem",
  "@media (max-width: 1120px)": {
    width: "40rem",
  },
  "@media (max-width: 880px)": {
    width: "30rem",
    fontSize: "1.5rem",
  },
  "@media (max-width: 580px)": {
    width: "20rem",
    fontSize: "1.5rem",
  },
  "@media (max-width: 450px)": {
    fontSize: "1rem",
    width: "15rem",
  },
  "@media (max-width: 390px)": {
    width: "13rem",
  },
  "@media (max-width: 360px)": {
    width: "13rem",
    fontSize: "0.8rem",
  },
};

const button = {
  fontSize: "1.2rem",
  height: "3.5rem",
  width: "13rem",
  backgroundColor: "#A51D57",
  color: "#F1F1F1",
  mt: "1.3rem",
  ml: "4.2rem",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#681136",
  },
  "@media (max-width: 450px)": {
    ml: "2rem",
    fontSize: "1rem",
    height: "2.5rem",
    width: "10rem",
  },
  "@media (max-width: 360px)": {
    fontSize: "1rem",
    ml: "1rem",
  },
};

function Greeting() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        zIndex: "10",
      }}
    >
      <Box
        sx={{
          height: "700px",
          "@media (max-width: 450px)": {
            height: "500px",
          },
          "@media (max-width: 360px)": {
            height: "400px",
          },
        }}
      >
        <img src={greetingimg} alt="greeting" style={imgstyling} />
        <Box
          sx={{
            position: "absolute",
            top: "19rem",
            left: "8rem",
            width: "57rem",
            "@media (max-width: 1250px)": {
              width: "57rem",
              top: "17rem",
              left: "7rem",
            },
            "@media (max-width: 1120px)": {
              width: "46rem",
              top: "17rem",
              left: "7rem",
            },
            "@media (max-width: 880px)": {
              left: "5rem",
              width: "30rem",
              top: "15rem",
            },
            "@media (max-width: 580px)": {
              width: "20rem",
              top: "10rem",
              left: "4rem",
            },
            "@media (max-width: 390px)": {
              width: "16rem",
              top: "8rem",
              left: "4rem",
            },
            "@media (max-width: 360px)": {
              width: "16rem",
              left: "2rem",
              top: "10rem",
            },
            "@media (min-width: 2000px)": {
              width: "60rem",
              left: "21rem",
              top: "15rem",
            },
            "@media (min-width: 2500px)": {
              width: "60rem",
              left: "30rem",
              top: "16rem",
            },
            "@media (min-width: 3000px)": {
              width: "70rem",
              left: "60rem",
              top: "16rem",
            },
            "@media (min-width: 4000px)": {
              width: "70rem",
              left: "100rem",
              top: "16rem",
            },
          }}
        >
          <MovingText
            type="flipFromTop"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="both"
          >
            <Typography className="text" variant="h2" sx={slogan}>
              We don’t just design websites, we design experiences
            </Typography>
            <Typography variant="h5" sx={secondslogan}>
              Our team have broad knowledge and specialties in web development.
              Our main goal is to always deilver a product that is tailored to
              our clients needs and desire.
            </Typography>
            <Button
              onClick={() => navigate("/contact")}
              variant="contained"
              sx={button}
            >
              Contact us
            </Button>
          </MovingText>
        </Box>
      </Box>
    </Box>
  );
}

export default Greeting;

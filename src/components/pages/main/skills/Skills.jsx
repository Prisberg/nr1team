import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Skills.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//img
import UX from "../../../../assets/images/ux.png";
import JS from "../../../../assets/images/javascript.png";
import ReactImg from "../../../../assets/images/react.png";
import node from "../../../../assets/images/node.png";
import Mongo from "../../../../assets/images/mongo.png";
import shape from "../../../../assets/images/shape.png";
//mobile img
import UXM from "../../../../assets/images/MobileSkillsIcons/ux.png";
import JSM from "../../../../assets/images/MobileSkillsIcons/java.png";
import ReactImgM from "../../../../assets/images/MobileSkillsIcons/react.png";
import nodeM from "../../../../assets/images/MobileSkillsIcons/node.png";
import MongoM from "../../../../assets/images/MobileSkillsIcons/mongo.png";

AOS.init();
function Skills() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Box id="skills" sx={mainBox} className="mainBox">
      <Box sx={innerBox}>
        <Box data-aos="fade-in" data-aos-duration="1000" className="textBox">
          <Avatar alt="" src={shape} sx={shapeStyle} />
          <Typography className="mainText" data-aos="fade-in" sx={mainTitle}>
            Our <br /> expertise
          </Typography>
        </Box>
        <Box sx={skillsBox}>
          {skills.map((skill) => (
            <Box sx={skillBox} key={skill.id}>
              <Box
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
              >
                <img src={skill.img} alt="" />
              </Box>
              <Box
                sx={skillInfo}
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <Box>
                  <Typography sx={skillTitle}>{skill.title}</Typography>
                </Box>
                <Box>
                  <Typography sx={skillDis}>{skill.dis}</Typography>
                </Box>
                <Box sx={more}>
                  <Link
                    to={skill.url}
                    style={{ textDecoration: "none", color: "#f1f1f1" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.2em",
                        fontWeight: "bold",
                      }}
                    >
                      Read more
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="mobileMainBox" sx={skillBoxMobile}>
        <Box>
          <Avatar alt="" src={shape} sx={shapeStyleMobile} />
          <Typography sx={mainTitleMobile}>
            Our <br /> expertise
          </Typography>
        </Box>
        <Swiper
          spaceBetween={50}
          initialSlide={0}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={pagination}
          modules={[EffectCoverflow, Pagination]}
          className="slide"
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.id} className="slider">
              <Box>
                <Box className="skill-image">
                  <img src={skill.imgM} alt="" />
                </Box>
                <Box className="skill-info">
                  <h1>{skill.title}</h1>
                </Box>
                <Box className="skill-info">
                  <p>{skill.dis}</p>
                </Box>
                <Box sx={more}>
                  <Link
                    to={skill.url}
                    style={{ textDecoration: "none", color: "#f1f1f1" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.2em",
                        fontWeight: "bold",
                      }}
                    >
                      Read more
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Skills;

const mainBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width:{ xs: '100%', md: '100%', lg: '100%', xl: '100%'},
  height: { xs: '700px', md: '1350px ', lg: '1350px', xl: '1500px'},
  backgroundColor: '#001220',
}
const innerBox = {
  display: {xs: 'none', md: 'block', lg: 'block', xl: 'block'},
  width: '90%',
  maxWidth: '1500px',
  position: 'relative',
  // paddingLeft: '2em',

}
const mainTitle = {
  fontSize: { xs: "2em", md: "2em", lg: "3em", xl: "3em" },
  fontWeight: "bolder",
  color: "#f1f1f1",
  position: "absolute",
  top: { xs: '0em', md: `5em`, lg: `3em`, xl: `3em`},
  right: { xs: '0em', md: "1.5em", lg: "2em", xl: "2em"},
  lineHeight: '50px',
};
const shapeStyle = {
  position: "absolute",
  top: { xs: '2em', md: `4em`, lg: `2em`, xl: `1em`},
  right: { xs: '0em', md: "0em", lg: "2em", xl: "2em"},
  width:  { xs: '250px', md: "250px", lg: "300px", xl: "300px"},
  height:  { xs: '250px', md: "250px", lg: "300px", xl: "300px"},
}

const mainTitleMobile = {
  position: "absolute",
  top: '2em',
  left: '1em',
  fontWeight: "bolder",
  fontSize: "1em",
  color: "#f1f1f1",
  zIndex: "9999",
  width: "100%",
};
const shapeStyleMobile = {
  position: "absolute",
  top: `0em`,
  left: '0em',
  width: "100px",
  height: "100px",
  zIndex: "99",
};
const skillsBox = {
  display: { xs: "none", md: "flex", lg: "flex", xl: "flex" },
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "90%",
  marginTop: "15em",
  "& :nth-child(even)": {
    justifyContent: "flex-end",
  },
}


const skillBox = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  position: "relative",
  height: "200px",
  marginBottom: "2em",
  width: "100%",
};

const skillInfo = {
  width: { xs: "", md: "450px", lg: "550px", xl: "550px" },
  marginLeft: "2em",
  color: "#f1f1f1",
  position: "relative",
  height: "200px",
};
const skillTitle = {
  paddingBottom: { xs: "0.5em", md: "1em", lg: ".5em", xl: ".5em" },
  fontSize: { xs: "1em", md: "1em", lg: "1em", xl: "1em" },
  color: "#f1f1f1",
};
const skillDis = {
  color: "#f1f1f1",
};
const more = {
  color: "#f1f1f1",
  cursor: "pointer",
  position: "absolute",
  width: "150px",
  right: { xs: "1em", md: "0", lg: "0", xl: "0" },
  bottom: { xs: "5em", md: "1em", lg: "1em", xl: "1em" },
  textDecoration: "none",
  "& :hover": {
    fontSize: "1.2em",
  },
};

const skillBoxMobile = {
  display: {xs: 'block', md: 'none', lg: 'none', xl: 'none'},
  width: { xs: '80%', md: '96%', lg: '96%', xl: '96%'},
  position: 'relative',
}

const skills = [
  {
    id: "2",
    img: `${UX}`,
    imgM: `${UXM}`,
    title: "UX Design",
    url: "/UxDesign",
    dis: "User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. UX design involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function.. ",
  },
  {
    id: "3",
    img: ` ${JS}`,
    imgM: ` ${JSM}`,
    title: "JavaScript",
    url: "/JavaScript",
    dis: "Often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.. ",
  },
  {
    id: "4",
    img: `${ReactImg}`,
    imgM: `${ReactImgM}`,
    title: "React",
    url: "/ReactInfo",
    dis: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library.for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. ",
  },
  {
    id: "5",
    img: `${node}`,
    imgM: `${nodeM}`,
    title: "nodJS",
    url: "/Node",
    dis: "Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!.Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant. ",
  },
  {
    id: "6",
    img: `${Mongo}`,
    imgM: `${MongoM}`,
    title: "MongoDB",
    url: "/Mongo",
    dis: "MongoDB is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents. ",
  },
];

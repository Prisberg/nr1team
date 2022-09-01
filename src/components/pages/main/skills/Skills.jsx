import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import FigmaImg from './Skill-imgs/figma.png'
import UX from './Skill-imgs/UX.png'
import JS from './Skill-imgs/JS.png'
import ReactImg from './Skill-imgs/React.png'
import node from './Skill-imgs/node.png'
import Mongo from './Skill-imgs/Mongo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, EffectCoverflow } from 'swiper';
import MoreIcon from '@mui/icons-material/More';


import "./Skills.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



function Skills () {
  


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Box sx={mainBox}>
      <Box sx={innerBox}>
        <Box>
          <Typography sx={mainTitle}>Our Skills</Typography>
        </Box>
        <Box sx={skillsBox}>
          <Box sx={skillBox}>
            <Typography sx={skillTitle}>Figma</Typography>
            <img src={FigmaImg} alt="FigmaImg" />
            <Link to="/Figma">
              <MoreIcon sx={infoIcon} />
            </Link>
          </Box>
          <Box sx={skillBox}>
            <Typography sx={skillTitle}>UX Design</Typography>
            <img src={UX} alt="UX Design" />
            <Link to="/UxDesign">
              <MoreIcon sx={infoIcon} />
            </Link>
          </Box>
          <Box sx={skillBox}>
            <Typography sx={skillTitle}>JavaScript</Typography>
            <img src={JS} alt="JavaScript" />
            <Link to="/JavaScript">
              <MoreIcon sx={infoIcon} />
            </Link>
          </Box>
          <Box sx={skillBox}>
            <Typography sx={skillTitle}>React</Typography>
            <img src={ReactImg} alt="React" />
            <Link to="/ReactInfo">
              <MoreIcon sx={infoIcon} />
            </Link>
          </Box>
          <Box sx={skillBox}>
            <Typography sx={skillTitle}>nodeJS</Typography>
            <img src={node} alt="nodJS" />
            <Link to="/Node">
              <MoreIcon sx={infoIcon} />
            </Link>
          </Box>
          <Box sx={skillBox}>
            <Typography sx={skillTitle}>MongoDB</Typography>
            <img src={Mongo} alt="MongoDB" />
            <Link to="/Mongo">
              <MoreIcon sx={infoIcon} />
            </Link>
          </Box>
          {/* {skills.map((item, index) =>(
              <Box  sx={skillBox}>
                <Typography sx={skillTitle}>
                 {item.title}
                </Typography>
                <img src={item.img} alt={item.title} />
                <Link to='/item.id'>
                <MoreIcon sx={infoIcon} />
                </Link>
                
              </Box>
            ))} */}
        </Box>
      </Box>
      <Box className="mobileMainBox" sx={skillBoxMobile}>
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
                <Typography sx={mainTitleMobile}>Our Skills</Typography>
              </Box>
              <Box>
                <Box className="skill-info">
                  <h1>{skill.title}</h1>
                </Box>
                <Box className="skill-image">
                  <img src={skill.img} alt="" />
                </Box>

                <a href={skill.url} target="_blank" rel="noreferrer">
                  <Button className="demo-button">
                    <MoreIcon sx={infoIcon} />
                  </Button>

                </a>
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
  width:{ xs: '100%', md: '100%', lg: '100%', xl: '100%'},
  height: { xs: '525px', md: '400px ', lg: '525px', xl: '525px'},
  backgroundColor: '#EDE6E3',
}
const innerBox = {
  width: { xs: '96%', md: '96%', lg: '96%', xl: '96%'},
  height: { xs: '300px', md: '300px', lg: '475px', xl: '475px'},
  backgroundColor: '#F9F7F7',
  borderRadius: '2em',
  display: {xs: 'none', md: 'block', lg: 'block', xl: 'block'},
  maxWidth: '1500px',
}
const mainTitle = {
  textAlign: 'center',
  paddingTop: { xs: '.5em', md: '.5em', lg: '.5em', xl: '.5em'},
  fontSize: { xs: '2em', md: '3em', lg: '4em', xl: '4em'},
  fontWeight:'bolder',
}

const mainTitleMobile = {
  position: "absolute",
  top: `1em`,
  left: "50%",
  fontWeight: "bolder",
  transform: "translateX(-50%)",
  fontSize: { xs: "2em", md: "3em", lg: "4em", xl: "4em" },
};
const skillsBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: { xs: '', md: '', lg: '3em', xl: '3em'},
  fontWeight:'bolder',
  width: { xs: '95%', md: '95%', lg: '95%', xl: '95%'},
  margin: 'auto',
  paddingTop:  { xs: '', md: '1em', lg: '1em', xl: '1em'},
}

const skillBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
};
const skillTitle = {
  paddingBottom: { xs: '0.5em', md: '1em', lg: '.5em', xl: '.5em'},
  fontSize: { xs: '1em', md: '1em', lg: '0.5em', xl: '0.5em'},
}
const infoIcon = {
  position: 'absolute',
  bottom: {xs: '1.5em', md: '-1.5em', lg: '-1.5em', xl: '-1.5em'},
  right: { xs: '0em', md: '0em', lg: '0em', xl: '0em'},
  fill: '#843626',
  fontSize: { xs: '2em', md: '1.2em', lg: '.5em', xl: '.5em'},
  transform: 'rotate(180deg)',
  cursor: 'pointer',
}
const skillBoxMobile = {
  display: {xs: 'block', md: 'none', lg: 'none', xl: 'none'},
  width: { xs: '80%', md: '96%', lg: '96%', xl: '96%'},
}


const skills = [
  {
    id: '1',
    img:`${FigmaImg}`,
    title: 'Figma',
    url: '/Figma'
  },
  {
    id: "2",
    img: `${UX}`,
    title: 'UX Design',
    url: '/UxDesign'
  },
  {
    id: '3',
    img:` ${JS}`,
    title: 'JavaScript',
    url: '/JavaScript'
  },
  {
    id: "4",
    img: `${ReactImg}`,
    title: 'React',
    url: '/ReactInfo'

  },
  {
    id: "5",
    img: `${node}`,
    title: 'nodJS',
    url: '/Node'

  },
  {
    id: "6",
    img: `${Mongo}`,
    title: 'MongoDB',
    url: '/Mongo'

  },
];

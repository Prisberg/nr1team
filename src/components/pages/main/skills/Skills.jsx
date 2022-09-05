import React from 'react'
import { Box, Typography, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, EffectCoverflow } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./Skills.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//img 
import UX from '../../../../assets/images/ux.png'
import JS from  '../../../../assets/images/javascript.png'
import ReactImg from  '../../../../assets/images/react.png'
import node from  '../../../../assets/images/node.png'
import Mongo from  '../../../../assets/images/mongo.png'
import shape from  '../../../../assets/images/shape.png'
//mobile img
import UXM from '../../../../assets/images/MobileSkillsIcons/ux.png'
import JSM from  '../../../../assets/images/MobileSkillsIcons/java.png'
import ReactImgM from  '../../../../assets/images/MobileSkillsIcons/react.png'
import nodeM from  '../../../../assets/images/MobileSkillsIcons/node.png'
import MongoM from  '../../../../assets/images/MobileSkillsIcons/mongo.png'

AOS.init();
function Skills () {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
       <Box sx={mainBox} className="mainBox">
      <Box sx={innerBox}>
        <Box data-aos="fade-in"
             data-aos-duration="1000"
             className="textBox"
        >
        <Avatar alt="" src={shape} sx={shapeStyle}/>
          <Typography 
            className="mainText"
            data-aos="fade-in"       
            sx={mainTitle}>Our <br/> expertise</Typography>
        </Box>
        <Box sx={skillsBox}>
        {skills.map((skill) => (
            <Box 
              sx={skillBox} 
              key={skill.id} 
              >
              <Box  
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              >
                <img src={skill.img} alt="" />
              </Box>
             <Box sx={skillInfo} 
             data-aos="fade-left"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             >
             <Box>

                <Typography  sx={skillTitle}>
                  {skill.title}
                </Typography>
              </Box>
              <Box>
                <Typography  sx={skillDis}>
                  {skill.dis} 
                </Typography>
              </Box>
             </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="mobileMainBox" sx={skillBoxMobile}>
          <Box >
          <Avatar alt="" src={shape} sx={shapeStyleMobile}/>
            <Typography  sx={mainTitleMobile}>
            Our <br/> expertise
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
              {/* <Box>
                <Typography sx={mainTitleMobile}>A Full stack Team</Typography>
              </Box> */}
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

                {/* <a href={skill.url} target="_blank" rel="noreferrer">
                  <Button className="demo-button">
                    <MoreIcon sx={infoIcon} />
                  </Button>

                </a> */}
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
  height: { xs: '700px', md: '1220px ', lg: '1220px', xl: '1220px'},
  backgroundColor: '#001220',
  position: 'relative',
}
const innerBox = {
  display: {xs: 'none', md: 'block', lg: 'block', xl: 'block'},
  width: '100%',
}
const mainTitle = {
  fontSize: { xs: '2em', md: '3em', lg: '3em', xl: '3em'},
  fontWeight:'bolder',
  color: '#f1f1f1',
  position: "absolute",
  top: { xs: '0em', md: `2em`, lg: `2em`, xl: `2em`},
  right: { xs: '0em', md: "3.5em", lg: "3.5em", xl: "3.5em"},
  lineHeight: '50px',
  // textAlign: 'center',
}
const shapeStyle = {
  fontSize: { xs: '2em', md: '3em', lg: '4em', xl: '4em'},
  position: "absolute",
  top: { xs: '0em', md: `.5em`, lg: `.5em`, xl: `0em`},
  right: { xs: '0em', md: "3em", lg: "3em", xl: "2em"},
  width:  { xs: '250px', md: "250px", lg: "350px", xl: "300px"},
  height:  { xs: '250px', md: "250px", lg: "350px", xl: "300px"},
}

const mainTitleMobile = {
  position: "absolute",
  top: '4.5em',
  left: '2em',
  fontWeight: "bolder",
  fontSize: "1em",
  color: '#f1f1f1',
  zIndex: "9999",
  width: "100%",
};
const shapeStyleMobile = {
  position: "absolute",
  top: `1em`,
  left: '0em',
  width: "150px",
  height: "150px",
  zIndex: "99",
};
const skillsBox = {
  display: {xs: 'none', md: 'flex', lg: 'flex', xl: 'flex'},
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  width: '90%',
  marginTop: '4em',
  "& :nth-child(even)": {
    justifyContent: 'flex-end'
  },
  "& :nth-child(odd)": {
    paddingLeft: '.5em'
  }
}

const skillBox = {
  display: "flex",
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: "relative",
  height: "150px",
  marginBottom: "2em",
  width: '100%',
};

const skillInfo = {
  width:{ xs: '', md: '450px', lg: '550px', xl: '550px'},
  marginLeft: '2em',
  color: '#f1f1f1',
};
const skillTitle = {
  paddingBottom: { xs: '0.5em', md: '1em', lg: '.5em', xl: '.5em'},
  fontSize: { xs: '1em', md: '1em', lg: '1em', xl: '1em'},
  color: '#f1f1f1',
}
const skillDis = {
  color: '#f1f1f1',
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
    id: "2",
    img: `${UX}`,
    imgM: `${UXM}`,
    title: 'UX Design',
    url: '/UxDesign',
    dis: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. A turpis eget tincidunt ac, magna pellentesque feugiat sit. Enim ac euismod eget praesent dui nec tristique est dui. Mi risus morbi platea accumsan risus luctus in mauris, lorem. '
  },
  {
    id: '3',
    img:` ${JS}`,
    imgM:` ${JSM}`,
    title: 'JavaScript',
    url: '/JavaScript',
    dis: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. A turpis eget tincidunt ac, magna pellentesque feugiat sit. Enim ac euismod eget praesent dui nec tristique est dui. Mi risus morbi platea accumsan risus luctus in mauris, lorem. '
  },
  {
    id: "4",
    img: `${ReactImg}`,
    imgM: `${ReactImgM}`,
    title: 'React',
    url: '/ReactInfo',
    dis: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. A turpis eget tincidunt ac, magna pellentesque feugiat sit. Enim ac euismod eget praesent dui nec tristique est dui. Mi risus morbi platea accumsan risus luctus in mauris, lorem. '
  },
  {
    id: "5",
    img: `${node}`,
    imgM: `${nodeM}`,
    title: 'nodJS',
    url: '/Node',
    dis: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. A turpis eget tincidunt ac, magna pellentesque feugiat sit. Enim ac euismod eget praesent dui nec tristique est dui. Mi risus morbi platea accumsan risus luctus in mauris, lorem. '
  },
  {
    id: "6",
    img: `${Mongo}`,
    imgM: `${MongoM}`,
    title: 'MongoDB',
    url: '/Mongo',
    dis: 'Lorem  ipsum dolor sit amet, consectetur adipiscing elit. A turpis eget tincidunt ac, magna pellentesque feugiat sit. Enim ac euismod eget praesent dui nec tristique est dui. Mi risus morbi platea accumsan risus luctus in mauris, lorem. '
  },
];

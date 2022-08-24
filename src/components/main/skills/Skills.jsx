import React from 'react'
import { Box, Typography } from '@mui/material';
import FigmaImg from './Skill-imgs/figma.png'
import UX from './Skill-imgs/UX.png'
import JS from './Skill-imgs/JS.png'
import ReactImg from './Skill-imgs/React.png'
import node from './Skill-imgs/node.png'
import Mongo from './Skill-imgs/Mongo.png'

import MoreIcon from '@mui/icons-material/More';
import InfoIcon from '@mui/icons-material/Info';



function Skills () {
  return (
    <Box sx={mainBox}>
      <Box sx={innerBox} >
        <Box>
          <Typography sx={mainTitle}>
            Our Skills 
          </Typography>
        </Box>
        <Box sx={skillsBox}>
            {skills.map((item, index) =>(
              <Box  sx={skillBox} key={index}>
                <Typography sx={skillTitle}>
                 {item.title}
                </Typography>
                <img src={item.img} alt={item.title} />
                <MoreIcon sx={infoIcon} />
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Skills;


const mainBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width:{ xs: '100%', md: '100%', lg: '100%', xl: '100%'},
  height: { xs: '400px', md: '525px ', lg: '525px', xl: '525px'},
  backgroundColor: '#EDE6E3',
}
const innerBox = {
  width: { xs: '96%', md: '96%', lg: '96%', xl: '96%'},
  height: { xs: '300px', md: '430px', lg: '455px', xl: '475px'},
  backgroundColor: '#F9F7F7',
  borderRadius: '2em'
}
const mainTitle = {
  textAlign: 'center',
  paddingTop: { xs: '.5em', md: '', lg: '2em', xl: '.5em'},
  fontSize: { xs: '2em', md: '3em', lg: '4em', xl: '4em'},
  fontWeight:'bolder',
}




const skills = [
  {
    img:`${FigmaImg}`,
    title: 'Figma',
  
  },
  {
    img: `${UX}`,
    title: 'UX Design',
  },
  {
    img:` ${JS}`,
    title: 'JavaScript',
  },
  {
    img: `${ReactImg}`,
    title: 'React',
  },
  {
    img: `${node}`,
    title: 'nodJS',
  },
  {
    img: `${Mongo}`,
    title: 'MongoDB',
  },
  
];
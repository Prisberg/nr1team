import React from 'react'
import { Box, Typography } from '@mui/material';
import './skillInfo.css'
import volvo from "../../../../../assets/images/volvo.png";
import design from "../../../../../assets/images/design.jpg";
import apple from "../../../../../assets/images/apple.png";
import poc from "../../../../../assets/images/poc.png";

import headerImg from '../../../../../assets/images/skillsInfo.png'

const UxDesign = () => {
  return (
    <Box sx={mainBox}  className='main-Box'>

              <img src={headerImg} alt="" style={imgStyling} />

      <Box sx={innerBox}>
        <Box  >
        <Typography sx={mainTitle}>
          JavaScript
        </Typography>
        </Box>
        <Box sx={skillProjects}  className='skillProjects'>
          <Box sx={projectBox}  className='skillBox'>
          <img src={volvo} alt=""/>
          </Box>
          <Box sx={projectBox}  className='skillBox'>
          <img src={design} alt="" />
          </Box>
          <Box sx={projectBox}  className='skillBox'>
          <img src={apple} alt="" />
          </Box>
          <Box sx={projectBox}  className='skillBox'>
          <img src={poc} alt="" />
          </Box>
        </Box>
        <Box sx={skillInfo}>
          <Typography sx={skillInfoText}>
            Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. 
            JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites. 
            Client-side languages are those whose action takes place on the user's computer, 
            rather than on the server.
            JavaScript is versatile enough to be used for a variety of different applications, like software, hardware controls, and servers. JavaScript is most known for being a web-based language, because it's native to the web browser. The web browser can naturally understand the language, like how a native English speaker can naturally understand English.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
const mainBox = {
  width:{ xs: '100%', md: '100%', lg: '100%', xl: '100%'},
  height:{ xs: '100%', md: '1500px', llg: '1500px', xl: '1500px'},
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#f1f1f1',
  zIndex: '10'
}
const innerBox = {
  marginTop: { xs: '2em', md: '1em', lg: '1em', xl: '1em'},
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

}
const skillProjects = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
  width:{ xs: '375px', md: '800px', lg: '1000px', xl: '1300px'},
  flexWrap: 'wrap',
  marginTop: '2em',
  flexDirection: { xs: 'column', md: 'row', lg: 'row'},
  "@media (max-width: 320px)": {
    width: "310px",
  },
}
const  projectBox = {
 flex: '50%',
 marginTop: '2em',
 width:{ xs: '300px', md: '300px', lg: '300px', xl: '300px'},
 borderRadius: '2em',
}
const skillInfo = {
  width:{ xs: '360px', md: '800px', lg: '1000px', xl: '1300px'},
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: '3em',
  "@media (max-width: 320px)": {
    width: "300px",
  },
}
const mainTitle = {
  textAlign: { xs: 'center', md: 'left', lg: 'left', xl:'left'},
  fontSize: { xs: '2em', md: '2em', lg: '2em', xl: '4em'},
}
const skillInfoText = {
  fontSize: {xs: '1em', md: '1em', lg: '1.3em', xl: '1.3em'},
  paddingLeft: {xs: '20px', md: '0px', lg: '0px', xl: '0px'}
}

const imgStyling = {
  height: "550px",
  width: "100%",
  objectFit: "cover",
  position: "absolute",
  top: "0px",
  zIndex: "-1",
  "@media (max-width: 450px)": {
    height: "400px",
  },
  "@media (max-width: 360px)": {
    height: "600px",
  },
};
export default UxDesign
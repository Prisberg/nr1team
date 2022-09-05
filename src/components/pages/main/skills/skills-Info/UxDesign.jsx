import React from 'react'
import { Box, Typography } from '@mui/material';
import './skillInfo.css'
import skillTest from '../Skill-imgs/skillTest.png'
import headerImg from '../../../../../assets/images/skillsInfo.png'

const UxDesign = () => {
  return (
    <Box sx={mainBox}  className='main-Box'>
              <img src={headerImg} alt="" style={{width: '100%', objectFit:'cover', position: 'absolute', top: '5em', zIndex: '0' }} />

      <Box sx={innerBox}>
        <Box  >
        <Typography sx={mainTitle}>
          UxDesign
        </Typography>
        </Box>
        <Box sx={skillProjects}  className='skillProjects'>
          <Box sx={projectBox}  className='skillBox'>
          <img src={skillTest} alt=""/>
          </Box>
          <Box sx={projectBox}  className='skillBox'>
          <img src={skillTest} alt="" />
          </Box>
          <Box sx={projectBox}  className='skillBox'>
          <img src={skillTest} alt="" />
          </Box>
          <Box sx={projectBox}  className='skillBox'>
          <img src={skillTest} alt="" />
          </Box>
        </Box>
        <Box sx={skillInfo}>
        <Typography sx={skillInfoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nam hic blanditiis tenetur delectus voluptatibus facilis aliquam vitae corrupti modi saepe consequuntur, 
            accusamus ducimus, natus enim impedit, sit at cum. Qui nulla quidem aspernatur maiores tenetur temporibus magnam amet! Sint quibusdam corporis ab 
            exercitationem alias eaque aliquid porro error ullam sequi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nam hic blanditiis tenetur delectus voluptatibus facilis aliquam vitae corrupti modi saepe consequuntur, 
            accusamus ducimus, natus enim impedit, sit at cum. Qui nulla quidem aspernatur maiores tenetur temporibus magnam amet! Sint quibusdam corporis ab 
            exercitationem alias eaque aliquid porro error ullam sequi?
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
const mainBox = {
  width:{ xs: '100%', md: '100%', lg: '100%', xl: '100%'},
  height:{ xs: '100%', md: '100%', llg: '100%', xl: '1300px'},
  backgroundColor: '#001220',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#f1f1f1'
}
const innerBox = {
  width:{ xs: '80%', md: '100%', lg: '1226px', xl: '70%'},
  height:{ xs: '80%', md: '100%', lg: '100%', xl: '1150px'},
  padding: '2em',
  marginTop: { xs: '2em', md: '0', lg: '0', xl: '15em'},
  paddingLeft: { xs: '0em', md: '15em', lg: '15em', xl: '15em'},
  borderRadius: '2em',
  zIndex: '5'
}
const skillProjects = {
  display: 'flex',
  alignItems:{ xs: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start'},
  justifyContent: 'center',
  width:{ xs: '380px', s: '380px', md: '500px', lg: '1226px', xl: '1226px'},
  flexWrap: { xs: 'no-wrap', md: 'wrap', lg: 'wrap', xl: 'wrap'},
  marginTop: '2em',
  flexDirection: { xs: 'column', md: 'row', lg: 'row'}
}
const  projectBox = {
 flex: '50%',
 marginTop: '2em',
 width:{ xs: '200px', md: '300px', lg: '300px', xl: '300px'},
 borderRadius: '2em',
}
const skillInfo = {
  width:{ xs: '100%', md: '500px', lg: '500px', xl: '970px'},
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '3em',
}
const mainTitle = {
  textAlign: { xs: 'center', md: 'left', lg: 'left', xl:'left'},
  fontSize: { xs: '2em', md: '2em', lg: '2em', xl: '4em'},
}
const skillInfoText = {
  fontSize: '1.3em',
  paddingLeft: {xs: '20px', md: '0px', lg: '0px', xl: '0px'}
}
export default UxDesign
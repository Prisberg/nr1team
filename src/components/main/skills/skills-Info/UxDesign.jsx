import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import './skillInfo.css'
import skillTest from '../Skill-imgs/skillTest.png'

const UxDesign = () => {
  return (
    <Box sx={mainBox}>
      <Box sx={innerBox}>
        <Box  >
        <Typography sx={mainTitle}>
          UxDesign
        </Typography>
        </Box>
        <Box sx={skillProjects}>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nam hic blanditiis tenetur delectus voluptatibus facilis aliquam vitae corrupti modi saepe consequuntur, 
            accusamus ducimus, natus enim impedit, sit at cum. Qui nulla quidem aspernatur maiores tenetur temporibus magnam amet! Sint quibusdam corporis ab 
            exercitationem alias eaque aliquid porro error ullam sequi?
          </p>
        </Box>
      </Box>
    </Box>
  )
}
const mainBox = {
  width:{ xs: '100%', md: '100%', lg: '100%', xl: '100%'},
  height:{ xs: '100%', md: '100%', llg: '100%', xl: '1500px'},
  backgroundColor: '#EDE6E3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const innerBox = {
  width:{ xs: '100%', md: '100%', lg: '1226px', xl: '70%'},
  height:{ xs: '100%', md: '100%', llg: '100%', xl: '1350px'},
  padding: '2em',
  backgroundColor: '#F9F7F7',
  paddingLeft: '15em',
  // borderRadius: '2em',
}
const skillProjects = {
  width:{ xs: '100%', md: '500px', lg: '500px', xl: '1226px'},
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: '2em',
}
const  projectBox = {
 flex: '50%',
 marginTop: '2em',
 width: '300px',
}
const skillInfo = {
  
}
const mainTitle = {
  textAlign: 'left',
  fontSize: { xs: '2em', md: '2em', lg: '2em', xl: '4em'},
}
export default UxDesign
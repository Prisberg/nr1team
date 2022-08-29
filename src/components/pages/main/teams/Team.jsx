import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, useMediaQuery, IconButton, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import { team } from '../../../../assets/teamData';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";



function Team() {
  const [open, setOpen] = useState(false);
  const [selectedDev, setSelectedDev] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedDev({})
  }

  useEffect(() => {
    if (selectedDev.name) {
      console.log(selectedDev);
      handleOpen();
    }
  }, [selectedDev])

  function handleClick(person) {
    let dev = team.find(item => item.name === person)
    setSelectedDev(dev);
  }

  return (
    <Box sx={teamBox}>
      <Box>
        <Typography sx={header} variant='h3'>Our Team</Typography>
      </Box>
      <Box sx={allPersonsBox}>
        {team.map(person => (
          <Box
            key={person.name}
            sx={singlePersonBox}>
            <Box
              onClick={() => handleClick(person.name)}
              component="img"
              sx={avatarStyle}
              alt={person.name}
              src={person.image} />
            <Typography variant='h6'>{person.name}</Typography>
          </Box>
        ))}
        <Dialog
          open={open}
          scroll="body"
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title">
          <IconButton
            sx={closeButtonStyle}
            onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <DialogContent sx={dialogContentStyle}>
            <Box sx={selectedDevImage} component="img" src={selectedDev.image} />
            <DialogContentText>
              {selectedDev.about}
            </DialogContentText>
            <DialogActions>
              <Link target="_blank" href={selectedDev.linkedin}>
                <LinkedInIcon sx={linkIconStyle} />
              </Link>
              <Link target="_blank" href={selectedDev.github}>
                <GitHubIcon sx={linkIconStyle} />
              </Link>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Box>
    </Box >
  )
}

export default Team;

const header = {
  fontSize: { xs: '36px', sm: '64px', md: '100px' },
  fontWeight: 'bold',
  color: '#1F271B'
}

const teamBox = {
  display: 'flex',
  padding: '50px 0',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '3rem',
  background: '#EDE6E3'
}

const allPersonsBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: { xs: '1rem', md: '3rem' },
  flexWrap: 'wrap'
}

const closeButtonStyle = {
  right: '0',
  position: 'absolute',
  padding: '1rem',
  color: '#1F271B'
}

const singlePersonBox = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
}

const avatarStyle = {
  background: '#1F271B',
  border: 'solid 5px #F06449',
  width: { xs: '150px', md: '200px' },
  height: { xs: '150px', md: '200px' },
  objectFit: 'cover',
  borderRadius: '50%',
  textAlign: 'center',
  color: 'white',
  '&:hover': {
    cursor: 'pointer',
  },
}

const linkIconStyle = {
  color: '#F06449',
  height: "40px",
  width: "40px"
}

const dialogContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.5rem'
}

const selectedDevImage = {
  objectFit: 'cover',
  width: { xs: '230px', sm: '350px', md: '450px' },
  height: { xs: '230px', sm: '350px', md: '450px' },
}
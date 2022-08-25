import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { team } from '../../../assets/teamData';


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
            sx={singlePersonBox}
            onClick={() => handleClick(person.name)}>
            <Box
              component="img"
              sx={avatarStyle}
              alt={person.name}
              src={person.image} />
            <Typography variant='h5'>{person.name}</Typography>
          </Box>
        ))}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {selectedDev.name}
          </DialogTitle>
          <DialogContent>
            <Box sx={selectedDevImage} component="img" src={selectedDev.image} />
            <DialogContentText>
              {selectedDev.about}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus>
              Link
            </Button>
            <Button autoFocus>
              Link
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box >
  )
}

export default Team;

const header = {
  fontSize: '100px',
  fontWeight: 'bold'
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
  gap: '3rem',
  flexWrap: 'wrap'
}

const singlePersonBox = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem'
}

const avatarStyle = {
  background: '#1F271B',
  border: 'solid 5px #F06449',
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '50%',
  textAlign: 'center',
  color: 'white'
}

const selectedDevImage = {
  objectFit: 'cover',
  width: '400px',
  height: '400px',
}
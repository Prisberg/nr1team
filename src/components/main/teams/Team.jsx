import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { team } from '../../../assets/teamData';

function Team() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '3rem' }}>
      <Box>
        <Typography variant='h3'>Our Team</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '3rem' }}>
        {team.map(person => (
          <Box key={person.name} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap:'1rem' }} >
            <Avatar sx={avatarStyle} alt={person.name} src={require(person.image)} />
            <Typography variant='h5'>{person.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box >
  )
}

export default Team;

const avatarStyle = {
  width: '100px',
  height: '100px'
}
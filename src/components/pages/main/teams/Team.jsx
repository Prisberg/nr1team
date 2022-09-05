import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ReactComponent as InfoIcon } from "../../../../assets/images/infoIcon.svg";
import { team } from "../../../../assets/teamData";

function Team() {
  const [open, setOpen] = useState(false);
  const [selectedDev, setSelectedDev] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedDev({}), 100);
  };

  useEffect(() => {
    if (selectedDev.name) {
      handleOpen();
    }
  }, [selectedDev]);

  function handleClick(person) {
    let dev = team.find((item) => item.name === person);
    setSelectedDev(dev);
  }

  return (
    <Box id="team" sx={teamBox}>
      <Box sx={allPersonsBox}>
        {team.map((person) => (
          <Box key={person.name} sx={singlePersonBox}>
            <Box sx={avatarShield}>
              <Box
                onClick={() => handleClick(person.name)}
                component="img"
                sx={avatarImage}
                alt={person.name}
                src={person.image}
              />
              <IconButton
                onClick={() => handleClick(person.name)}
                style={infoButton}
              >
                <InfoIcon />
              </IconButton>
            </Box>
            <Typography sx={nameTagStyle} variant="h5">
              {person.name}
            </Typography>
          </Box>
        ))}
        <Dialog
          open={open}
          scroll="body"
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <IconButton sx={closeButtonStyle} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <DialogContent sx={dialogContentStyle}>
            <Box
              sx={selectedDevImage}
              component="img"
              src={selectedDev.image}
            />
            <DialogContentText>{selectedDev.about}</DialogContentText>
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
    </Box>
  );
}

export default Team;

const infoButton = {
  position: "relative",
  left: "70%",
  bottom: "23%",
};

const nameTagStyle = {
  fontFamily: "Montserrat",
  color: "#FFFFFF",
};

const teamBox = {
  userSelect: "none",
  display: "flex",
  padding: "5rem 0",
  alignItems: "center",
  flexDirection: "column",
  gap: "3rem",
  background: "#001220",
};

const allPersonsBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: { xs: "1rem", sm: "2rem", md: "4rem" },
  flexWrap: "wrap",
};

const closeButtonStyle = {
  right: "0",
  position: "absolute",
  padding: "1rem",
  color: "#1F271B",
};

const singlePersonBox = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
};

const avatarShield = {
  border: "solid 10px #C62368",
  borderRadius: "50%",
  width: { xs: "150px", md: "200px" },
  height: { xs: "180px", md: "230px" },
};

const avatarImage = {
  borderRadius: "50%",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.64);",
  objectFit: "cover",
  width: { xs: "150px", md: "200px" },
  height: { xs: "180px", md: "230px" },
  background: "#1F271B",
  textAlign: "center",
  color: "white",
  "&:hover": {
    cursor: "pointer",
  },
};

const linkIconStyle = {
  color: "#C62368",
  height: "40px",
  width: "40px",
};

const dialogContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.5rem",
};

const selectedDevImage = {
  pointerEvents: "none",
  userSelect: "none",
  objectFit: "cover",
  width: { xs: "230px", sm: "350px", md: "450px" },
  height: { xs: "230px", sm: "350px", md: "450px" },
};

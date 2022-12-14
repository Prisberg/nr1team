import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useLocalStorage from "../../../utils/Hook";
import { useNavigate } from "react-router-dom";
import greetingImg from "../../../assets/images/greeting-background.svg";
import { usePortfolioContext } from "../../../utils/PortfolioContext";

function Register() {
    const { extractLocalStorage, email } = usePortfolioContext();
    const navigate = useNavigate();

    const [_email, setEmail] = useLocalStorage("email", "");
    const [_fName, setFName] = useLocalStorage("fName", "");
    const [_lName, setLName] = useLocalStorage("lName", "");
    const [_password, setPassword] = useLocalStorage("password", "");

    const [stateEmail, setStateEmail] = useState("");
    const [stateFName, setStateFName] = useState("");
    const [stateLName, setStateLName] = useState("");
    const [statePassword, setStatePassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setEmail(stateEmail);
        setFName(stateFName);
        setLName(stateLName);
        setPassword(statePassword);

        extractLocalStorage();
        navigate('/login')
    }

    return (
        <Box sx={alignBox}>
            <Box component="img" src={greetingImg} sx={imgStyling}></Box>
            <form
                style={formStyle}
                onSubmit={(e) => handleSubmit(e)}>
                <Box sx={formMainBox}>
                    <Typography sx={header} variant='h3'>Create Account</Typography>
                    <Box sx={formSecondBox}>
                        <TextField
                            onChange={(e) => setStateEmail(e.target.value)}
                            sx={textInputStyle}
                            name="email"
                            label="Email"
                            value={stateEmail}
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(e) => setStateFName(e.target.value)}
                            sx={textInputStyle}
                            name="fname"
                            label="First name"
                            value={stateFName}
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(e) => setStateLName(e.target.value)}
                            sx={textInputStyle}
                            name="lname"
                            label="Last name"
                            value={stateLName}
                            fullWidth
                            required
                        />
                        <TextField
                            onChange={(e) => setStatePassword(e.target.value)}
                            sx={textInputStyle}
                            name="selPassword"
                            label="Select password"
                            value={statePassword}
                            fullWidth
                            autoComplete="off"
                            required
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={buttonStyle}
                        >
                            Register
                        </Button>
                        <Typography color='white'>Already have an account? <Link href="/login">Log in to your account.</Link></Typography>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default Register;

const alignBox = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}

const buttonStyle = {
    background: '#C62368',
    fontSize: "1.2rem",
    "&:hover": {
        background: '#4C0B26',
    },
}

const header = {
    fontSize: { xs: '36px', sm: '48px' },
    fontWeight: 'bold',
    fontFamily: 'montserrat',
    color: 'white'
}

const textInputStyle = {
    background: 'white',
    borderRadius: '0.5rem'
}

const imgStyling = {
    height: "790px",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0px",
    zIndex: "-1",
    "@media (max-width: 450px)": {
        height: "500px",
    },
    "@media (max-width: 360px)": {
        height: "800px",
    },
};

const formStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1920px',
    margin: '0 auto'
}

const formMainBox = {
    display: 'flex',
    padding: '50px 0',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3rem',
}

const formSecondBox = {
    width: { xs: '300px', lg: 'max-content' },
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3rem',
}
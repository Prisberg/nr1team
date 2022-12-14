import { Alert, Box, Button, Link, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePortfolioContext } from "../../../utils/PortfolioContext";
import greetingImg from "../../../assets/images/greeting-background.svg";


function Login() {
    const { email, password, extractLocalStorage } = usePortfolioContext();
    const [emailState, setStateEmail] = useState("");
    const [passwordState, setStatePassword] = useState("");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        //compare input to email and password
        if (email === emailState && password === passwordState) {
            window.localStorage.setItem('loggedIn', 'true')
            extractLocalStorage();
            navigate("/");
        } else {
            //display confirmation of failed login
            setOpen(true)
        }
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <Box sx={alignBox}>
            <Box component="img" src={greetingImg} sx={imgStyling} />
            <form
                style={formStyle}
                onSubmit={(e) => handleSubmit(e)}>
                <Box sx={formMainBox}>
                    <Typography sx={header} variant='h3'>Log In</Typography>
                    <Box sx={formSecondBox}>
                        <TextField
                            variant="filled"
                            onChange={(e) => setStateEmail(e.target.value)}
                            value={emailState}
                            sx={textInputStyle}
                            name="email"
                            label="Email"
                            fullWidth
                            required
                        />
                        <TextField
                            variant="filled"
                            onChange={(e) => setStatePassword(e.target.value)}
                            value={passwordState}
                            sx={textInputStyle}
                            name="password"
                            label="Password"
                            autoComplete="off"
                            fullWidth
                            required
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={buttonStyle}
                        >
                            Log In
                        </Button>
                        <Typography color="white">Don't have an account? <Link href="/register">Create account.</Link></Typography>
                    </Box>
                </Box>
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Wrong email or password
                    </Alert>
                </Snackbar>
            </form>
        </Box>
    )
}

export default Login;

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
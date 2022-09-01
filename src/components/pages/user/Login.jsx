import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePortfolioContext } from "../../../utils/PortfolioContext";

function Login() {
    const { email, password, extractLocalStorage } = usePortfolioContext();
    const [emailState, setStateEmail] = useState("");
    const [passwordState, setStatePassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email + ' ' + password);
        console.log(emailState + ' ' + passwordState);

        //compare input to email and password
        if (email === emailState && password === passwordState) {
            console.log('logged in success');
            window.localStorage.setItem('loggedIn','true')
            extractLocalStorage();
            navigate("/");
        } else {
            console.log("who the f r u");
            //display confirmation of failed login
        }
    }

    return (
        <form
            style={loginForm}
            onSubmit={(e) => handleSubmit(e)}>
            <Box sx={loginMainBox}>
                <Typography sx={header} variant='h3'>Log In</Typography>
                <Box sx={loginSecondBox}>
                    <TextField
                        onChange={(e) => setStateEmail(e.target.value)}
                        value={emailState}
                        name="email"
                        label="Email"
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={(e) => setStatePassword(e.target.value)}
                        value={passwordState}
                        name="password"
                        label="Password"
                        autoComplete="off"
                        fullWidth
                        required
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Log In
                    </Button>
                    <Typography>Don't have an account? <Link href="/register">Create account.</Link></Typography>
                </Box>
            </Box>
        </form>
    )
}

export default Login;

const header = {
    fontSize: { xs: '36px', sm: '64px', md: '100px' },
    fontWeight: 'bold',
    color: '#1F271B'
}

const loginForm = {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
}

const loginMainBox = {
    display: 'flex',
    padding: '50px 0',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3rem',
}

const loginSecondBox = {
    width: { xs: '300px', lg: 'max-content' },
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3rem',
}
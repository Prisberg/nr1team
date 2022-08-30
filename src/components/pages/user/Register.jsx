import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useLocalStorage from "../../../utils/Hook";
import { useNavigate } from "react-router-dom";
import { usePortfolioContext } from "../../../utils/PortfolioContext";

function Register() {
    const { extractLocalStorage } = usePortfolioContext();
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
        console.log('submitted');
        setEmail(stateEmail);
        setFName(stateFName);
        setLName(stateLName);
        setPassword(statePassword);

        extractLocalStorage();
        navigate('/login')
        
        //display created account confirmation
    }

    return (
        <form
            style={registerForm}
            onSubmit={(e) => handleSubmit(e)}>
            <Box sx={registerMainBox}>
                <Typography sx={header} variant='h3'>Create Account</Typography>
                <Box sx={registerSecondBox}>
                    <TextField
                        onChange={(e) => setStateEmail(e.target.value)}
                        name="email"
                        label="Email"
                        value={stateEmail}
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={(e) => setStateFName(e.target.value)}
                        name="fname"
                        label="First name"
                        value={stateFName}
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={(e) => setStateLName(e.target.value)}
                        name="lname"
                        label="Last name"
                        value={stateLName}
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={(e) => setStatePassword(e.target.value)}
                        name="selPassword"
                        label="Select password"
                        value={statePassword}
                        fullWidth
                        required
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Register
                    </Button>
                    <Typography>Already have an account? <Link href="/login">Log in to your account.</Link></Typography>
                </Box>
            </Box>
        </form>
    )
}

export default Register;

const header = {
    fontSize: { xs: '36px', sm: '64px', md: '100px' },
    fontWeight: 'bold',
    color: '#1F271B'
}

const registerForm = {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
}

const registerMainBox = {
    display: 'flex',
    padding: '50px 0',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3rem',
}

const registerSecondBox = {
    width: { xs: '300px', lg: 'max-content' },
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3rem',
}
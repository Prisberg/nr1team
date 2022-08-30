import { Box, Button, Link, TextField, Typography } from "@mui/material";

function Register() {

    return (
        <form
            style={registerForm}
            autoComplete="off"
            /* onSubmit={handleSubmit} */>
            <Box sx={registerMainBox}>
                <Typography sx={header} variant='h3'>Create Account</Typography>
                <Box sx={registerSecondBox}>
                    <TextField
                        /* onChange={handleInputValue} */
                        /*   onBlur={handleInputValue} */
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete
                        required
                    />
                    <TextField
                        /* onChange={handleInputValue} */
                        /*   onBlur={handleInputValue} */
                        name="fname"
                        label="First name"
                        fullWidth
                        autoComplete
                        required
                    />
                    <TextField
                        /* onChange={handleInputValue} */
                        /*   onBlur={handleInputValue} */
                        name="lname"
                        label="Last name"
                        fullWidth
                        autoComplete
                        required
                    />
                    <TextField
                        /* onChange={handleInputValue} */
                        /*   onBlur={handleInputValue} */
                        name="selPassword"
                        label="Select password"
                        fullWidth
                        autoComplete
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
    width: {xs: '300px', lg:'max-content'},
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3rem',
}
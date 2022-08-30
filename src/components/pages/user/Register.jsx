import { Box, Button, Link, TextField, Typography } from "@mui/material";

function Register() {

    return (
        <form
            style={registerForm}
            autoComplete="off"
            /* onSubmit={handleSubmit} */>
            <Box sx={registerMainBox}>
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
        </form>
    )
}

export default Register;

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
import { Box, Button, Link, TextField, Typography } from "@mui/material";

function Login() {

    return (
        <form
            style={loginForm}
            autoComplete="off"
            /* onSubmit={handleSubmit} */>
            <Box sx={loginMainBox}>
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
                    name="Password"
                    label="Password"
                    fullWidth
                    autoComplete
                    required
                />
                <Button
                    variant="contained"
                    type="submit"
                >
                    Log in
                </Button>
                <Typography>Don't have an account yet? <Link href="/register">Create account.</Link></Typography>
            </Box>
        </form>
    )
}

export default Login;

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
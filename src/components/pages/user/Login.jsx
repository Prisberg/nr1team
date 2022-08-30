import { Box, Button, Link, TextField, Typography } from "@mui/material";

function Login() {

    return (
        <form
            style={loginForm}
            autoComplete="off"
            /* onSubmit={handleSubmit} */>
            <Box sx={loginMainBox}>
                <Typography sx={header} variant='h3'>Log in</Typography>
                <Box sx={loginSecondBox}>
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
                        name="password"
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

import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Avatar, Stack } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Register = () => {

    const [login, setLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginToggle = () => {
        setLogin((prev) => !prev);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        console.log(data);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password,
        }
        console.log(data);
    }


    return (
        <Stack sx={{
            backgroundImage: "url('/register-bg.webp')",  // Ensure the file path and extension are correct
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Container
                component="main"
                maxWidth="xs"

            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 5,
                        padding: 5,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                        borderRadius: 2,
                        backgroundColor: 'white'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {login ? "Login with email" : "Register with Email"}
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                        {login ? null : (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        )}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password" 
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            onClick={ login ? handleLogin : handleRegister }
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.3, backgroundColor: 'primary.main' }}
                        >
                            {login ? "Login" : "Sign Up"}
                        </Button>
                        <Typography textAlign={"center"}>
                            {login ? "Have no an account ? " : "Already have an account ?"}
                            <Button sx={{ fontWeight: "bold", outline: "none", padding: 0 }} onClick={loginToggle} >{login ? "Sign Up" : "Login"}</Button>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Stack>

    );
};

export default Register;

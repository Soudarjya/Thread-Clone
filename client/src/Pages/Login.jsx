// src/Pages/Login.js
import React from 'react';
import { Container, Box, TextField, Button, Typography, Avatar, Stack } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
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
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 8,
                        padding: 5,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: 2,
                        backgroundColor: 'white',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login with Email
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.5, backgroundColor: 'primary.main' }}
                        >
                            Log In
                        </Button>
                        <Typography textAlign={"center"}>Have no account ?<Button sx={{fontWeight: "bold", outline:"none", padding: 0}} padding>Register</Button></Typography>
                    </Box>
                </Box>
            </Container>
        </Stack>
    );
};

export default Login;

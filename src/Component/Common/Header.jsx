import React from 'react';
import { Grid, Stack, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import { HiMenuAlt3 } from "react-icons/hi";

function Header() {

    const _700 = useMediaQuery("(min-width: 700px)");

    return (
        <>
            {_700 ? (
                <Stack
                    height={52}
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    position="sticky"
                    top={0}
                    py={2}
                    px={3}
                    sx={{
                        bgcolor: "white", // Background color added for visibility
                        zIndex: 10,
                    }}
                >
                    <img src="/Threads-logo-white-bg.png" alt="logo" height={40} width={70} />
                    <Stack
                        justifyContent="center"
                        zIndex={2}
                        height={96}
                        sx={{
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                        }}
                    >
                        <Navbar />
                    </Stack>
                    <HiMenuAlt3 fontSize={30} className="image-icon" />
                </Stack>
            ) : (
                <>
                    <Stack
                        position="fixed"
                        bottom={0}
                        alignItems={"center"}
                        justifyContent="center"
                        width={"100%"}
                        height={50}
                        left={0}
                        bgcolor="aliceblue"
                        zIndex={2}
                    >
                        <Navbar />
                    </Stack>

                    {/* Sticky header */}
                    <Grid
                        container
                        height={60}
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            position: "sticky",
                            top: 0,
                            bgcolor: "white",
                            zIndex: 10,
                            borderBottom: "1px solid #ddd",
                            padding: "0 16px", // Optional: Adds some padding for better spacing
                        }}
                    >
                        {/* Logo */}
                        <Grid item xs={6} md={4}>
                            <img
                                src="/Threads-logo-white-bg.png"
                                alt="logo"
                                width={60}
                                height={35}
                            />
                        </Grid>

                        {/* Menu icon */}
                        <Grid item>
                            <HiMenuAlt3 fontSize={30} className="image-icon" />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
}

export default Header;

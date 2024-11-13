import React from 'react';
import { Grid, Stack, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import { HiMenuAlt3 } from "react-icons/hi";

function Header() {

    const _700 = useMediaQuery("(min-width : 700px)");

    return (
        <>
            {_700 ? <Stack height={52} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} position={"sticky"} top={0} py={5}>
                <img src="/Threads-logo-white-bg.png" alt="logo" height={40} width={60} />
                <Stack
                    justifyContent="center"
                    bgcolor="lavender"
                    zIndex={2}
                    height={96}
                    px={5}
                    sx={{
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                    }}
                >
                    <Navbar />
                </Stack>
                <HiMenuAlt3 fontSize={30} className='image-icon' />
            </Stack> : (<>
                <Stack position={"fixed"} bottom={0} justifyContent={"center"} width={"100%"} height={52} p={1} bgcolor={"aliceblue"} zIndex={2}>
                <Navbar />
                </Stack>
                <Grid container  height={60} justifyContent={"space-between"} alignItems={"center"} p={1}>
                    <Grid item xs={6} md={4}>
                        <img src="/Threads-logo-white-bg.png" alt="logo" width={60} height={35} color={"gray"}/>
                    </Grid>
                    <HiMenuAlt3 fontSize={30} className='image-icon' />
                </Grid>
            </>)}
        </>
    )
}

export default Header;

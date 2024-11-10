import React from 'react';
import { Stack } from '@mui/material';
import Navbar from './Navbar';
import { HiMenuAlt3 } from "react-icons/hi";

function Header() {
    return (
        <>
            <Stack height={52} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} position={"sticky"} top={0} py={1}>
                <img src="Threads-logo-white-bg.png" alt="logo" height={40} width={60} />
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
            </Stack>
        </>
    )
}

export default Header;

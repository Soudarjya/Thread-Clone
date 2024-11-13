import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../Component/Common/Header';


const ProtectedLayout = () => {

    const _700 =useMediaQuery("(min-width: 700px)");

    return (

        <Stack maxWidth={_700 ? "800px" : "90%"} minHeight={"100%"} mx={"auto"} flexDirection={"column"} overflow={"hidden"}>
            <Header />
            <Outlet />
        </Stack>

    )
}

export default ProtectedLayout;

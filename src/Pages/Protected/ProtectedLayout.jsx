import React from 'react';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../Component/Common/Header';


const ProtectedLayout = () => {
    return (

        <Stack maxWidth={"800px"} minHeight={"100%"} mx={"auto"} flexDirection={"column"} overflow={"hidden"}>
            <Header />
            <Outlet />
        </Stack>

    )
}

export default ProtectedLayout;

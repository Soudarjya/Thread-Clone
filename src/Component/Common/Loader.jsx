import React from 'react';
import {Stack , CircularProgress, colors } from '@mui/material';

function Loader() {
  return (
    <Stack minHeight={"50vh"} height={"100%"} width={"100%"} flexDirection={"row"} alignItems={"center"} justifyItems={"center"} my={"5"}>
        <CircularProgress color="success" />
    </Stack>
  )
}

export default Loader

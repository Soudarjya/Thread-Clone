import React from 'react';
import {Stack , CircularProgress, colors } from '@mui/material';

function Loader() {
  return (
    <Stack minHeight={"50vh"} height={"100%"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <CircularProgress color="success" />
    </Stack>
  )
}

export default Loader

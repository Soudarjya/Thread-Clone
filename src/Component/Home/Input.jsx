import { Avatar, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function Input() {
    const isSmallScreen = useMediaQuery("(max-width: 300px)");

    return (
        <>
            <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} width={"90%"} height={28} py={isSmallScreen ? 2 : 4} px={1} borderBottom={"2px solid black"} my={6} mx={"auto"}>
                <Stack flexDirection={"row"}  alignItems={"center"} gap={2}>
                    <Avatar src='' alt='Aj' />
                    <Typography color={"GrayText"}>Start a thread...</Typography>
                </Stack>
                <Button sx={{
                    bgcolor: "blue",
                    color: "aliceblue",
                    ":hover":{
                        bgcolor : "black",
                        cursor: "pointer"
                    }
                }}>Post</Button>
            </Stack>
        </>
    )
}

export default Input

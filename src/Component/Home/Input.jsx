import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'

function Input() {
    return (
        <>
            <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} width={"70%"} height={28} p={4} borderBottom={"2px solid black"} my={5} mx={"auto"}>
                <Stack flexDirection={"row"}  alignItems={"center"} gap={2}>
                    <Avatar src='' alt='Aj' />
                    <Typography color={"GrayText"}>Start a thread...</Typography>
                </Stack>
                <Button sx={{
                    bgcolor: "gray",
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

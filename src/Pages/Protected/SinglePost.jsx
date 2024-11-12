import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import Post from '../../Component/Home/Post'
import Comments from '../../Component/Home/Post/Comments'
import { RiSendPlaneFill } from "react-icons/ri";

function SinglePost() {
    return (
        <>
            <Stack flexDirection={"column"} my={5} gap={2} py={2}>
                <Post />
                <Stack flexDirection={"column"} gap={2} width={"80%"} mx={"auto"}>
                    <Comments />
                    <Comments />
                </Stack>
                <Stack flexDirection={"row"} width={"80%"} gap={1} alignItems={"center"} mx={"auto"} >
                    <TextField variant='outlined' autoFocus placeholder='Comment here...' sx={{
                        width: "90%",
                        mx: "auto",
                        p: 1,
                    }} />
                    <Button variant="contained" color="primary" sx={{
                        height: 50,
                        px: 3
                    }}>< RiSendPlaneFill size={26}/></Button>
                </Stack>
            </Stack>
        </>
    )
}

export default SinglePost

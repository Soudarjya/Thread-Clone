import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { BsThreeDots } from "react-icons/bs";
import PostOne from '../../Component/Home/Post/PostOne';
import PostTwo from '../../Component/Home/Post/PostTwo';


function Post() {
    return (
        <>
            <Box flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} borderBottom={"3px solid gray"} minHeight={"auto"} p={3}  mx={"auto"} width={"95%"} boxShadow={"1px 1px 5px gray"} sx={{
                ":hover":{
                    boxShadow: "5px 5px 10px gray"
                }
            }}>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <Stack flexDirection={"row"} gap={2}>
                        <PostOne />
                        <PostTwo />
                    </Stack>
                    <Stack flexDirection={"row"} fontSize={"1rem"} gap={2} height={15} alignItems={"center"}>
                        <Typography variant='caption' color={"GrayText"} fontSize={"1rem"} position={"relative"} top={0}>24h ago</Typography>
                        <BsThreeDots/>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default Post

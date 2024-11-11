import React from 'react'
import { Stack, Typography } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { BiComment } from "react-icons/bi";

function PostTwo() {
    return (
        <>
            <Stack flexDirection={"column"} justifyContent={"space-between"} gap={1}>
                <Stack >
                    <Stack flexDirection={"column"} >
                        <Typography variant="h5" fontWeight={"bold"} fontSize={"1.2rem"}>Abhishek</Typography>
                        <Typography variant="h6" color={"GrayText"} fontSize={"0.8rem"}>Dev</Typography>
                    </Stack>
                    <img src="/error-bg.png" alt="" loading='lazy' width={"400px"} height={"auto"} />
                </Stack>
                <Stack flexDirection={"column"} gap={1}>
                    <Stack flexDirection={"row"} gap={2} fontSize={28}>
                        <FaRegHeart />
                        <BiComment />
                        <FaRetweet />
                        <LuSend />
                    </Stack>
                    <Stack flexDirection={"row"} gap={2} position={"relative"} left={4} top={-3}>
                        <Typography>2 Likes</Typography>
                        <Typography>1 Comments </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default PostTwo;

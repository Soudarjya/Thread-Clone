import React from 'react'
import { Stack } from '@mui/material'
import Comments from '../../../Component/Home/Post/Comments';

function Replies() {
    return (
        <>
            <Stack flexDirection={"column"} gap={1} width={"800px"} mx={"auto"}>
                <Comments />
                <Comments />
            </Stack>
        </>
    )
}

export default Replies;

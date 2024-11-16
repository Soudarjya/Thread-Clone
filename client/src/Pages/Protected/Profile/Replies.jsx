import React from 'react'
import { Stack, useMediaQuery } from '@mui/material'
import Comments from '../../../Component/Home/Post/Comments';

function Replies() {

    const _700 = useMediaQuery("(min-width : 700px)");

    return (
        <>
            <Stack flexDirection={"column"} gap={1} width={_700 ? "800px" : "90%"} mx={"auto"}>
                <Comments />
                <Comments />
            </Stack>
        </>
    )
}

export default Replies;

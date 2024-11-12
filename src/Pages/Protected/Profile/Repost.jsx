import React from 'react'
import { Stack } from '@mui/material'
import Post from '../../../Component/Home/Post'

function Repost() {
  return (
    <>
      <Stack flexDirection={"column"} gap={2} mb={10} width={"800px"} mx={"auto"}>
        <Post />
        <Post />
      </Stack>
    </>
  )
}

export default Repost

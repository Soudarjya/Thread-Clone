import { Stack } from '@mui/material'
import React from 'react'
import Input from '../../Component/Home/Input';
import Post from '../../Component/Home/Post';

function Home() {
  return (
    <>
      <Input />
      <Stack flexDirection={"column"} gap={5} mb={10}>
        <Post />
        <Post />
        <Post />
      </Stack>
    </>
  )
}

export default Home;

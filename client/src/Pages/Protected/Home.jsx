import { Button, Stack } from '@mui/material'
import React from 'react'
import Input from '../../Component/Home/Input';
import Post from '../../Component/Home/Post';

function Home() {
  return (
    <>
      <Input />
      <Stack flexDirection={"column"} gap={5} mb={10} width={"100%"}>
        <Post />
        <Post />
        <Post />
      </Stack>
      <Button size='large' sx={{
        my: 5,
        p: 3,
        textDecoration : "underline",
        cursor: "pointer",
      }}>load More</Button>
    </>
  )
}

export default Home;

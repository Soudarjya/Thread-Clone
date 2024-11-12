import React from 'react'
import SearchInput from '../../Component/Search/SearchInput'
import ProfileBar from '../../Component/Search/ProfileBar';
import { Stack } from '@mui/material';


function Search() {
  return (
    <Stack flexDirection={"column"} alignItems={"center"} p={5}>
      <SearchInput />
      <Stack width={"100%"} gap={2}>
      <ProfileBar />
      <ProfileBar />
      <ProfileBar />
      </Stack>
    </Stack>
  )
}

export default Search;

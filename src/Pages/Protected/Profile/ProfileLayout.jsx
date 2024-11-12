import { Avatar, Button, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

function ProfileLayout() {
    return (
        <>
            <Stack flexDirection={"column"} gap={2} p={2} mt={5} width={"800px"} mx={"auto"}>
                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Stack flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"} gap={1}>
                        <Typography variant='h2' fontWeight={"bold"} fontSize={"2rem"}>Rohan Doe</Typography>
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant="h2" fontSize={"1.2rem"}>
                                rohan_123
                            </Typography>
                            <Chip label="thread.net" size='small' sx={{ fontSize: "0.8rem" }} />
                        </Stack>
                    </Stack>
                    <Avatar src='' alt='' sx={{ width: 60, height: 60 }} />
                </Stack>
                <Typography sx={{ fontSize: "1rem"}}>This is a bio</Typography>
                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant='subtitle2' color={'gray'}>10 followers</Typography>
                    <FaInstagram size={40} />
                </Stack>
            </Stack>
            <Button size='large' sx={{
                color: 'black',
                width: "800px",
                mx: "auto",
                textAlign: "center",
                border: "2px solid gray",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "medium"
            }}>Edit Profile</Button>
            <Stack flexDirection={"row"} justifyContent={"space-evenly"} my={5} pb={2} borderBottom={"2px solid gray"} fontSize={"1.2rem"} width={"800px"} mx={"auto"} >
                <Link to={'/profile/threads/1'}>Threads</Link>
                <Link to={'/profile/replies/1'}>Replies</Link>
                <Link to={'/profile/reposts/1'}>Reposts</Link>
            </Stack>
            <Outlet />
        </>
    )
}

export default ProfileLayout

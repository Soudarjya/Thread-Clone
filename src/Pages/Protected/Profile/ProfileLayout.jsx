import { Avatar, Button, Chip, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

function ProfileLayout() {
    const _300 = useMediaQuery("(min-width : 300px)");
    const _500 = useMediaQuery("(min-width : 500px)");
    const _700 = useMediaQuery("(min-width : 700px)");

    return (
        <>
            <Stack flexDirection={"column"} gap={2} p={2} mt={5} width={_700 ? "800px" : "100%"} mx={"auto"}>
                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Stack flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"} gap={1}>
                        <Typography variant='h2' fontWeight={"bold"} fontSize={_300 ? "2rem" : "1.2rem"}>
                            Rohan Doe
                        </Typography>
                        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                            <Typography variant="h2" fontSize={_300 ? "1.2rem" : "1rem"}>
                                rohan_123
                            </Typography>
                            <Chip label="thread.net" size='small' sx={{ fontSize: _300 ? "0.8rem" : "0.7rem" }} />
                        </Stack>
                    </Stack>
                    <Avatar src='' alt='' sx={{ width: _300 ? 60 : 40, height: _300 ? 60 : 40 }} />
                </Stack>
                <Typography sx={{ fontSize: "1rem" }}>This is a bio</Typography>
                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant='subtitle2' color={'gray'}>10 followers</Typography>
                    <FaInstagram size={_300 ? 40 : 24} />
                </Stack>
            </Stack>
            <Link>
            <Button size='large' sx={{
                color: 'black',
                width: _700 ? "800px" : "90%",
                mx: "auto",
                textAlign: "center",
                border: "2px solid gray",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "medium",
                padding: _300 ? "10px 30px" : "8px 20px",
                transition: "all 0.25s",
                ":hover":{
                    bgcolor: "blue",
                    color: "white",
                    cursor: "pointer",
                }
            }}>
                Edit Profile
            </Button>
            </Link>
            <Stack flexDirection={"row"} justifyContent={"space-evenly"} my={5} pb={2} borderBottom={"2px solid gray"} fontSize={_500 ? "1.2rem" : _300 ? "1.1rem" : "0.9rem"} width={_700 ? "800px" : "90%"} mx={"auto"}>
                <Link to={'/profile/threads/1'} style={{ textDecoration: 'none', color: 'black' }}>Threads</Link>
                <Link to={'/profile/replies/1'} style={{ textDecoration: 'none', color: 'black' }}>Replies</Link>
                <Link to={'/profile/reposts/1'} style={{ textDecoration: 'none', color: 'black' }}>Reposts</Link>
            </Stack>
            <Outlet />
        </>
    );
}

export default ProfileLayout;

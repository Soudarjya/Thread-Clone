import React from 'react'
import { Avatar, AvatarGroup, Badge, Box, Stack, Stepper } from '@mui/material';


function PostOne() {
    return (
        <>
            <Stack flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"} gap={2}>
                <Badge overlap='circular' anchorOrigin={{ vertical: "bottom", horizontal: "right" }} badgeContent={<Avatar sx={{
                    width: 20,
                    height: 20,
                    bgcolor: "blue",
                    position: 'relative',
                    right: 2,
                    bottom: 2,
                }}>+</Avatar>}>
                    <Avatar src='' alt='AJ' sx={{ width: 40, height: 40 }} />
                </Badge>
                <Stack flexDirection={"column"} alignItems={"center"} height={"100%"} gap={1} >
                    <Stepper orientation={"vertical"} activeStep={0} sx={{
                        border: "0.1rem solid gray",
                        width: "0px",
                        height: "100%",
                    }}></Stepper>
                    <AvatarGroup max={3} sx={{
                        '& .MuiAvatar-root': {
                            width: 24,
                            height: 24,
                            fontSize: 12,

                        },
                    }}>
                        <Avatar src='' alt='Aj' />
                        <Avatar src='' alt='Aj' />
                        <Avatar src='' alt='Aj' />
                        <Avatar src='' alt='Aj' />
                    </AvatarGroup>
                </Stack>
            </Stack>
        </>
    )
}

export default PostOne;

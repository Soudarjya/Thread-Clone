import React from 'react';
import { Avatar, Button, Typography, Stack, AvatarGroup } from '@mui/material';

const ProfileBar = () => {
    return (
        <Stack
            direction="row"
            spacing={2}
            minWidth={"90%"}
            p={2}
            sx={{
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                backgroundColor: "#fff",
                maxWidth: "600px",
                mx: "auto",
            }}
        >
            <Avatar src="" alt="profileimage" sx={{ width: 56, height: 56 }} />
            <Stack flex={1} flexDirection={"column"} alignItems={"start"} justifyContent={"start"}>
                <Typography variant="h6" fontWeight="bold">
                    John Doe
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Tech enthusiast and developer
                </Typography>
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
            <Stack alignItems={"center"} justifyContent={"center"}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        textTransform: "none",
                        borderRadius: "20px",
                        px: 2,
                        py: 1,
                        fontWeight: "bold",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Follow
                </Button>
            </Stack>

        </Stack>
    );
};

export default ProfileBar;

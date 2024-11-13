import React from 'react';
import { Avatar, AvatarGroup, Badge, Stack, Stepper, useMediaQuery } from '@mui/material';

function PostOne() {
    const isLargeScreen = useMediaQuery("(min-width: 700px)");

    return (
        <Stack flexDirection="column" alignItems="center" justifyContent="space-between" gap={2}>
            {/* Main Avatar with Badge */}
            <Badge 
                overlap="circular" 
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
                badgeContent={
                    <Avatar 
                        sx={{
                            width: isLargeScreen ? 20 : 14,
                            height: isLargeScreen ? 20 : 14,
                            bgcolor: "blue",
                            position: 'relative',
                            right: isLargeScreen ? 2 : 0,
                            bottom: isLargeScreen ? 2 : 0,
                        }}
                    >
                        +
                    </Avatar>
                }
            >
                <Avatar src='' alt='AJ' sx={{ width: isLargeScreen ? 40 : 32, height: isLargeScreen ? 40 : 32 }} />
            </Badge>

            {/* Stepper and AvatarGroup */}
            <Stack flexDirection="column" alignItems="center" height="100%" gap={1}>
                {/* Stepper with responsive height */}
                <Stepper 
                    orientation="vertical" 
                    activeStep={0} 
                    sx={{
                        border: "0.1rem solid gray",
                        width: "1px",
                        height: isLargeScreen ? "100%" : "90%", // Adjusts based on screen size
                    }}
                />

                {/* Avatar Group */}
                <AvatarGroup 
                    max={3} 
                    sx={{
                        '& .MuiAvatar-root': {
                            width: isLargeScreen ? 24 : 16,
                            height: isLargeScreen ? 24 : 16,
                            fontSize: isLargeScreen ? 12 : 10,
                        },
                    }}
                >
                    <Avatar src='' alt='Aj' />
                    <Avatar src='' alt='Aj' />
                    <Avatar src='' alt='Aj' />
                    <Avatar src='' alt='Aj' />
                </AvatarGroup>
            </Stack>
        </Stack>
    );
}

export default PostOne;

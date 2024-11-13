import React from 'react';
import { Stack, Typography, useMediaQuery, Box } from '@mui/material';
import { BsThreeDots } from "react-icons/bs";
import PostOne from '../../Component/Home/Post/PostOne';
import PostTwo from '../../Component/Home/Post/PostTwo';

function Post() {
    const isSmallScreen = useMediaQuery("(max-width: 400px)");
    const isMediumScreen = useMediaQuery("(max-width: 700px)");

    return (
        <Box
            position="relative"
            borderBottom="3px solid gray"
            p={isMediumScreen ? 2 : 3}
            mx="auto"
            width="95%"
            boxShadow="1px 1px 5px gray"
            sx={{
                ":hover": {
                    boxShadow: isMediumScreen ? "3px 3px 8px gray" : "5px 5px 10px gray"
                },
                display: "flex",
                flexDirection: "column",
                gap: isMediumScreen ? 2 : 3,
            }}
        >
            {/* Date and Menu Icon positioned at the top-right corner */}
            <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                position="absolute"
                top={isSmallScreen ? 8 : 16}
                right={isSmallScreen ? 8 : 16}
                p={isSmallScreen ? 0.5 : 1}
            >
                <Typography
                    variant="caption"
                    color="GrayText"
                    fontSize={isSmallScreen ? "0.7rem" : "1rem"}
                >
                    24h
                </Typography>
                <BsThreeDots size={isSmallScreen ? 16 : 20} />
            </Stack>

            {/* Post Content */}
            <Stack 
                flexDirection="row" 
                gap={isSmallScreen ? 1 : 0.5} 
                p={isMediumScreen ? 2 : 0}
            >
                <PostOne />
                <PostTwo />
            </Stack>
        </Box>
    );
}

export default Post;

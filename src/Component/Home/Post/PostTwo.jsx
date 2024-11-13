import React from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { BiComment } from "react-icons/bi";

function PostTwo() {
    const isSmallScreen = useMediaQuery("(max-width: 500px)");
    const isMediumScreen = useMediaQuery("(min-width: 500px) and (max-width: 700px)");

    return (
        <Stack flexDirection="column"  gap={2} width="100%">
            <Stack>
                <Stack flexDirection="column">
                    <Typography variant="h6" fontWeight="bold">
                        John Doe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "10px" }} lineHeight="1.5">
                        Tech enthusiast and developer
                    </Typography>
                </Stack>
                {/* Image with responsive width */}
                <img 
                    src="/error-bg.png" 
                    alt="Post Image" 
                    loading="lazy" 
                    width={isSmallScreen ? "100%" : isMediumScreen ? "80%" : "400px"} 
                    style={{ height: "auto", borderRadius: "8px" }} 
                />
            </Stack>
            <Stack flexDirection="column" gap={1}>
                {/* Action icons with responsive font size */}
                <Stack flexDirection="row" gap={2} fontSize={isSmallScreen ? 24 : 28}>
                    <FaRegHeart />
                    <BiComment />
                    <FaRetweet />
                    <LuSend />
                </Stack>
                {/* Likes and Comments */}
                <Stack flexDirection="row" gap={2} sx={{ paddingLeft: isSmallScreen ? "8px" : "16px", marginTop: "-8px" }}>
                    <Typography variant="body2">2 Likes</Typography>
                    <Typography variant="body2">1 Comment</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default PostTwo;

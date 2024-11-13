import { Avatar, Stack, Typography, IconButton, useMediaQuery } from '@mui/material';
import React from 'react';
import { IoIosMore } from 'react-icons/io';

function Comments() {
    const _700 = useMediaQuery("(min-width : 700px)");
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            px={2}
            py={2}
            width={"90%"}
            mx={"auto"}
            sx={{
                borderBottom: "1px solid #ddd", // Adds a subtle line separating comments
                transition: "all 0.3s ease",
                '&:hover': {
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Adds hover shadow effect for interactivity
                    backgroundColor: '#fafafa', // Light background change on hover
                },
            }} >
            <Stack direction="row" gap={_700 ? 2 : 1} alignItems="center">
                <Avatar
                    src=''
                    alt="User Avatar"
                    sx={{
                        width: 40,
                        height: 40,
                    }}
                />
                <Stack>
                    <Typography variant="h6" fontWeight="bold" fontSize="1rem" color="text.primary">
                        John Doe
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize="0.875rem">
                        This is a comment. It could be a little longer than just a short sentence.
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction="row" gap={1} alignItems="center" fontSize="0.875rem" color="text.secondary">
                <Typography variant="caption">24min ago</Typography>
                <IconButton>
                    <IoIosMore size={_700 ? 28 : 20} />
                </IconButton>
            </Stack>
        </Stack>
    );
}

export default Comments;

import { Avatar, Stack, Typography, IconButton, useMediaQuery, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { IoIosMore } from 'react-icons/io';
import { MdDeleteSweep } from "react-icons/md";

function Comments() {
    const _700 = useMediaQuery("(min-width: 700px)");

    const handleClose = () => { };
    const handleDelete = () => { };

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                px={_700 ? 2 : 1}
                py={_700 ? 2 : 1.5}
                width={"90%"}
                mx={"auto"}
                sx={{
                    borderBottom: "1px solid #ddd",
                    transition: "all 0.3s ease",
                    '&:hover': {
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#fafafa',
                    },
                }}
            >
                <Stack direction="row" gap={_700 ? 2 : 1} >
                    <Avatar
                        src=""
                        alt="User Avatar"
                        sx={{
                            width: _700 ? 40 : 38,
                            height: _700 ? 40 : 38,
                        }}
                    />
                    <Stack>
                        <Typography variant="h6" fontWeight="bold" fontSize={_700 ? "1rem" : "0.875rem"} color="text.primary">
                            John Doe
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize={_700 ? "0.875rem" : "0.75rem"}>
                            This is a comment. 
                        </Typography>
                    </Stack>
                </Stack>

                <Stack direction="row" gap={1} alignItems={"center"}  fontSize={_700 ? "0.875rem" : "0.75rem"} color="text.secondary">
                    <Typography variant="caption">24min</Typography>
                    <IconButton>
                        <IoIosMore size={_700 ? 28 : 20} />
                    </IconButton>
                </Stack>
            </Stack>

            <Menu
                anchorEl={null}
                open={false}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <MenuItem onClick={handleDelete} sx={{ px: 2, py: 1, '&:hover': { bgcolor: '#e0f2f1' } }}>
                    <ListItemIcon>
                        <MdDeleteSweep fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                </MenuItem>
            </Menu>
        </>
    );
}

export default Comments;

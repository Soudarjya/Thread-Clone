import React from 'react';
import { Avatar, Box, Stack, Typography, TextField, IconButton, Button } from '@mui/material';
import { MdInsertPhoto, MdGif, MdTag, MdFormatListBulleted, MdLocationOn, MdClose } from 'react-icons/md';

function NewThread() {
    return (
        <Box
            marginTop={10}
            marginBottom={5}
            bgcolor={"black"}
            sx={{
                width: '90%',
                maxWidth: 500,
                bgcolor: 'white',
                color: 'text.primary',
                borderRadius: 3,
                boxShadow: "3px 3px 10px gray",
                p: 2,
                mx: 'auto',
            }}
        >
            {/* Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <IconButton edge="start" color="inherit" aria-label="cancel">
                    <MdClose />
                </IconButton>
                <Typography variant="h6" fontWeight="bold">
                    New thread
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="attachment">
                    <MdFormatListBulleted />
                </IconButton>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="flex-start">
                {/* User Avatar */}
                <Avatar alt="User" src="" sx={{ width: 48, height: 48 }} />

                {/* Input and Icons */}
                <Stack flexGrow={1} spacing={1}>
                    {/* Username and Input */}
                    <Typography variant="subtitle2" color="text.primary">
                        theonly.abhii_
                    </Typography>
                    <TextField
                        variant="outlined"
                        placeholder="What's new?"
                        multiline
                        rows={3}
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                bgcolor: 'background.paper',
                                fontSize: '0.9rem',
                            },
                        }}
                    />

                    {/* Icons Row */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
                        <Stack direction="row" spacing={1}>
                            <IconButton color="primary"><MdInsertPhoto /></IconButton>
                            <IconButton color="primary"><MdGif /></IconButton>
                            <IconButton color="primary"><MdTag /></IconButton>
                            <IconButton color="primary"><MdFormatListBulleted /></IconButton>
                            <IconButton color="primary"><MdLocationOn /></IconButton>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            Anyone can reply & quote
                        </Typography>
                    </Stack>

                    {/* Post Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            width: '60px',
                            alignSelf: 'flex-end',
                            bgcolor: 'blue', // Disabled look
                            color: 'white',
                        }}
                    >
                        Post
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}

export default NewThread;

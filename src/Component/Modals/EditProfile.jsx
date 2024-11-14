import React, { useRef, useState } from 'react';
import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, Typography, useMediaQuery } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';

function EditProfile() {
    const _700 = useMediaQuery("(min-width: 700px)");

    const [picture, setPicture] = useState(null);
    const [username, setUsername] = useState("iron_man");
    const [email, setEmail] = useState("iron_man@example.com");
    const [bio, setBio] = useState("I am Iron Man");

    const pictureRef = useRef();

    const handlePicture = () => {
        pictureRef.current.click();
    };

    const handleClose = () => { };

    const handleUpdate = () => { };

    return (
        <>
            <Dialog open={true} onClose={handleClose} fullScreen={_700 ? false : true} fullWidth>
                <Box position={"absolute"} top={20} right={20} onClick={handleClose} sx={{ cursor: 'pointer' }}>
                    <RxCross2 size={28} />
                </Box>
                <DialogTitle textAlign="center" variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                    Edit Profile
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={3} alignItems="center" mb={4}>
                        <Avatar
                            src={picture ? URL.createObjectURL(picture) : undefined}
                            alt="Profile Picture"
                            sx={{
                                width: 100,
                                height: 100,
                                border: "2px solid #1976d2",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                        <Button
                            onClick={handlePicture}
                            variant="outlined"
                            sx={{
                                textTransform: 'none',
                                fontWeight: 'bold',
                                color: '#1976d2',
                                borderColor: '#1976d2',
                                ':hover': {
                                    bgcolor: '#1976d210',
                                },
                            }}
                        >
                            Change Profile Picture
                        </Button>
                        <input
                            type="file"
                            accept="image/*"
                            ref={pictureRef}
                            style={{ display: "none" }}
                            onChange={(e) => setPicture(e.target.files[0])}
                        />
                    </Stack>

                    <Stack spacing={3} mb={4}>
                        <Stack spacing={1}>
                            <Typography variant="body1" fontWeight="bold">
                                Username
                            </Typography>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    outline: 'none',
                                }}
                            />
                        </Stack>
                        <Stack spacing={1}>
                            <Typography variant="body1" fontWeight="bold">
                                Email
                            </Typography>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    outline: 'none',
                                }}
                            />
                        </Stack>
                        <Stack spacing={1}>
                            <Typography variant="body1" fontWeight="bold">
                                Bio
                            </Typography>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                rows={4}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    outline: 'none',
                                    resize: 'none',
                                }}
                            />
                        </Stack>
                    </Stack>

                    <Button
                        onClick={handleUpdate}
                        variant="contained"
                        sx={{
                            width: '100%',
                            py: 1,
                            borderRadius: 2,
                            fontWeight: 'bold',
                            bgcolor: '#1976d2',
                            color: 'white',
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                            ':hover': {
                                bgcolor: '#115293',
                            },
                        }}
                    >
                        Update Profile
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default EditProfile;

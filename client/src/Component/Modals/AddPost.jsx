import React, { useRef, useState } from 'react'
import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, Typography, useMediaQuery } from '@mui/material'
import { RxCross2 } from 'react-icons/rx';
import { FaImages } from 'react-icons/fa6';

function AddPost() {

    const _300 = useMediaQuery("(min-width: 300px)");
    const _500 = useMediaQuery("(min-width: 500px)");
    const _700 = useMediaQuery("(min-width: 700px)");

    const [text, setText] = useState("");
    const [media, setMedia] = useState(null);


    const mediaRef = useRef();


    const handleClose = () => {
        window.location.href='/';
    }

    const handleMediaRef = () => {
        mediaRef.current.click();
    }

    const handlePost = ()=>{

    }

    return (
        <>
            <Dialog open={true} onClose={handleClose} fullWidth fullScreen={_700 ? false : true}>
                <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
                    <RxCross2 size={28} />
                </Box>
                <DialogTitle variant='h5' textAlign={"center"} mb={5}>
                    New Thread
                </DialogTitle>
                <DialogContent>
                    <Stack flexDirection={"row"} gap={2} mb={5}>
                        <Avatar src='' alt=''/>
                        <Stack gap={_700 ? 0.8 : 1}>
                            <Typography variant='h6' fontWeight={"bold"} fontSize={"1rem"}>rohan_11</Typography>
                            <textarea onChange={(e) => setText(e.target.value)} cols={_500 ? 40 : 25} rows={4} placeholder='Start a thread...' autoFocus className='textArea'></textarea>
                            {media && <img src={URL.createObjectURL(media)} alt="" width={_500 ? 300 : _300 ? 200 : 100}/>}
                            <FaImages size={20} onClick={handleMediaRef} />
                            <input type="file" accept='image/*' className='file' ref={mediaRef} onChange={(e) => setMedia(e.target.files[0])} />
                        </Stack>
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography variant='h6' fontSize={"1rem"} color={'gray'}>AnyOne can reply</Typography>
                        <Button
                            onClick={handlePost}
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
                                cursor: "pointer"
                            }}
                        >
                            Post
                        </Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddPost


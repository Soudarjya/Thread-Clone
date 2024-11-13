import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {

    const navigate = useNavigate();

    return (
        <>
            <Stack display={"flex"} alignItems={"center"} justifyContent={"center"} height={"100vh"} width={"100%"} >
                <Stack display={"flex"} alignItems={"center"} justifyContent={"center"} bgcolor={"Peach"} borderRadius={"10px"} padding={5} boxShadow={"2px 2px 7px teal"}>
                    <Typography variant='h3'>OOP's</Typography>
                    <Typography variant='h6'>You Entered Wrong Location</Typography>
                    <Button sx={{
                        marginTop: 3,
                        padding: "10px 20px",
                        bgcolor: "blue",
                        color: "white",
                        borderRadius: 1,
                        ":hover": {
                            cursor: "pointer",
                            bgcolor: "green"
                        }
                    }}
                    onClick={()=> navigate(-1)}
                    >Go Back</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Error

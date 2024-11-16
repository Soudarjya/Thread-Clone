import React from 'react'
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { MdDeleteSweep } from "react-icons/md";

function MyMenu() {

    const handleClose = () => { }
    const handleDelete = () => { }

    return (
        <>
            <Menu anchorEl={''} open={true} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleDelete} sx={{ px: 2, py: 1, '&:hover': { bgcolor: '#e0f2f1' } }}>
                    <ListItemIcon>
                        <MdDeleteSweep fontSize="large" size={22}/>
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                </MenuItem>
            </Menu>
        </>
    )
}

export default MyMenu

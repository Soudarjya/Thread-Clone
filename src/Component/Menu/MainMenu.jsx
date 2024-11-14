import React from 'react'
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { AccountCircle, Brightness4, Logout } from '@mui/icons-material'

function MainMenu() {

    const handleClose = () => {

    }

    const handleToggleTheme = () => {

    }

    const handleLogout = () => {

    }



    return (
        <>
            <Menu anchorEl={''} open={true} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleToggleTheme} sx={{ px: 2, py: 1, '&:hover': { bgcolor: '#e0f2f1' } }}>
                    <ListItemIcon>
                        <Brightness4 fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Toggle Theme" />
                </MenuItem>
                <MenuItem sx={{ px: 2, py: 1, '&:hover': { bgcolor: '#e0f2f1' } }}>
                    <ListItemIcon>
                        <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    <Link to="/profile/threads/2" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemText primary="My Profile" />
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleLogout} sx={{ px: 2, py: 1, '&:hover': { bgcolor: '#e0f2f1' } }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </MenuItem>
            </Menu>
        </>
    )
}

export default MainMenu

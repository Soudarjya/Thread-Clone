import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { FaEdit, FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

function Navbar() {
    const isLargeScreen = useMediaQuery("(min-width: 700px)");
    const iconSize = isLargeScreen ? 30 : 24; // Adjust icon size based on screen width

    return (
        <Stack
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            width="100%"
            gap={isLargeScreen ? 6 : 1} // Adjust gap for spacing
            px={4} // Horizontal padding for breathing room
            py={4} // Vertical padding
            bgcolor="white" // Background color for contrast
            boxShadow={5} // Add slight shadow for depth
            borderRadius={5} // Rounded edges for modern look
        >
            <IconLink to="/" icon={<FiArrowLeft size={iconSize} className='links' />} />
            <IconLink to="/" icon={<ImHome size={iconSize} />} className='links'/>
            <IconLink to="/search" icon={<FiSearch size={iconSize} className='links'/>} />
            <IconLink to="/addpost" icon={<FaEdit size={iconSize} className='links'/>} />
            <IconLink to="/likepost" icon={<FaRegHeart size={iconSize} className='links'/>} />
            <IconLink to="/profile/threads/1" icon={<FaRegCircleUser size={iconSize} className='links'/>} />
        </Stack>
    );
}

const IconLink = ({ to, icon }) => (
    <Link to={to} style={{ color: 'black', textDecoration: 'none' }}>
        <Stack
            alignItems="center"
            sx={{
                '&:hover': {
                    color: '#1976d2', // Change color on hover
                    transform: 'scale(1.1)', // Slightly enlarge icon on hover
                    transition: 'all 0.2s ease',
                },
            }}
        >
            {icon}
        </Stack>
    </Link>
);

export default Navbar;

import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import { ImHome } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { FaEdit, FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

function Navbar() {
    return (
        <Stack
            flexDirection="row"
            justifyContent="space-around"
            gap={10}
            alignItems="center"
            maxWidth="100%"
            fontSize={28}
        >
            <Link to={'/'}><ImHome color='black'/></Link>
            <Link to={'/search'}><FiSearch color='black' /></Link>
            <Link to={'/profile/threads/1'}><FaEdit color='black' /></Link>
            <Link to={'/likes'}><FaRegHeart color='black' /></Link>
            <Link to={'/profile'}><FaRegCircleUser color='black' /></Link>
        </Stack>
    );
}

export default Navbar;

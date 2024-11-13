import React from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import { ImHome } from "react-icons/im";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { FaEdit, FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

function Navbar() {

    const _300 = useMediaQuery("(min-width : 300px)");

    return (
        <Stack
            flexDirection="row"
            justifyContent="space-around"
            gap={10}
            alignItems="center"
            maxWidth="100%"
            fontSize={28}
        >
            <FiArrowLeft color='Black' size={_300 ?  32 : 24} />
            <Link to={'/'}><ImHome color='black' size={_300 ?  32 : 24}/></Link>
            <Link to={'/search'}><FiSearch color='black' size={_300 ?  32 : 24} /></Link>
            <Link to={'/addpost'}><FaEdit color='black' size={_300 ?  32 : 24} /></Link>
            <Link to={'/likes'}><FaRegHeart color='black' size={_300 ?  32 : 24} /></Link>
            <Link to={'/profile/threads/1'}><FaRegCircleUser color='black' size={_300 ?  32 : 24} /></Link>
        </Stack>
    );
}

export default Navbar;

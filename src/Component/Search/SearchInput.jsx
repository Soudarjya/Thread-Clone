import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
    return (
        <TextField
        fullWidth
            variant="outlined"
            placeholder="Search"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            sx={{
                maxWidth: "750px",
                '& .MuiOutlinedInput-root': {
                    borderRadius: "15px",
                    backgroundColor: 'Peach',
                    px: 2,
                    py: 1,
                    my: 5,
                    mx: "auto",
                    boxShadow:"1px 1px 5px gray",
                    outline: "none",
                    border: "none",
                    ":hover":{
                    boxShadow:"3px 3px 8px gray",
                    }
                },
                '& .MuiInputAdornment-root': {
                },
            }}
        />
    );
}

export default SearchInput;

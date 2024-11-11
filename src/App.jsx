import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import ProtectedLayout from './Pages/Protected/ProtectedLayout';
import Search from './Pages/Protected/Search';
import Home from './Pages/Protected/Home';


function App() {
  return (
    <>
      <Box minHeight={"100vh"}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProtectedLayout />}>
              {/* <Route path='' element={<h1>Home</h1>} /> */}
              <Route path='post/:id' element={<h1>Single Post</h1>} />
              <Route path='search' element={<Search />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Home />
      </Box>
    </>
  );
}

export default App;

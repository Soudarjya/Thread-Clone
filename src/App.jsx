import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Common/Header';
import Search from './Pages/Protected/Search';
import Home from './Pages/Protected/Home';
import Error from './Pages/Error';
import { Box } from '@mui/material';
import { RiH1 } from 'react-icons/ri';


function App() {
  return (
    <>
      <Box>
      <Routes>
        <Route path='/' element={<h1>protected</h1>}>
          <Route/>
        </Route>
      </Routes>
      </Box>
    </>
  );
}

export default App;

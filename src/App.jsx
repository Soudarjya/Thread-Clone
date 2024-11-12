import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import ProtectedLayout from './Pages/Protected/ProtectedLayout';
import Search from './Pages/Protected/Search';
import Home from './Pages/Protected/Home';
import ProfileLayout from './Pages/Protected/Profile/ProfileLayout';
import Threads from './Pages/Protected/Profile/Threads';
import Replies from './Pages/Protected/Profile/Replies';
import Repost from './Pages/Protected/Profile/Repost';
import SinglePost from './Pages/Protected/SinglePost';
import Register from './Pages/Register';

function App() {
  return (
    <Box minHeight={"100vh"}>
      <BrowserRouter>
        <Routes>
          {/* Define the layout and routes under ProtectedLayout */}
          <Route path='/' element={<ProtectedLayout />}>
            <Route index element={<Home />} /> {/* Home will load at the root path `/` */}
            <Route path='post/:id' element={<SinglePost />} />
            <Route path='search' element={<Search />} />
            <Route path='profile' element={<ProfileLayout />}>
              <Route path='threads/:id' element={<Threads />} />
              <Route path='replies/:id' element={<Replies />} />
              <Route path='reposts/:id' element={<Repost />} />
            </Route>
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

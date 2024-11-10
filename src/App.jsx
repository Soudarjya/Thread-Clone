import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Common/Header';
import Search from './Pages/Protected/Search';
import Home from './Pages/Protected/Home';
import Error from './Pages/Error';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

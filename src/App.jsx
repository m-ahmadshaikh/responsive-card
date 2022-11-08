import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Email from './pages/Email';
import Home from './pages/Home';
import EnterPassword from './pages/Password';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/password" element={<EnterPassword />} />{' '}
      <Route path="/email" element={<Email />} />
    </Routes>
  );
}

export default App;

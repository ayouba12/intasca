import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DriverRegistration from './pages/DriverRegistration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="become-driver" element={<DriverRegistration />} />
      </Route>
    </Routes>
  );
}

export default App;
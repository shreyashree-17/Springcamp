import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Footer from './components/footer';
import PropsPage from './pages/Props';
import UseStatepage from './pages/useState';
import Home from './pages/home';
import Layout from './pages/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/jokes" element={<PropsPage />} />
        <Route path="/usestate" element={<UseStatepage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

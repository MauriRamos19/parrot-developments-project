import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import App from '../App';
import { Navbar } from '../Components/Navbar';
import { MarketPlace } from '../Pages/MarketPlace';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/MarketPlace" element={<MarketPlace />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

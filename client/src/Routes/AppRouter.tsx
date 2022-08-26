import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from '../App';
import { MarketPlace } from '../Pages/MarketPlace';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/MarketPlace" element={<MarketPlace />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

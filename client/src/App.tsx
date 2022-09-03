import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='md:blur absolute top-0 m-0 h-full w-screen bg-gray-900 bg-opacity-95'>
      </div>
      <Navbar/>

      <Outlet/>
    </div>
  );
}

export default App;

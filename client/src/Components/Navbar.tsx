import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { runInThisContext } from 'vm';

export const Navbar = () => {

    const navigate = useNavigate();

  return (
    <nav className="relative flex md:w-11/12 sm:w-auto mx-auto h-24 bg-slate-800 bg-opacity-35 text-white md:shadow-xl sm:shadow-md md:mt-5 md:rounded-r-xl md:rounded-l-xl">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
        <div className='hidden md:block flex m-auto text-center font-extrabold'>
            <img className='w-16' src='https://res.cloudinary.com/dzv5rmys1/image/upload/v1661508689/2694_vdoo5w.png'/>
       </div>
       <div className='flex m-auto text-center font-extrabold'>
            <div className='hidden md:block px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer hover:text-green-600 active:text-green-600 visited:text-green-600 link:text-green-600' onClick={() => {
                navigate('/')
                 
            }}>
                <p>Home</p>
                <div></div>
            </div>
            <div className='hidden md:block px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer hover:text-green-600' onClick={() => {
                navigate('/MarketPlace')
            }}>
                <p>Marketplace</p>
                <div></div>
            </div>
            <div className='hidden md:block px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer hover:text-green-600' onClick={() => {
                navigate('/')
            }}>
                <p>Overview</p>
                <div></div>
            </div>
       </div>
       <div className='hidden md:block flex m-auto text-center font-extrabold'>
            <img className='w-16' src='https://res.cloudinary.com/dzv5rmys1/image/upload/v1661508689/2694_vdoo5w.png'/>
       </div>
    </nav>
  )
}

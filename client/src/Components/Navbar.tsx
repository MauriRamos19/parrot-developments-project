import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { runInThisContext } from 'vm';

export const Navbar = () => {

    const navigate = useNavigate();

  return (
    <nav className="flex w-11/12 mx-auto h-24 bg-gray-800 bg-opacity-25 text-white shadow-md mt-5 rounded-r-lg rounded-l-lg">
        <div className='flex m-auto text-center font-extrabold'>
            <img className='w-16' src='https://res.cloudinary.com/dzv5rmys1/image/upload/v1661508689/2694_vdoo5w.png'/>
       </div>
       <div className='flex m-auto text-center font-extrabold'>
            <div className='px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer hover:text-green-600 active:text-green-600 visited:text-green-600 link:text-green-600' onClick={() => {
                navigate('/')
                 
            }}>
                <p>Home</p>
                <div></div>
            </div>
            <div className='px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer hover:text-green-600' onClick={() => {
                navigate('/MarketPlace')
            }}>
                <p>Marketplace</p>
                <div></div>
            </div>
            <div className='px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25 hover:cursor-pointer hover:text-green-600' onClick={() => {
                navigate('/')
            }}>
                <p>Overview</p>
                <div></div>
            </div>
       </div>
       <div className='flex m-auto text-center font-extrabold'>
            <img className='w-16' src='https://res.cloudinary.com/dzv5rmys1/image/upload/v1661508689/2694_vdoo5w.png'/>
       </div>
    </nav>
  )
}

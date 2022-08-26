import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="flex w-screen h-24 bg-gray-800 bg-opacity-25 text-white shadow-md">
        <div className='flex m-auto text-center font-extrabold'>
            <img className='w-16' src='https://res.cloudinary.com/dzv5rmys1/image/upload/v1655030700/puma_logo_flklvk.png'/>
       </div>
       <div className='flex m-auto text-center font-extrabold'>
            <div className='px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25'>
                <a href='/'>Home</a>
                <div></div>
            </div>
            <div className='px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25'>
                <a>Marketplace</a>
                <div></div>
            </div>
            <div className='px-12 py-10 h-24 hover:bg-white hover:bg-opacity-25'>
                <a>About</a>
                <div></div>
            </div>
       </div>
       <div className='flex m-auto text-center font-extrabold'>

       </div>
    </nav>
  )
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="flex justify-around items-center w-screen h-24 bg-gray-800 bg-opacity-25 text-white">
       <ul className='flex w-11/12 text-center justify-between'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            {/* <li>
                <a>Marketplace</a>
            </li>
            <li>
                <a>About</a>
            </li> */}
       </ul>
    </nav>
  )
}

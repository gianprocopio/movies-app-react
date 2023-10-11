import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import NavbarItem from './NavbarItem';
import { FaBars } from 'react-icons/fa';

import "./../index.css"

export const showMenu = ()=>{
  document.querySelector(".menu").classList.toggle("showMenu");
}


function Navbar() {
  return (
    <nav className='flex md:justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light mt-4'>
        <div className="w-full relative left-10 flex gap-5 items-center">
        <img className='w-16' src="src\assets\icono.png" alt="" />
        <h1 className='title text-3xl font-semibold'>Gian's Movies</h1>
        </div>
  
        <div className='w-8 absolute right-10 lg:hidden text-2xl'>
          <FaBars onClick={() => showMenu()} className='w-full cursor-pointer hamburger' />
        </div>
        <ul className='menu flex items-start gap-3 flex-col lg:flex-row absolute top-28 lg:top-0 lg:right-0 rounded-lg p-10 transition-all duration-300 sm:border sm:border-black lg:border-none bg-white lg:bg-transparent text-black'>
            <NavbarItem
            title="Home"
            path="/"
            />
            <NavbarItem
            title="Movies"
            path="/movies"
            />
            <NavbarItem
            title="Categories"
            path="/categories"
            />
            <NavbarItem
            title="Sign in"
            path="/sign-in"
            />
            <NavbarItem
            title="Profile"
            path="/my-profile"
            />
            
        </ul>
    </nav>
  )
}

export default Navbar

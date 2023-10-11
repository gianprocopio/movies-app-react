import React from 'react'
import { NavLink } from 'react-router-dom'
import { showMenu } from './Navbar'

function NavbarItem({path, title}) {
  return (
    <li onClick={()=> showMenu()} className='list-item text-base font-semibold transition-colors duration-300 lg:text-white'>
            <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                {title}
            </NavLink>
            </li>
  )
}

export default NavbarItem

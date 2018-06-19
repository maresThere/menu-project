import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <div className='layout'>
    <nav>
      <ul className='nav'>
        <li>
          <NavLink to='/'>home</NavLink>
        </li>
        <li>
          <NavLink to='/Menu'>menu</NavLink>
        </li>
        <li>
          <NavLink to='/Location'>location</NavLink></li>
        <li>
          <NavLink to='/contact'>contact</NavLink></li>
      </ul>
    </nav>

  </div>
)
export default Nav

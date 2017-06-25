import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
const Home = () => (
  <div className='layout'>
    <h1 className='mainTitle'><NavLink to='/'>DINE</NavLink></h1>

    <nav>
      <ul className='nav'>
        <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='/menu'>menu</NavLink></li>
        <li><a href='#location'>location</a></li>
        <li><NavLink to='/contact'>contact</NavLink></li>
      </ul>
    </nav>
  </div>
)
export default Home

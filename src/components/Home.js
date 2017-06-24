import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
const Home = () => (
  <div className='layout'>
    <h1><NavLink to='/'>hello MENU</NavLink></h1>

    <nav>
      <ul className='nav'>
        <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='/menu'>menu</NavLink></li>
        <li><NavLink to='/location'>location</NavLink></li>
        <li><NavLink to='/contact'>contact</NavLink></li>
      </ul>
    </nav>
    <div className='Home'>
      <h2>What can we say about this place</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
)
export default Home

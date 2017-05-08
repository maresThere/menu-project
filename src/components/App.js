import React, { Component } from 'react'
import Breakfast from './Breakfast'
class App extends Component {
  render () {
    return <div>
      <h1>MENU</h1>
      <ul className='nav'>
        <li>home</li>
        <li>menu</li>
        <li>location</li>
        <li>contact</li>
      </ul>
      <Breakfast />
    </div>
  }
}

export default App

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Home, Menu, Contact, Locations, Location } from '.'

class App extends Component {
  render () {
    return <Router>
      <div>
        <Home />
        <Locations />
      </div>
    </Router>
  }
}

export default App

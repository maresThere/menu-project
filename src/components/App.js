import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { Home, Menu, Contact, Locations, Location } from '.'

class App extends Component {
  render () {
    return <Router>
      <div className='layout'>
        <nav>
          <h1><NavLink to='/'>hello MENU</NavLink></h1>
          <ul className='nav'>
            <li><NavLink to='/'>home</NavLink></li>
            <li><NavLink to='/menu'>menu</NavLink></li>
            <li><NavLink to='/location'>location</NavLink></li>
            <li><NavLink to='/contact'>contact</NavLink></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/menu' component={Menu} />
            <Route path='/contact' component={Contact} />
            <Route path='/location' component={Locations} />
            <Route path='/locations/:slug' component={Location} />
          </Switch>
        </main>
      </div>
    </Router>
  }
}

export default App

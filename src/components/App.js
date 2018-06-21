import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav, Home, Menu, Location, Contact } from '.'

class App extends Component {
  render () {
    return <Router>
      <div className='layout'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/location' component={Location} />
          <Route path='/contact' component={Contact} />

        </Switch>
      </div>
    </Router>
  }
}

export default App

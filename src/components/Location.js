import React, { Component } from 'react'
import Locations from './Locations'
import items from '../stores'

class Location extends Component {
  render () {
    return (
      <div className='Location'>
        <h1>Locations</h1>
        <ul id='location' className='locations'>
          {items.map(item => <Locations key={item.city} details={item} />)}
        </ul>
      </div>
    )
  }
}
export default Location

import React, { Component } from 'react'
import Locations from './Locations'
import items from '../stores'

class Location extends Component {
  render () {
    return (
      <div className='Location'>
        <h1>Locations</h1>
        <h2>We Have So Many Locations</h2>
        <p>Our Locations are the greatest. They are so great, ya head will spin.</p>
        <ul id='location' className='locations'>
          {items.map(item => <Locations key={item.city} details={item} />)}
        </ul>
      </div>
    )
  }
}
export default Location

import React, { Component } from 'react'

class Locations extends Component {
  render () {
    const { image, city, street, zip } = this.props.details
    return (
      <li className='box-wrap'>
        <div className='mainDiv'>

          <h3 className='city'>{city}</h3>
        </div>
        <div className='inner-box'>
          <img src={image} className='locationImg' />
        </div>
        <div className='address'>
          <h4>DINE {city}</h4>
          <p className='street'>{street}</p>
          <p className='city'>{city}, {zip}</p>
          <p className='black'>Reservations</p>
        </div>
      </li>
    )
  }
}

export default Locations

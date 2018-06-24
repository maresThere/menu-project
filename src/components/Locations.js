import React, { Component } from 'react'

class Locations extends Component {
  render () {
    const { title, image, city, street, phone, zip } = this.props.details
    return (
      <li className='box-wrap'>
        <div className='img-box'>
          <h3 className='title'>{title}</h3>
        </div>
        <div className='inner-box'>
          <img src={image} className='locationImg' />
        </div>
        <div className='address-box'>
          <h4>{city}</h4>
          <span className='street'>{street} <br />
            {city}, {zip}</span>
          <span className='phone'>{phone}</span>
        </div>
      </li>
    )
  }
}

export default Locations

import React, { Component } from 'react'
import miami from '../images/miami.jpg'
import jax from '../images/jax.jpg'
import winterPark from '../images/winterPark.jpg'
import tampa from '../images/tampa.jpg'

class Locations extends Component {
  render () {
    return <div className='section'>
      {/* <h1>Locations</h1> */}
      <ul id='location' className='locations'>
        <li className='box-wrap'>
          <div className='mainDiv'>
            <img src={miami} alt='miami' className='locationImg' />
            <h3 className='city'>MIAMI</h3>
          </div>
          <div className='inner-box'>
            <div className='address'>
              <h4>DINE MIAMI</h4>
              <p className='street'>5555 Ocean Blvd</p>
              <p className='city'>Miami, Fl 33333</p>
              <p className='black'>Reservations</p>
              <a href='tel:305-555-5555' className='phone'>305.555.5555</a>
            </div>
          </div>
        </li>
        <li className='box-wrap'>
          <div className='mainDiv'>
            <img src={tampa} alt='miami' className='locationImg' />
            <h3 className='city'>TAMPA</h3>
          </div>
          <div className='inner-box'>
            <div className='address'>
              <h4>DINE TAMPA</h4>
              <p className='street'>910 Kennedy Blvd</p>
              <p className='city'>Tampa, Fl 33607</p>
              <p className='black'>Reservations</p>
              <a href='tel:813-555-5555' className='phone'>813.555.5555</a>
            </div>
          </div>
        </li>
        <li className='box-wrap'>
          <div className='mainDiv'>
            <img src={winterPark} alt='miami' className='locationImg' />
            <h3 className='shrink'>WINTER PARK</h3>
          </div>
          <div className='inner-box'>
            <div className='address'>
              <h4>DINE WINTER PARK</h4>
              <p className='street'>5555 Main street</p>
              <p className='city '>Winter Park, Fl 33333</p>
              <p className='black'>Reservations</p>
              <a href='tel:407-555-5555' className='phone'>407.555.5555</a>
            </div>
          </div>
        </li>
        <li className='box-wrap'>
          <div className='mainDiv'>
            <img src={jax} alt='miami' className='locationImg' />
            <h3 className='shrink'>JACKSONVILLE</h3>
          </div>
          <div className='inner-box'>
            <div className='address'>
              <h4>DINE JACKSONVILLE</h4>
              <p className='street'>123 1st street</p>
              <p className='city'>Jax Beach, Fl 32805</p>
              <p className='black'>Reservations</p>
              <a href='tel:904-555-5555' className='phone'>904.555.5555</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  }
}

export default Locations

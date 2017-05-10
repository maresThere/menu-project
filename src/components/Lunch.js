import React, { Component } from 'react'

class Lunch extends Component {
  render () {
    return <div>
      <h1>Lunch</h1>
      <ul className='Lunch'>
        <li>Soft-Boiled Egg* with “soldiers”</li> <span>6.00</span>
        <li>Steel Cut Irish Oatmeal with raisins or bananas</li>
        <span>11.00</span>
        <li>Eggs Benedict* with homefries</li>
        <span>15.00 / 23.00</span>
        <li>Eggs Norwegian* poached eggs with smoked salmon and
hollandaise on an English muffin</li>
        <span>16.00 / 24.00</span>
        <li>Eggs Florentine* poached eggs with spinach,
artichoke hearts, béchamel sauce and Parmesan </li> <span>20.00</span>
        <li>Avocado and Poached Eggs on Toast*
with tomato-jalapeño salsa</li>
        <span>19.00</span>

        <li>Smoked Salmon Tartine with cucumber, pickled red onion,
herb and caper cream cheese on gluten-free bread </li> <span>14.00</span>
Sour Cream-Hazelnut Waffles with warm berries  21.00
      </ul>
    </div>
  }
}

export default Lunch

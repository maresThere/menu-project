import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
// import data from '../data.json'

class Menu extends React.Component {
  state = {
    categories: []
  }

  componentDidMount () {
    const API = 'https://api.graph.cool/simple/v1/cj2ic1lk3o6v60187a899o3gm'
    window.fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
        allCategories {
          name
          slug
        }
      }`
      })
    }).then(r => r.json()).then(data => {
      this.setState({
        categories: data.data.allCategories
      })
    })
  }
  render () {
    return <div className='Menu'>
      <h2>We Have So Many Menus</h2>
      <p>Our Menus are the greatest. They are so great, ya head will spin.</p>
      <section className='categories'>
        <ul>
          {this.state.categories.map(({ slug, name }, i) => (
            <li key={i}>
              <NavLink to={`/menu/${slug}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path='/menu' exact>
            <h2>This is the best</h2>
          </Route>
          <Route path='/menu/:slug' component={menuSection} />
        </Switch>
      </section>
    </div>
  }
}
const menuSection = ({ match }) => {
  const category = data.menu.find(c => c.slug === match.params.slug)
  return <section>
    <h3>{category.name}</h3>
    <table>
      <tbody>
        {category.items.map((item, i) =>
          <tr key={i}>
            <th>{item.name}</th>
            <td>{item.description}</td>
            <td>{item.price / 100}</td>
          </tr>
      )}
      </tbody>
    </table>
  </section>
}
export default Menu

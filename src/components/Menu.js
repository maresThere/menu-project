import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { query } from './api'

class Menu extends React.Component {
  state = {
    categories: []
  }

  componentDidMount () {
    query(`allCategories {
      name
      slug
  }`).then(({ data }) => {
    this.setState({
      categories: data.allCategories
    })
  })
  }
  render () {
    return <div className='Menu'>
      <h1>MENU</h1>

      <section className='categories'>
        <ul className='mealTitle'>
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

class menuSection extends React.Component {
  state = {
    name: 'Loading...',
    items: []
  }
  componentDidMount () {
    this.load(this.props.match.params.slug)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({ name: 'Loading...', items: [] })
      this.load(nextProps.match.params.slug)
    }
  }

  load (slug) {
    query(`allCategories(filter: { slug: "${slug}" }, first: 1) {
      name
      slug
      items {
        name
        price
        description
      }
    }`).then(({ data }) => {
      const { name, items } = data.allCategories[0]
      this.setState({ name, items })
    })
  }

  render () {
    return <section id='menu' className='menuItems'>
      <h3>{this.state.name}</h3>
      <div className='wrapper'>
        {this.state.items.map((item, i) =>
          <div className='row' key={i}>
            <h4 className='box'>{item.name}</h4>
            <div className='box desc'>{item.description}</div>
            <div className='box price'>{item.price / 100}</div>
          </div>
      )}
      </div>
    </section>
  }
}
export default Menu

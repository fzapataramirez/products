import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
    <NavLink className="categoriesContainer__link" activeClassName="categoriesContainer__link--active"
        exact to={filter === 'All' ? '/products/' : `/products/${filter}`}>
        {children}
    </NavLink>
)

export default FilterLink
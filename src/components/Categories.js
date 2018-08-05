import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink'
import '../styles/categories.css'

class Categories extends Component {
    render() {
        return (
            <div className="categoriesContainer">
                Categories
                <FilterLink filter='All' name='All'>All</FilterLink>
                <FilterLink filter='Tech' name='Tech'>Tech</FilterLink>
                <FilterLink filter='Services' name='Services'>Services</FilterLink>
                <FilterLink filter='Office' name='Office'>Office</FilterLink>
            </div>            
        );
    }
}

export default Categories
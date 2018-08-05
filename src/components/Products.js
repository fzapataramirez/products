import React, { Component } from 'react';
import Categories from './Categories';
import VisibleProductList from '../containers/VisibleProductList';

const Products = ({ match: { params } }) => {
    return (
        <div>
            <Categories></Categories>
            <VisibleProductList filter={params.filter || 'All'}></VisibleProductList>
        </div>

    )
}

export default Products;
import React, { Component } from 'react';
import Product from './Product';


class ProductList extends Component {
    render() {
        var totalHidden = this.props.totalCount - this.props.products.length;
        var hiddenSpanClass = this.props.categoryFilter === 'All' ? 'hide' : '';

        return (
            <div className="productList">
                <span>Showing <strong>{this.props.products.length} </strong> products</span>
                <span className={hiddenSpanClass}> - Hidden <strong>{totalHidden}</strong></span>
                {
                    this.props.products.map(function (product) {
                        return <Product key={product.id} {...product}></Product>;
                    })
                }
            </div>
        );
    }
}

export default ProductList;
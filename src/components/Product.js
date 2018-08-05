import React, { Component } from 'react';
import '../styles/product.css'


class Product extends Component {
  render() {
    return (
      <div className="card w75 productList__product">
        <div className="card-body">

          <div className="product__productTitle">{this.props.name}</div>
          <div className="product__productBrand"><span>{this.props.categories} - {this.props.brand}</span></div>


          <div className="row product__productDetails">
            <div className="col col-m2">
              <img src={this.props.photo} alt="Product photo" width="150" />
            </div>
            <div className="col col-m10">

              <div className="product__productDescription">{this.props.description}</div>
              <div><strong>Stock: </strong>{this.props.stock}</div>
              <div><strong>Price: </strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.price)}</div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Product;
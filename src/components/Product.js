import React, { Component } from 'react';
import '../styles/product.css'


class Product extends Component {
    render() {
      return (        
          <div className="card w75 productContainer">
            <div className="card-body">
              <div className="row justify-content-start">
                <div className="col col-12 productTitle">{this.props.name}</div>
                <div className="col col-12 text-left font-italic"><span>{this.props.categories} - {this.props.brand}</span></div>
              </div>

              <div className="row productDetails">
                <div className="col col-m2">
                  <img src={this.props.photo} alt="Product photo" width="150" />
                </div>
                <div className="col col-m10">
                  <div className="row">
                    <div className="col col-12 productDescription">{this.props.description}</div>
                    <div className="col col-12"><strong>Stock: </strong>{this.props.stock}</div>
                    <div className="col col-12"><strong>Price: </strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.price)}</div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          /* <div className="col">{this.props.id} - {this.props.name}</div>               */
              
      );
    }
  }
  
  export default Product;
  
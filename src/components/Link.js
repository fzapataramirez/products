import React, { Component } from 'react';


class Link extends Component {
    render() {
        var style = this.props.selected ? 'selected' : '';        
        return (
            <div className={style} onClick={this.props.onClick}>{this.props.name}</div>
        );
    }
  }
  
  export default Link;
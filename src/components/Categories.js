import React,{ Component } from 'react';
import FilterLink from '../containers/FilterLink'
import '../styles/categories.css'

class Categories extends Component {
    constructor(){
        super();
        this.state = {
            categories:  ['All', 'Tech', 'Services', 'Office'],
            selectedIndex: 0
        }
    }

    // categorySelected(index){

    //     // The click handler will update the state with
    //     // the index of the focused menu entry

    //     this.setState(Object.assign({},this.state,{selectedIndex: index}));
    // }

    render(){
        var self = this;
        return (            
            <div>
                <FilterLink filter='All' name='All'></FilterLink>
                <FilterLink filter='Tech' name='Tech'></FilterLink>
                <FilterLink filter='Services' name='Services'></FilterLink>
                <FilterLink filter='Office' name='Office'></FilterLink>
                
            </div>
        );
    }
}

export default Categories
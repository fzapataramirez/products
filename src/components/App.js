import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles//App.css';
import Categories from './Categories';
import VisibleProductList from '../containers/VisibleProductList';

class App extends Component {  
  render() {
    return (

    //   <NavigationDrawer
    //    drawerTitle="react-md with CRA"
    //    toolbarTitle="Welcome to react-md"
    //  >
    //    <div className="App">
    //      <header className="App-header">
    //        <img src={logo} className="App-logo" alt="logo" />
    //        <h1 className="App-title">Welcome to React</h1>
    //      </header>
    //      <p className="App-intro">
    //        To get started, edit <code>src/App.js</code> and save to reload.
    //      </p>
    //    </div>
    //  </NavigationDrawer>









          
      
      <div className="App">
      <div className="row">
        Navigation bar
      </div>

      <div className="row">
        <div className="col">
          <Categories></Categories>
        </div>
        <div className="col col-10">
          <VisibleProductList></VisibleProductList> 
        </div>

      </div>

      
      <div>
        
      </div>
      
      </div>
      
    );
  }
}

export default App;

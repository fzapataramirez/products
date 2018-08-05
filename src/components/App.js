import React, { Component } from 'react';
import '../styles//App.css';
import { Route, Link } from 'react-router-dom'
import Clients from './Clients'
import Products from './Products';
import Contacts from './Contacts';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <header className="mainHeader">
            <Link className="mainHeader__navLink" to="/">Home</Link>
            <Link className="mainHeader__navLink" to="/products">Products</Link>
            <Link className="mainHeader__navLink" to="/clients">Clients</Link>
            <Link className="mainHeader__navLink" to="/contacts">Contact</Link>
          </header>
        </div>
        <div className="row">
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/products/" component={Products} />
            <Route exact path="/products/:filter?" component={Products} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/contacts" component={Contacts} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;

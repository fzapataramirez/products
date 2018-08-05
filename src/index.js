import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/store";

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'));
registerServiceWorker();
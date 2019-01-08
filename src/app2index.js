import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './app2/APP2';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {myReducers, addGoods, deleGoods, addGoodsAsync} from './app2/react-redux-reducer';

// let store = createStore(myReducers, applyMiddleware(thunk));

// let store = createStore(myReducers);
let store = createStore(myReducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));

ReactDOM.render(
    <Provider  store={store}>
        <App2/>
    </Provider>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import App1 from './app1/App1';
import AppContext from './providerQuestion/App'

import {myReducers, addGoods, deleGoods, addGoodsAsync} from './app1/redux-reducer1'





let store = createStore(myReducers, applyMiddleware(thunk));

let renderfn = () => ReactDOM.render(
    <AppContext
        store={store}
        addGoods={addGoods}
        deleGoods={deleGoods}
        addGoodsAsync = {addGoodsAsync}
    />,
    document.getElementById('root'));
renderfn()

store.subscribe(renderfn)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

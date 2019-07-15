import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './store/reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const AppWithProvider=<Provider store={store}><App /></Provider>

ReactDOM.render(AppWithProvider, document.getElementById('root'));
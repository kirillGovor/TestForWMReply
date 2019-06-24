import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Createstore from './store';

import { applyMiddleware, createStore } from "redux";
import { save, load } from 'redux-localstorage-simple';
import reducer from "./reducers/index"

const createStoreWithMiddleware 
    = applyMiddleware(
        save() // Saving done here
    )(createStore)
  
const store = createStoreWithMiddleware(
    reducer,    
    load() // Loading done here
)    


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


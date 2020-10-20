import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {netSearchcontent} from './reducersnet';
import './index.css';
import App from './App';
import 'tachyons';



const store = createStore(netSearchcontent);


ReactDOM.render(

    <Provider store = {store}>
    <App />
    </Provider>,
   
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


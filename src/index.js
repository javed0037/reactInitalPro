import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore}  from 'redux';

//STORE       -> Globalizied State
// Action     -> Increment

const increment  = ()=>{
    return {
        type:'INCREMENT'
    }
}
const decerement  = ()=>{
    return {
        type:'DECEREMENT'
    }
}
//Resucer     -> 
const counter  = (state=0,action)=>{
switch(action.type){

    case "INCREMENT" : return state+1
    case "DECEREMENT"  : return state-1
  
}
}

let store  =  createStore(counter);
store.subscribe(()=> console.log("store ----",store.getState()));

store.dispatch(increment)
//Dispatched  ->

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

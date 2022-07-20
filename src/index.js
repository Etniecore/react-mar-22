import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";


let store = createStore((state = 0, action)=>{ // default state// actions from buttons(i.e: type and payload)
    switch (action.type){
        case 'inc':
            return state + action.payload; // our current state and payload from the dispatch which is linked to certain button
        case 'dec':
            return state - action.payload; // our current state and payload from the dispatch which is linked to certain button
        case 'reset':
            return 0;
        default:
            return state;
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>

    <Provider store={store}>
        <App/>
    </Provider>


    </React.StrictMode>)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

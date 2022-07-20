import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";


let store = createStore((state= {users:[],user:null},action)=> {

    switch (action.type){
        case 'get_users':
            return {...state, users: action.payload}
        case 'one_user':
            return {...state, user: state.users.find(user=>user.id==action.payload)}
        default:
            return state;
    }



})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bike from './Bike';
import MyList from './MyList';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const items = [
  {
    id: 1,
    name: 'Alexander'
  },
  {
    id: 2,
    name: 'Bill'
  },
  {
    id: 3,
    name: 'Chris'
  }
]
root.render(
  <React.StrictMode>
    <Bike />
    <MyList items={items} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

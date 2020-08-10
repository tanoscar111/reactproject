import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Name from './Name'
import ComponentCha from './ComponentCha'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header name="Lethanhtan"/>
    <Header name="Lethanhtan"/>
    <Name  name="cua component cha" adrees="day la cua thang cha" age="?"/>
    <Name  name="cua component cha" adrees="day la cua thang cha" age="30"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

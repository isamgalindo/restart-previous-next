import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Principal from './Principal';
import white from "./white.png";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div>
    <Principal title="Today's Quiz" description="Hoy vamos a hacer un quiz sobre React y UseEffect" answer="" count = {0} image={white} />
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

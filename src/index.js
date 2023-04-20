import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './home';
import Skills from './Skills';
import Nav from './Nav';
import Project from './Project';
import Contact from './Contact';
import "./home.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div class="main">
  <Nav/>
  <Home/><hr/>
  <Skills/> <hr/>
  <Project/> <hr/>
  <Contact/> <hr/>
  </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

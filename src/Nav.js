import React, { Component } from 'react'
import './home.css';
import "./nav.css";
import Profilename from './Profilename';
export class Nav extends Component {
  render() {
    return (  
    <div class="nav">
    <ul>
      <li style={{color:"white",float:"left"}}><Profilename/></li>
      <li><a href="#home">home</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#project">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    </div>
    )
  }
}

export default Nav
import React, { Component } from 'react'

import './home.css';

export class Skills extends Component {
  render() {
    return (
      <div id ="skills">
      <h1 class="head">Skills</h1>
      <div style={{float:"left" , marginLeft:"20vw"}} class="skills">
      <h2>Programming Languages</h2>
        <li>Java</li>
        <li>Python</li>
        <li>C</li>
        <li>C++</li>
      </div>
      <div style={{float:"right" , marginRight:"20vw"}} class="skills">
      <h2>Platforms Worked with</h2>
        <li>Visual Studio</li>
        <li>Ecllipse</li>
        <li>Mysql</li>
        <li>Spring tool Suite</li>
      </div>
      </div>
    )
  }
}

export default Skills
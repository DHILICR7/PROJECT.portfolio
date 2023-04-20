import React, { Component } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './home.css'

export class Project extends Component {
  render() {
    return (
      <div id ="project">
      <h1 class="head">Projects Done</h1>
      <div class="project">
      <p>I had done a full stack project regarding FOOTBALL SHOPPING APP </p>
      <p>I used the RestAPI and reactJS for this project </p>
      <a href='https://github.com/DHILICR7'><GitHubIcon fontSize='large' color='disabled'/></a>
      </div>
      </div>
    )
  }
}

export default Project
import React, { Component } from 'react'
import "./nav.css";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export class Profilename extends Component {
  render() {
    return (
        <div class="pname">
        <AccountCircleOutlinedIcon fontSize='large'/> <i><b>
        <span style={{"--i":1}}>D</span>
        <span style={{"--i":2}}>H</span>
        <span style={{"--i":3}}>I</span>
        <span style={{"--i":4}}>L</span>
        <span style={{"--i":5}}>I</span>
        <span style={{"--i":6}}>B</span>
        </b></i>
        </div>
    )
  }
}

export default Profilename
import React, { Component } from 'react'
import "./home.css";
import Comms from './Comms';
export class Contact extends Component {
  render() {
    return (
      <>
      <div id ="contact">
      <h1 class="head">contact</h1>
      <div style={{float:"left" , marginLeft:"20vw"}} class="contact">
        <li><b>Phone : </b> <br/><span style={{paddingLeft:"50px"}}>8220656111</span></li>
        <li><b>Email : </b> <br/><span style={{paddingLeft:"50px"}}> dhilibancr7@gmail.com </span></li>
      </div>
      <div style={{float:"right" , marginRight:"20vw"}} class="contact">
        <li><b>Address : </b> <br/> <span style={{paddingLeft:"50px"}}>PERUR,COIMBATORE</span><br/><span style={{paddingLeft:"50px"}}>TAMILNADU </span></li><br/>
      </div>
      <Comms/>
      </div>
      </>
    )
  }
}

export default Contact
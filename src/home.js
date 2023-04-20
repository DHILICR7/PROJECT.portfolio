import React, { Component } from 'react'
import './home.css';
import Name from './name';
import Comms from './Comms';

export class Home extends Component {
  render() {
    return (
      <>
      <html>
      <div id = "home">
      <div class="helloimage">
      <img src="hello.png" alt="home"/>
      <h1 class="homeh1"> Hi There!</h1>
      </div>
      <div style={{position:"absolute",top:"50vh",right:"25%"}}>
      <h2 class="homeh2"> I am <Name/>
      </h2>
      <p style={{fontSize:"20px" , color:"grey"}}>  A student in SKCET,Coimbatore...</p>
      </div>
      <div style={{position:'absolute',bottom:"30px",right:"0"}}>
      <Comms/>
      </div>
      </div>
      </html>
      </>
    )
  }
}

export default Home
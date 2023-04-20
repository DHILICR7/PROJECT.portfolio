import React, { Component } from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import GitHubIcon from '@mui/icons-material/GitHub';
export class Comms extends Component {
  render() {
    return (
      <div><div style={{paddingTop:"250px",textAlign:"center"}}>
      <a href='https://in.search.yahoo.com/search?fr=mcafee&type=E211IN826G0&p=gmail+login'><GoogleIcon fontSize='large' style={{marginRight:"10px"}}/></a>
      <a href='https://www.facebook.com/'><FacebookOutlinedIcon fontSize='large'style={{marginRight:"10px"}}/></a>   
      <a href='https://www.linkedin.com/feed/'><LinkedInIcon fontSize='large' style={{marginRight:"10px"}}/></a>
      <a href='https://web.whatsapp.com/'><WhatsAppIcon fontSize='large' style={{marginRight:"10px"}}/></a>
      <a href='https://github.com/DHILICR7'><GitHubIcon fontSize='large' style={{marginRight:"10px"}}/></a>
      </div>
      </div>
    )
  }
}

export default Comms
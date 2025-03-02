import React from 'react'
import logo from '../../../Assets/gallery/logo2.png'
import mobile from '../../../Assets/gallery/Group 1204.png';
import app from '../../../Assets/gallery/app.png'
import play from '../../../Assets/gallery/google.jpg'
import './mobile.css'
export default function Mobile() {
  return (
    <div className='mobile' style={{marginTop:'70px'}}>
        <div className='container'>
        <div className='download'>
   <h2>
    <img src={logo} style={{width:'300px'}}/>
    <h3>Download Our App <br/>and get All Our Benifits</h3>
    <a href='' style={{background:'var(--linear-gradient)'}}>Download Now</a>
    <div className='store'>
        <img src={app} />
        <img src={play} />
    </div>
    </h2>
   </div>
   <img src={mobile} style={{width:"500px"}}/>
        </div>
  
    </div>
  )
}
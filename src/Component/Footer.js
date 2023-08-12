import React from 'react'
import './Footer.css'
import { Facebook ,Instagram, Twitter, Youtube} from 'lucide-react'

export default function Footer() {
  return (
    <>
    <div className='container' id='foot'>
        <div >
            <h5 style={{color:'white',marginTop:'5px'}}>Official</h5>
            <ul className='first'>
                <li>Director</li>
                <li>Request Information</li>
                <li>Accredetation</li>
                <li>Website Feedback</li>
            </ul>
        </div>
        <div>
        <h5 style={{color:'white',marginTop:'5px'}}>Action</h5>

            <ul className='first'>
                <li>Addmission</li>
                <li>Academic</li>
                <li>Research</li>
                <li>Technology</li>
            </ul>
        </div>
        <div>
        <h5 style={{color:'white',marginTop:'5px'}}>Social</h5>

            <ul className='first'>
                <li>Visit</li>
                <li>Apply</li>
                <li>News</li>
                <li>Calendar</li>
            </ul>
        </div>
        <div>
        <h5 style={{color:'white',marginTop:'5px'}}>Community</h5>

            <ul className='first'>
                <li>Students</li>
                <li>Alumuni</li>
                <li>Families</li>
                <li>Community</li>
            </ul>
        </div>

    </div>
    <div className='container'>
         <ul>
            <li><Facebook /></li>
            <li><Instagram /></li>
            <li><Twitter /></li>
            <li><Youtube /></li>
         </ul>
    </div>
    <p style={{color:'white'}}> Copyright © 2023 Edtech.com.</p>
    </>
  )
}

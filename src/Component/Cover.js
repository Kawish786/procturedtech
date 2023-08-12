import React from 'react'
import './Cover.css'
import { useNavigate } from 'react-router-dom'
import img from '../Images/images.png'
import { withTheme } from '@emotion/react'

function Cover() {
  const nav = useNavigate()
  const handleSubmit =()=>{
      nav('/joinus')
  }
  return (
    <>
    <div className='cover'>
        <h2 className='head'>
            <span className='subhead'>Online Learning</span><br/>
            Platform
        </h2>
        <p className='mainpara'>Build skills with courses, certificates<span className='para'>, and degrees online from world- </span><br/>class universities and companies.</p>
        <button className='btn' style={{color:'white'}} onClick={handleSubmit}>Join For Free</button>
    </div>
    <div id='next'>
      <h2 >Our Team</h2>
      <p style={{color:'white'}}>Talent, respect and loyalty. Together we progress as one.</p>
      <div className='container'>
        <div>
        <img id='image' src={img} alt=''/>
        <h4 id='name'>JOHN</h4>
        </div>
        <div>
        <img id='image' src={img} alt=''/>
        <h4 id='name'>MICHAEL</h4>
        </div>
        <div>
        <img id='image' src={img} alt=''/>
        <h4 id='name'>PETER</h4>
        </div>
        <div>
        <img id='image' src={img} alt=''/>
        <h4 id='name'>JAMESON</h4>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default Cover
import React from 'react'
import './About.css'
import img1 from '../Images/pexels-christina-morillo-1181332.jpg'
import img2 from '../Images/pexels-dids-1707580.jpg'
import img3 from '../Images/pexels-sheep-1846383.jpg'


function About() {
  return (
    <>
    <div className='container'>
    <div className="card" style={{width:'18rem'}}>
  <img src={img1} className="card-img-top" alt=""/>
  <div className="card-body">
  <h5 class="card-title">Global Access</h5>

    <p className="card-text">Edtech expands education reach, democratizing knowledge access across geographical boundaries.</p>
  </div>
</div>

<div className="card" style={{width:'18rem'}}>
  <img src={img2} className="card-img-top" alt=""/>
  <div className="card-body">
  <h5 class="card-title">Online Learning</h5>

    <p className="card-text">Edtech firms revolutionize education through digital platforms, offering flexible online learning experiences.</p>
  </div>
</div>

<div className="card" style={{width:'18rem'}}>
  <img src={img3} className="card-img-top" alt=""/>
  <div className="card-body">
  <h5 class="card-title">Personalized Education </h5>

    <p className="card-text"> Edtech companies enable tailored learning journeys using data-driven insights and adaptive technologies.</p>
  </div>
</div>
</div>
    <div>
        <h4 className='head'>About Supreme</h4>
        <p style={{color:'salmon'}}><label>EdTech,</label> started in 2023, is a world most trusted online platform & certification in India, specializing in Certification, Courses & Degree, 40% for oversea Students.</p>
    </div>
    </>
  )
}

export default About
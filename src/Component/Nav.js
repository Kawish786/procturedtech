import React, { useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import { MessagesSquare } from 'lucide-react'
import { Home } from 'lucide-react'
import { GraduationCap } from 'lucide-react'
import { SmartphoneNfc } from 'lucide-react';
import { AlignJustify } from 'lucide-react'

function Nav() {
  const nav =useNavigate()
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleHome=()=>{
    nav('/')
  }
  const handleCourse=()=>{
    nav('/courses')
  }
  const handleContact=()=>{
    nav('/contact')
  }
  const handleAbout=()=>{
    nav('/about')
  }
  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  return (
    <div className='navbar'>
        <h2 onClick={handleHome}>EdTech</h2>
        <div className={`navpart ${isMobileMenuActive ? 'active' : ''}`}>
            <ul>
                <li onClick={handleHome}><Home /> Home</li>
                <li onClick={handleCourse}><GraduationCap /> Courses</li>
                <li onClick={handleAbout}><MessagesSquare /> About</li>
                <li onClick={handleContact}><SmartphoneNfc /> Contact</li>
            </ul>
            <button onClick={toggleMobileMenu}>
                <AlignJustify style={{ height: '15px' }} />
            </button>
            <button>Login <LogIn style={{height:'15px'}}/></button>
        </div>
    </div>
  )
}

export default Nav
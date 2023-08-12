import React, { useState } from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'
import {ChevronsDown} from 'lucide-react'

function Sidebar() {
  const nav = useNavigate()
  const handleFinance = () => {
        nav('/courses/finance')
        setIsMobileMenuOpen(false)
  }
  const handleEnt=()=>{
    nav("/courses/entrepreneurship")
    setIsMobileMenuOpen(false)
  }
  const handleCom=()=>{
    nav('/courses/communication')
    setIsMobileMenuOpen(false)
  }
  const handleMang=()=>{
    nav('/courses/management')
    setIsMobileMenuOpen(false)
  }
  const handleSales=()=>{
    nav('/courses/sales')
    setIsMobileMenuOpen(false)
  }
  const handleStrat=()=>{
    nav('/courses/strategy')
    setIsMobileMenuOpen(false)
  }
  const handleOptn=()=>{
    nav('/courses/operations')
    setIsMobileMenuOpen(false)
  }
  const handlePm=()=>{
    nav('/courses/project-manager')
    setIsMobileMenuOpen(false)
  }
  const handleBl=()=>{
    nav('/courses/business-law')
    setIsMobileMenuOpen(false)
  }
  const handleDana=()=>{
    nav('/courses/data&analytics')
    setIsMobileMenuOpen(false)
  }
  const handleHome=()=>{
    nav('/courses/home-business')
    setIsMobileMenuOpen(false)
  }
  const handleHuman=()=>{
    nav('/courses/human-resource')
    setIsMobileMenuOpen(false)
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
  };
  
 
  return (
    <div className="sidebar">
    <h2 className='sidehead'>Courses <ChevronsDown /></h2>
    <button className="mobile-toggle" onClick={handleMobileToggle}>
        Check Courses
      </button>
    <ul className={`sidelist ${isMobileMenuOpen ? 'active' : ''}`}>
      <li>
        <label onClick={handleFinance}>Finance</label>
      </li>
      <li>
        <label onClick={handleEnt}>Entrepreneurship </label>
      </li>
      <li>
        <label onClick={handleCom}>Communication</label>
      </li>
      <li>
        <label onClick={handleMang}>Management</label>
      </li>
      <li>
        <label onClick={handleSales}>Sales</label>
      </li>
      <li>
        <label onClick={handleStrat}>Strategy</label>
      </li>
      <li>
        <label onClick={handleOptn}>Operations</label>
      </li>
      <li>
        <label onClick={handlePm}>Project Manager</label>
      </li>
      <li>
        <label onClick={handleBl}>Business Law</label>
      </li>
      <li>
        <label onClick={handleDana}>Data & Analytics</label>
      </li>
      <li>
        <label onClick={handleHome}>Home Business</label>
      </li>
      <li>
        <label onClick={handleHuman}>Human Resource</label>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar
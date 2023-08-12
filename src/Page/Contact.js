import React, { useState } from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';
import { MailCheck } from 'lucide-react';
import { MessageSquare } from 'lucide-react';

export default function Contact() {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        message: '',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
      };
    const [errorMessage, setErrorMessage] = useState('');
    const nav=useNavigate()
    const handleSubmit=()=>{
        const { name, email, message } = inputValues;
            if (name && email && message)
       {
      
            alert('Feedback Submitted')
            nav('/')
      }
      else{
           setErrorMessage('Please fill all the input fields')
     }
    }
  return (
    
    <>
    <div className='content'>
        
        <div className="form-group  ">
        <h3 className='text-light'>Get <label id='in'>In</label> Touch</h3>
            <label htmlFor="name"><UserCircle2 /> Name<span style={{color:'red'}}>*</span></label>
            <input  type="text" className="form-control"  name='name' id="name"  onChange={handleInputChange} value={inputValues.name} placeholder="Enter Name"/>
        
       
            <label htmlFor="email" ><MailCheck /> Email address<span style={{color:'red'}}>*</span></label>
            <input  type="email" className="form-control "  name='email' id="email"  onChange={handleInputChange} value={inputValues.email} placeholder="Enter Email"/>
        
       
            <label htmlFor="message"><MessageSquare /> Message<span style={{color:'red'}}>*</span></label>
            <textarea  name='message' id='message' className="form-control " onChange={handleInputChange} value={inputValues.message} placeholder='Message' />
            <br/>  {errorMessage && <p style={{color:'white',textAlign:'center'}}>{errorMessage}</p>}
            <div className="text-center">
                <button type="submit" className="btn btn-outline-light" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
  
    </div>
    <div>
      <h2 style={{textDecoration:'underline'}} >Contact Us</h2>
      <p style={{color:'salmon'}}><label>Mail</label> : info@edtech.com</p>
      <p style={{color:'salmon'}}><label>Tel</label> : 0512-55449855</p>
      <p style={{color:'salmon'}}><label>Address</label> : Kanpur, India</p>
    </div>
    </>
  )
}

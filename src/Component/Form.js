  import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom';
import {MailCheck} from 'lucide-react'
import {UserCircle2} from 'lucide-react'
import {Smartphone} from 'lucide-react'
import {MapPin} from 'lucide-react'
import {School} from 'lucide-react'


function Form() {
    const [inputValues,setInputValues]=useState({
        email:'',
        fname:'',
        lname:'',
        mobile:'',
        location: '',
        education : '',
        

    });
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const handleInputChange=(e)=>{
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    }
    const [errorMessage, setErrorMessage] = useState('');

    const nav = useNavigate()
    const handleClick=()=>{
        const { email, fname, lname, location, education, mobile} = inputValues;
    if (fname && email && lname && location && education && selectedValue && mobile) 
    {
      
      alert('Form Submitted Successfully')
      nav('/')
      
    }
    else{
      setErrorMessage('Please fill all the input fields')
    }
    }
  return (
   
    <>
    <h1 className='heading'> Join Courses at EdTech, Inc</h1>
    <h2 className='head'>Join our team</h2>
    <div className='container'>
        <form className='form'>
        <label className="label" htmlFor='email' ><MailCheck /> Email <span className="ast">*</span></label>
        <input value={inputValues.email} onChange={handleInputChange} className="text" id='email' name='email' type="email" placeholder="name@example.com" />
        <label class="label" htmlFor='fname'><UserCircle2 /> First Name <span class="ast">*</span></label>
        <input value={inputValues.fname} onChange={handleInputChange} className="text" id='fname'  name='fname' type="text"  />
        <label className="label" htmlFor='lname' ><UserCircle2 /> Last Name <span className="ast">*</span></label>
        <input value={inputValues.lname} onChange={handleInputChange} className="text" id='lname' name='lname'type="text"  />
        <label class="label" htmlFor='mobile'><Smartphone /> Mobile <span class="ast">*</span></label>
        <input value={inputValues.mobile} onChange={handleInputChange} className="text" id='mobile'  name='mobile' type="number"  />
        <label className="label" htmlFor='location' ><MapPin /> Current Location <span className="ast">*</span></label>
        <input value={inputValues.location} onChange={handleInputChange} className="text" id='location' name='location' type="text"  />
        <label className="label" htmlFor='education'><School /> Highest Education <span className="ast">*</span></label>
        <input value={inputValues.education} onChange={handleInputChange} className="text"  id='education' name='education' type="text"  /> 
        <select className='select' onChange={handleSelectChange} value={selectedValue} required >
            <option value="">Select your course of study <span className="ast">*</span></option>
            <option value="Finance" >Finance</option>
            <option value="Entrepreneurship" >Entrepreneurship</option>
            <option value="Communication" >Communication</option>
            <option value="Management" >Management</option>
            <option value="Sales" >Sales</option>
            <option value="Strategy" >Strategy</option>
            <option value="Operations" >Operations</option>
            <option value="ProjectManager" >Project Manager</option>
            <option value="BusinessLaw" >Business Law</option>
            <option value="Data&Analytics" >Data & Analytics</option>
            <option value="HomeBusiness" >Home Business</option>
            <option value="HumanResource" >Human Resource</option>
        </select> 
        </form>
    </div>
    <div>
        <p style={{color:'white'}}> Be the part of our organization to take your career onto the top.<br/><span className='ast'>*</span>By Clicking on submit button you agree on the <p id='term'>terms and condition</p> </p>
    {errorMessage && <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>}
        <button onClick={handleClick}>Submit</button>
    </div>
   
    </>
  )
}

export default Form
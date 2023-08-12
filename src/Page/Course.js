import React from 'react'
import './Course.css'
import {Routes, Route} from 'react-router-dom'
import Sidebar from '../Component/Sidebar'
import Course1 from '../Courses/Course1'
import Course2 from '../Courses/Course2'
import Course3 from '../Courses/Course3'
import Course4 from '../Courses/Course4'
import Course5 from '../Courses/Course5'
import Course6 from '../Courses/Course6'
import Course7 from '../Courses/Course7'
import Course8 from '../Courses/Course8'
import Course9 from '../Courses/Course9'
import Course10 from '../Courses/Course10'
import Course11 from '../Courses/Course11'
import Course12 from '../Courses/Course12'
import { GraduationCap } from 'lucide-react'
import Head from '../Courses/Head'

export default function Course() {
  return (
    <>
       
    <div className='main'>
    <div className='side'>
        <Sidebar/>
    </div>
    <div className='course'>
        <h2 id='h'><GraduationCap /> Find Course</h2>
        <Routes>
            <Route path='/' element={<Head/>}/>
            <Route path='/finance' element={<Course1/>}/>
            <Route path='/entrepreneurship' element={<Course2/>}/>
            <Route path='/communication' element={<Course3/>}/>
            <Route path='/management' element={<Course4/>}/>
            <Route path='/sales' element={<Course5/>}/>
            <Route path='/strategy' element={<Course6/>}/>
            <Route path='/operations' element={<Course7/>}/>
            <Route path='/project-manager' element={<Course8/>}/>
            <Route path='/business-law' element={<Course9/>}/>
            <Route path='/data&analytics' element={<Course10/>}/>
            <Route path='/home-business' element={<Course11/>}/>
            <Route path='/human-resource' element={<Course12/>}/>
        </Routes>
    </div>
    </div>
    </>
  )
}

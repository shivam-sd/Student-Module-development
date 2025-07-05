import React from 'react'
import { Route , Routes } from 'react-router-dom'
import StudentInfoForm from './components/StudentInfoForm'
import Attendence from './components/Attendence'
import Results from './components/Results'
import Homework from './components/Homework'
import Timetable from './components/Timetable'
import Subjects from './components/Subjects'
import StrudentInfo from './components/StrudentInfo'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StudentInfoForm />} />
        <Route path='/studentinfo' element={<StrudentInfo />} />
        <Route path='/subjects' element={<Subjects/>} />
        <Route path='/attendance' element={<Attendence />} />
        <Route path='/results' element={<Results />} />
        <Route path='/homework' element={<Homework />} />
        <Route path='/timetable' element={<Timetable />} />
      </Routes>
    </div>
  )
}

export default App

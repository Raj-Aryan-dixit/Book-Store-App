import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
function Courses() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Course></Course>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Courses

import React from 'react'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import {Route, Routes}from "react-router-dom"
import Signup from './components/Signup';
import About from './components/About/About';
function App() {
  return (
    <>
      {/* <Home></Home>
  <Course></Course> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/course" element={<Courses></Courses>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App

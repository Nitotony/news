


import './App.css'
import { Routes, Route } from "react-router-dom";
import Newsland from "./pages/newsland.jsx";
import Homepage from './pages/homepage';
import Signup from './pages/signup.jsx';


import React from 'react'

export default function App() {
  return (
    <div>

      
        <Routes>
          <Route path="/spec-news" element={<Newsland />} />
          <Route path='/' element={<Homepage />}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      

      
    </div>
  );
}

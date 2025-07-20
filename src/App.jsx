import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./components/Home.jsx";
import PastWorks from './components/PastWork.jsx';
import BookACall from "./components/BookACall.jsx";
import ServicesDiary from "./components/ServiceDiary.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastworks" element={<PastWorks />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/bookcall" element={<BookACall/>}/>
        <Route path="/services/diary" element={<ServicesDiary/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

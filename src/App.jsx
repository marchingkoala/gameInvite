import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import InvitePage from './InvitePage';

function App() {
  const [name, setName] = useState("")

  return (
      <Routes>
        <Route path="/" element={<HomePage name={name} setName={setName}/>}/>
        <Route path="/invite" element={<InvitePage name={name} />}/>
      </Routes>
  )
}

export default App

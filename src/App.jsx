import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Entrance from './Entrance';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import InvitePage from './InvitePage';

function App() {
  const [name, setName] = useState("")

  return (
      <Routes>
        <Route path="/" element={<Entrance />}/>
        <Route path="/landing" element={<LandingPage />}/>
        <Route path="/rsvp" element={<HomePage name={name} setName={setName}/>}/>
        <Route path="/invite" element={<InvitePage name={name} />}/>
      </Routes>
  )
}

export default App

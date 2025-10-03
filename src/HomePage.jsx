import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage({name, setName}){
    const navigate = useNavigate();
useEffect(()=>{
        setName('')
    }, [])

 return (
    <div className='homepage_content' style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.title}>You Have Been Summoned...</h1>
          <input
          type="text"
          placeholder="What is your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button onClick={() => navigate('/invite')} style={styles.button} className="halloween-button">
          We've been waiting
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
  height: '100vh',
  width: '100vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#f5e3c3',
    padding: '0 20px',
  },
  input: {
    fontFamily: '"Cormorant Garamond", serif',
    fontSize: '1.2rem',
    padding: '10px 14px',
    borderRadius: '8px',
    border: '2px solid #b10f0f',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#f5e3c3',
    textAlign: 'center',
    marginBottom: '1.5rem',
    outline: 'none',
    width: '100%',
    maxWidth: '300px',
  },
  title: {
  fontFamily: '"Cormorant Garamond", serif',
  fontSize: '2.7rem',
  marginBottom: '1.5rem',
  color: '#f5e3c3',
  textShadow: '0 0 12px crimson, 0 0 25px black',
  letterSpacing: '2px',
  fontStyle: 'italic',
}
}

export default HomePage;
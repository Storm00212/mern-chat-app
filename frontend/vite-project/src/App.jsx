import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Login from './pages/home/login/login';
import SignUp from './pages/home/signup/signup';
import Home from './pages/home/home';

function App() {
  return <div className='p-4 h-screen flex items-center justify-center'>
      <Home />
  </div>
}

export default App;

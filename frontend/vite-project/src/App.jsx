import './App.css';
import Login from './pages/home/login/Login';
import SignUp from './pages/home/signup/SignUp'; // Corrected case
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import { Navigate } from 'react-router-dom';


function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      
      <Router>
        
        <Routes>
          <Route path='/' element={authUser?<Home />:<Navigate to ='/login'/>} />
          <Route path='/login' element={authUser?<Navigate to ='/'/>:<Login />} />
          <Route path='/signup' element={authUser?<Navigate to ='/'/>:<SignUp />} />

        </Routes>
        <Toaster position="top-centre"
        reverseOrder= {false}/>
      </Router>
      
    </div>
  );
}

export default App;

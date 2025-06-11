import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import UserPage from './pages/userPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/user/:email" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

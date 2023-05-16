import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/Main/MainPage';
import RegPage from './components/RegPage/RegPage';
import { useState } from 'react';

export const App = () => {
  const [user, setUser] = useState({name: document.cookie.split("=")[1]}) 
  return (
    <>
      {user.name ? <NavBar /> : null }
      <Routes>
        <Route path='/' element={<MainPage user={user} />} />
        <Route path='/reg' element={<RegPage setUser={setUser} />} />
      </Routes>
    </>
  );
}



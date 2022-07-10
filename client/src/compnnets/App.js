import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import  Auth  from '../hoc/auth'


function App() {

  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);

  return (
    <Router>
    <div>
      <hr />
      <Routes>
      <Route path="/register" element={<NewRegisterPage />} />
      <Route path="/login" element={<NewLoginPage />} />
      <Route path="/" element={<NewLandingPage />} />
      </Routes>
    </div>
  </Router>
  );
}


export default App;

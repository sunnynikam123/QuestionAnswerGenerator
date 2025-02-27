import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound'
import Scan from './components/Scan';
import Ui from './components/Ui';
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div className=" mt-[72px] sm:ml-64 bodyp">

      <Routes>
        <Route path="/" element={
           <ProtectedRoute>
           <Home />
         </ProtectedRoute>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ui" element={<Ui />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/logout" element={<Logout />} />
        <Route path="/scan/tuning/:tuningValue/test/:testValue/target/:url" element={<Scan />} />
      </Routes>
    </div>
  )
}
document.getElementsByTagName("body")[0].classList.add("dark")

export default App
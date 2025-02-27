import React, { Component } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import Nav from './components/Nav'
import './index.css'
import AuthProvider from './components/Authcontext.jsx';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Nav></Nav>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)

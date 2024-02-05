import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Header from './components/Header.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx'
import Footer from './components/Footer.jsx';
import Navbar  from './components/Navbar.jsx';
// import { DropdownProvider } from './DropdownContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <Router>
            <Header/>
            {/* <Navbar/> */}
            <Routes>
              <Route path='/' Component={App}/>
              <Route path='/contact' Component={Contact}/>
              <Route path='/about' Component={About}/>
            </Routes>
            <Footer/>
          </Router>
  </React.StrictMode>,
)

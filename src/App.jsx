import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import MyFooter from './components/MyFooter';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Products/>
    <Blog/>
    <Newsletter/>
    <Contact/>
    <MyFooter/>
    <ToastContainer style={{ marginTop: '80px' }} />
    </>
  );
}

export default App;

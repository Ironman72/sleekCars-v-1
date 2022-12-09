import React from 'react';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='bg-slate-50 w-full h-screen'>
        <Homepage />
        <Services/>
        <About/>
        <Contact/>
        <Login/>
      </div>
    </>
  )
}

export default App;

import React from 'react';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import Services from './pages/Services';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='bg-slate-50 w-full h-screen'>
        <Homepage />
        <Services/>
      </div>
    </>
  )
}

export default App;

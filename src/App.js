import React from 'react';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='bg-slate-50 w-full h-screen'>
        <Homepage />
      </div>
    </>
  )
}

export default App;

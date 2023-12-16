import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [mode, setMode] = useState('light');


  const toggleMode = ()=>{
    if(mode==='light')
    {
      document.title="TextUtils Dark Mode"
      document.body.style.backgroundColor = '#00102c';
      setMode('dark');
      toast.success("Dark Mode Enabled", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    else
    {
      document.title="TextUtils Light Mode"
      document.body.style.backgroundColor = '#fff';
      setMode('light');
      toast.success("Light Mode Enabled", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

    }
  }



  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <ToastContainer />

        <div className="container">

          <Routes>
            <Route path="/" exact element={<TextForm heading={'Enter Text To Analyze'} mode={mode} toast={toast} />} />

            <Route path="/About" exact element={<About mode={mode} />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

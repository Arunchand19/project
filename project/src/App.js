import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';


function App() {
  const [mode1, setMode] = useState('light'); // changing navbar mode dark or light
  const [alert1, setAlert] = useState(null); // giving alert as state func

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null); // alert timeout for 3 seconds function
    }, 3000);
  }

  const filterMode = () => {
    if (mode1 === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // #042743 --> blue color
      showAlert("Dark mode is enabled", "success");
      document.title = 'TextSearch-darkmode'; // title name changing
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');
      document.title = 'TextSearch-lightmode';
    }
  }

  return ( 
<>                         {/*about="about"*/}
      <Navbar title="TextSearch"  mode={mode1} changeMode={filterMode} />     {/* using state of mode */}   
      <Alert alert={alert1} />
      <div className="container my-3">
        <TextForm heading='Enter the text to analyse' showAlert={showAlert} mode={mode1} />
         {/*<About/>*/}
           
          </div> 
          </>   
  );
}

export default App;

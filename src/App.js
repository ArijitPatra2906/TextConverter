import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


function App() {

  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);

  }

  const toggleMode = () =>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042723';
      showAlert("Dark mode is enable","success");
      document.title = "TextConverter-DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enable","success");
      document.title = "TextConverter-LightMode";
    }
  }

  return (
    <>
    <Navbar tittle = "TextConverter" mode={mode} toggleMode={toggleMode}/>   
    <Alert alert={alert} />
     <div className='container my-3'>          
            <Main heading = "Enter text here" showAlert={showAlert} mode={mode}/>
      </div>
    

     
    </>
  );
}

export default App;

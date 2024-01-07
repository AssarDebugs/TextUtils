
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert=(message,type) =>{
setAlert({
    msg:message,
    type:type
    })
}
setTimeout(() => {
  setAlert(null);
}, 3000);
const toggleMode=() =>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor="#003178"
  showAlert("Dark mode has been enabled", "success")
}
else{
  setMode('light');
  document.body.style.backgroundColor="white"
  showAlert("Light mode has been enabled", "success")
}}
  return (
 <>
<Navbar mode={mode} toggleMode={toggleMode} Title = "TextUtils" Home = "Home"/>
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="components">
 <TextForm mode={mode} showAlert={showAlert} Heading ="Enter text to analyise" />
    {/* <About/> */}
</div>
 </>
  );
}

export default App;

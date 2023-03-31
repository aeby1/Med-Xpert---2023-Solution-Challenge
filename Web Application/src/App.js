import './App.css';
import { Routes, Route } from 'react-router-dom'


import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import HomePage from './pages/homescreen/HomePage'
import MicTest from './content/micTesting.js/MicTesting.js'
import Dashboard from './pages/dashboard/Dashboard.js'
import Diagnosis from './content/diagnosis/Diagnosis.js';
import Diagnostics from './content/diagnostics/Diagnostics.js'
// import Files from './content/files/files.js'

function App() {

  return (
    <div className="App">
      <div className="App-header">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/MicTest" element={<MicTest />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/diagnosis" element={<Diagnosis />} />
          <Route exact path="/diagnostics" element={<Diagnostics />} /> 
         {/* <Route exact path="/files" element={<Files />} /> */}
        </Routes>

      </div>
    </div>
  );
}

export default App;

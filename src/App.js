import './App.css';
import logo from './assets/logozan.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logoyou.png';
import logo4 from './assets/logofac.png'; 
import logo5 from './assets/logoins.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import translations from './translations';
import Home from './screens/home.js';
import Landmarks from './screens/landmarks.js'
import Gastronomy from './screens/gastronomy.js';
import Events from './screens/events.js';
import History from './screens/history.js';
import Map from './screens/map.js';

function App() {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Router>
      <div className="App">
        <div className='logocube'>
          <img src={logo} alt="logo" className='logoimg'/> 
        </div>
         <div className='logocube2'>
          <img src={logo2} alt="logo" className='logoimg2'/> 
        </div>
         <div className='logocube3'>
        </div>
        <div className='logocube4'> 
        </div>
        <div className='logocube5'> 
        </div>
        <div className="language">
          <select className="languagedrop" value={language} onChange={handleLanguageChange}>
            <option value="english">English</option>
            <option value="polish">Polish</option>
          </select>
        </div>
        <div className="TopBar">
          <Link to="/home" className="TopBarBox">{translations.topBar[language].home}</Link>
          <Link to="/landmarks" className="TopBarBox">{translations.topBar[language].landmarks}</Link>
          <Link to="/gastronomy" className="TopBarBox">{translations.topBar[language].gastronomy}</Link>
          <Link to="/events" className="TopBarBox">{translations.topBar[language].events}</Link>
          <Link to="/history" className="TopBarBox">{translations.topBar[language].history}</Link>
          <Link to="/map" className="TopBarBox">{translations.topBar[language].map}</Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home language={language} />} />
          <Route path="/landmarks" element={<Landmarks language={language} />} />
          <Route path="/gastronomy" element={<Gastronomy language={language} />} />
          <Route path="/events" element={<Events language={language} />} />
          <Route path="/history" element={<History language={language} />} />
          <Route path="/map" element={<Map language={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

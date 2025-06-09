import './landmarks.css';
import React from 'react';
import translations from '../translations';
import logo from '../assets/logozan.png';
import img from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function Landmarks({ language }) {
  const t = translations.landmarks[language] || translations.landmarks.english;
  const tBottomBar = translations.bottomBar ? translations.bottomBar[language] || translations.bottomBar.english : null;
  const downloadMarketingPlan = () => {
    const link = document.createElement('a');
    link.href = require('../assets/BIP- Go back to our roots- Zacliczyn 2025.pdf');
    link.download = 'BIP- Go back to our roots- Zacliczyn 2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadNetworkProject = () => {
    const link = document.createElement('a');
    link.href = require('../assets/Orçamento da Instalação de Internet em Zakliczyn.docx');
    link.download = 'Orçamento da Instalação de Internet em Zakliczyn.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='landmarks'>
      <div className='imgsquare'>
        <img src={img} alt='img' className='imgimg'/>
      </div>
      <div className='textsquare'>
        <br/>
        <br/>
        <br/>
        {t.text1}
      </div>
      <div className='imgsquare1'>
        <img src={img2} alt='img' className='imgimg1'/>
      </div>
      <div className='textsquare1'>
        <br/>
        <br/>
        <br/>
        <br/>
        {t.text2}
      </div>
      <div className='imgsquare2'>
        <img src={img3} alt='img3' className='imgimg3'/>
      </div>
      <div className='textsquare2'>
        <br/>
        <br/>
        {t.text3}
      </div>
      <div className='imgsquare3'>
        <img src={img4} alt='img4' className='imgimg3'/>
      </div>
      <div className='textsquare3'>
        <br/>
        <br/>
        <br/>
        {t.text4}
      </div>
      <div className="BottomBar">
          <img src={logo} alt="Logo" className="BottomBarImage" />
          <div className="BottomBarCube">
            {t.contactsTitle}<br />
            {t.telephone}<br/>
            {t.fax}<br/>
            {t.email}
          </div>
          <div className="BottomBarCube">{t.workingHoursTitle}<br/>
          {t.workingHours.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br/>
            </React.Fragment>
          ))}
          </div>
          <div className="BottomBarButtons">
            <button className="highlightButton" onClick={downloadMarketingPlan}>{tBottomBar.marketingPlanButton}</button>
            <button className="highlightButton" onClick={downloadNetworkProject}>{tBottomBar.networkProjectButton}</button>
          </div>
        </div>
      </div>
  );
}

export default Landmarks;

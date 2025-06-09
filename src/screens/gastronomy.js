import './gastronomy.css';
import React from 'react';
import translations from '../translations';
import logo from '../assets/logozan.png';
import img1 from '../assets/imgs1.png';
import img2 from '../assets/imgs2.png';
import img3 from '../assets/imgs3.png';
import img4 from '../assets/imgs4.png';
import img5 from '../assets/imgs5.png';



function Gastronomy({ language }) {
  const t = translations.gastronomy[language] || translations.gastronomy.english;
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
      <div className='imgsquares'>
        <img src={img1} alt='img1' className='imgimgs'/>
      </div>
      <div className='textsquares'>
        <br/>
        <br/>
        {t.text1}
      </div>
      <div className='imgsquare1s'>
        <img src={img2} alt='img2' className='imgimg1s'/>
      </div>
      <div className='textsquare1s'>
        <br/>
        <br/>
        {t.text2}
      </div>
      <div className='imgsquare2s'>
        <img src={img3} alt='img3' className='imgimg2s'/>
      </div>
      <div className='textsquare2s'>
        <br/>
        <br/>
        {t.text3}
      </div>
      <div className='imgsquare3s'>
        <img src={img4} alt='img4' className='imgimg3s'/>
      </div>
      <div className='textsquare3s'>
        <br/>
        <br/>
        {t.text4}
      </div> 
      <div className='imgsquare4s'>
        <img src={img5} alt='img5' className='imgimg4s'/>
      </div>
      <div className='textsquare4s'>
        <br/>
        <br/>
        {t.text5}
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

export default Gastronomy;

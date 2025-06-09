import './home.css';
import React from 'react';
import translations from '../translations';
import logo from '../assets/logozan.png';
import city from '../assets/imgcity.png';
import mayor from '../assets/mayorimg.png';
import marketingPlanPdf from '../assets/BIP- Go back to our roots- Zacliczyn 2025.pdf';
import networkProjectDocx from '../assets/Orçamento da Instalação de Internet em Zakliczyn.docx';

function Home({ language }) {
  const t = translations.home[language] || translations.home.english;
  const tBottomBar = translations.bottomBar ? translations.bottomBar[language] || translations.bottomBar.english : null;
  const downloadMarketingPlan = () => {
    const link = document.createElement('a');
    link.href = marketingPlanPdf;
    link.download = 'BIP- Go back to our roots- Zacliczyn 2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadNetworkProject = () => {
    const link = document.createElement('a');
    link.href = networkProjectDocx;
    link.download = 'Orçamento da Instalação de Internet em Zakliczyn.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='home'>
      <div className='homeimg'>
        <img src={city} alt='city' className='homeimgspace'/>
      </div>
      <div className='citytext'>
        {t.aboutTitle}<br/>
        <br/>
        {t.aboutText}
      </div>
      <div className='mayorsquare'>
        <img src={mayor} alt='mayor' className='mayorimg'/>
      </div>
      <div className='mayortext'>
        {t.mayorTitle} <br/>
        <br/>
        {t.mayorText}
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

export default Home;

import React from 'react';
import './history.css';
import translations from '../translations';
import logo from '../assets/logozan.png';

function History({ language }) {
  const t = translations.history ? translations.history[language] || translations.history.english : null;
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
    link.href = require('../assets/Orçamento da Instalação de Internet em Zakliczyn.pdf');
    link.download = 'Orçamento da Instalação de Internet em Zakliczyn.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='history'>
      <div className='historytitle'>
        {t ? t.historyTitle : 'History of Zakliczyn'}
      </div>
      <div className='earlydays'>
        {t ? t.earlyDaysTitle : 'Early days'}
      </div>
      <div className='earlydaystext'>
        {t ? t.earlyDaysText : 'Zakliczyn is a small town in southern Poland, located in the Lesser Poland Voivodeship, near the Dunajec River. Its history dates back to the Middle Ages when it began as a small settlement along important trade routes connecting Kraków and Hungary. Due to its strategic location, the settlement grew in importance, and in 1558, King Sigismund II Augustus granted it town rights. This allowed Zakliczyn to develop a strong economy based on trade, craftsmanship, and agriculture.'}
      </div>
      <div className='founding'>
        {t ? t.foundingTitle : 'Founding and development'}
      </div>
      <div className='foundingtext'>
        {t ? t.foundingText : 'During the 16th and 17th centuries, Zakliczyn became a center for the Protestant Reformation, attracting Calvinist influences. However, with the Counter-Reformation in Poland, Catholicism regained dominance in the region. The town thrived for some time but later suffered due to wars, including the Swedish Deluge (1655-1660), plagues, and economic decline. By the late 18th century, Poland was partitioned by neighboring empires, and in 1772, Zakliczyn became part of the Austrian Empire under Galicia, remaining under foreign rule until Poland regained independence in 1918.'}
      </div>
      <div className='century'>
        {t ? t.centuryTitle : 'Founding and development'}
      </div>
      <div className='centurytext'>
        {t ? t.centuryText : 'The 20th century was a turbulent time for Zakliczyn. During World War II, the town was occupied by Nazi Germany, and its Jewish population was almost entirely exterminated in the Holocaust. The war left a lasting impact on the town’s demographics and economy. After 1945, Poland fell under communist rule, and although Zakliczyn remained a small town, it continued to function as a local agricultural and trade center.'}
      </div>
      <div className='modern'>
        {t ? t.modernTitle : 'Modern day'}
      </div>
      <div className='moderntext'>
        {t ? t.modernText : 'Since 1989, with the fall of communism, Zakliczyn has experienced a revival. The town has focused on preserving its historical heritage, promoting tourism, and celebrating its cultural traditions. Today, it is known for its traditional markets, local festivals, and historic sites, making it a charming place that reflects Poland’s rich history.'}
      </div>
      <div className="BottomBar">
          <img src={logo} alt="Logo" className="BottomBarImage" />
          <div className="BottomBarCube">
            {t ? t.contactsTitle : 'Contacts:'}<br />
            {t ? t.telephone : 'Telephone: 14 632 64 60'}<br/>
            {t ? t.fax : 'Fax: 14 632 64 55'}<br/>
            {t ? t.email : 'E-mail:zakliczyn@zakliczyn.pl'}
          </div>
          <div className="BottomBarCube">{t ? t.workingHoursTitle : 'Working hours'}<br/>
          {t ? t.workingHours.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br/>
            </React.Fragment>
          )) : (
            <>
              Monday-7:45/15:45<br/>
              Tuesday-8:30/16:30<br/>
              Wednesday/Friday-7:45/15:45<br/>
            </>
          )}
          </div>
          <div className="BottomBarButtons">
            <button className="highlightButton" onClick={downloadMarketingPlan}>{tBottomBar.marketingPlanButton}</button>
            <button className="highlightButton" onClick={downloadNetworkProject}>{tBottomBar.networkProjectButton}</button>
          </div>
        </div>
      </div>
  );
}

export default History;

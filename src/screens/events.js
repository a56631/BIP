import './events.css';
import React from 'react';
import translations from '../translations';
import logo from '../assets/logozan.png';
import marketingPlanPdf from '../assets/BIP- Go back to our roots- Zacliczyn 2025.pdf';
import networkProjectDocx from '../assets/Orçamento da Instalação de Internet em Zakliczyn.pdf';


function Events({ language }) {
  const t = translations.events ? translations.events[language] || translations.events.english : null;
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
      link.download = 'Orçamento da Instalação de Internet em Zakliczyn.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <div className='events'>
      <div className='mainevents'>
        {t ? t.mainEvents : 'Main events'}
      </div>
      <div className='cube'>
        <div className='cubetitle'>
          {t ? t.zakliczynDays.title : 'Zakliczyn Days'}
        </div>
        <div className='cubetext'>
          {t ? (
            <>
              {t.zakliczynDays.date}<br/>
              <br/>
              {t.zakliczynDays.description}
            </>
          ) : (
            <>
              Date: June or July<br/>
              <br/>
              Description: An annual festival celebrating the town’s history and culture, featuring musical performances, craft fairs, sports competitions, and family-friendly attractions.
            </>
          )}
        </div>
      </div>
      <div className='cube1'>
        <div className='cubetitle1'>
          {t ? t.stSimonFair.title : 'St. Simon and St. Jude Thaddeus Fair'}
        </div>
        <div className='cubetext1'>
          {t ? (
            <>
              {t.stSimonFair.date}<br/>
              <br/>
              {t.stSimonFair.description}
            </>
          ) : (
            <>
              Date: October<br/>
              <br/>
              Description: One of the oldest events in the town, this traditional fair gathers merchants, artisans, and performers to celebrate the patrons of the local parish.
            </>
          )}
        </div>
      </div>
      <div className='cube2'>
        <div className='cubetitle2'>
          {t ? t.kościuszkoCelebration.title : 'Tadeusz Kościuszko Celebration'}
        </div>
        <div className='cubetext2'>
          {t ? (
            <>
              {t.kościuszkoCelebration.date}<br/>
              <br/>
              {t.kościuszkoCelebration.description}
            </>
          ) : (
            <>
              Date: February<br/>
              <br/>
              Description: Zakliczyn has historical connections to Tadeusz Kościuszko, a hero of Poland and the U.S. The event includes lectures, historical reenactments, and ceremonies in his honor.
            </>
          )}
        </div>
      </div>
      <div className='cube3'>
        <div className='cubetitle3'>
          {t ? t.folkMusicFestival.title : 'Folk Music and Culture Festival'}
        </div>
        <div className='cubetext3'>
          {t ? (
            <>
              {t.folkMusicFestival.date}<br/>
              <br/>
              {t.folkMusicFestival.description}
            </>
          ) : (
            <>
              Date: Summer<br/>
              <br/>
              Description: A festival celebrating folk music and dances from the Małopolska region, featuring traditional Polish performing groups.
            </>
          )}
        </div>
      </div>
      <div className='cube4'>
        <div className='cubetitle4'>
          {t ? t.religiousEvents.title : 'Religious Events and Easter'}
        </div>
        <div className='cubetext4'>
          {t ? (
            <>
              {t.religiousEvents.date}<br/>
              <br/>
              {t.religiousEvents.description}
            </>
          ) : (
            <>
              Date: Easter<br/>
              <br/>
              Description: The town hosts several religious processions, including the Blessing of the Easter Baskets on Holy Saturday and the Procession of the Risen Christ on Easter Sunday.
            </>
          )}
        </div>
      </div>
      <div className='cube5'>
        <div className='cubetitle5'>
          {t ? t.corpusChristi.title : 'Corpus Christi Feast'}
        </div>
        <div className='cubetext5'>
          {t ? (
            <>
              {t.corpusChristi.date}<br/>
              <br/>
              {t.corpusChristi.description}
            </>
          ) : (
            <>
              Date: June<br/>
              <br/>
              Description: One of the most important religious celebrations in the town, featuring processions through the streets, beautifully decorated altars, and community participation.
            </>
          )}
        </div>
      </div>
      <div className='cube6'>
        <div className='cubetitle6'>
          {t ? t.harvestFestival.title : 'Harvest Festival'}
        </div>
        <div className='cubetext6'>
          {t ? (
            <>
              {t.harvestFestival.date}<br/>
              <br/>
              {t.harvestFestival.description}
            </>
          ) : (
            <>
              Date: Late summer<br/>
              <br/>
              Description: A traditional rural event celebrating the end of the harvest season, with parades, folk performances, and agricultural competitions.
            </>
          )}
        </div>
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

export default Events;

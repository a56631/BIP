import './map.css';
import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import translations from '../translations';
import logo from '../assets/logozan.png';

function Map({ language }) {
  const tMap = translations.Map ? translations.Map[language] || translations.Map.english : null;
  const tBottomBar = translations.bottomBar ? translations.bottomBar[language] || translations.bottomBar.english : null;
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return; // initialize map only once

    mapInstance.current = new maplibregl.Map({
      container: mapContainer.current,
      style:'https://api.maptiler.com/maps/streets/style.json?key=eEmDPX6tCWntp0gyxtqQ',
      center: [20.8139, 49.8561], // [lng, lat] Zackliczyn, Poland (updated coordinates)
      zoom: 15
    });

    // Add points of interest markers
    const pointsOfInterest = [
      {
        coordinates: [20.82775335298857, 49.8556469515991],
        title: 'Europejskie Centrum Muzyki Krzysztofa Pendereckiego'
      },
      {
        coordinates: [20.80336872708929, 49.85605481648707],
        title: 'Church of St. Idzi'
      },
      {
        coordinates: [20.808156, 49.856251],
        title: 'Zakliczyn Town Hall'
      },
      {
        coordinates: [20.7717699005714, 49.8693628575896],
        title: 'Melsztyn Castle'
      }
    ];

    pointsOfInterest.forEach((poi) => {
      const marker = new maplibregl.Marker()
        .setLngLat(poi.coordinates)
        .setPopup(new maplibregl.Popup({ offset: 25 }).setText(poi.title))
        .addTo(mapInstance.current);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

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
    <div className='map'>
      <div className='mapsquare' ref={mapContainer} />
      <div className="BottomBar">
          <img src={logo} alt="Logo" className="BottomBarImage" />
          <div className="BottomBarCube">
            {tMap ? tMap.contactsTitle : 'Contacts:'}<br />
            {tMap ? tMap.telephone : 'Telephone: 14 632 64 60'}<br/>
            {tMap ? tMap.fax : 'Fax: 14 632 64 55'}<br/>
            {tMap ? tMap.email : 'E-mail:zakliczyn@zakliczyn.pl'}
          </div>
          <div className="BottomBarCube">{tMap ? tMap.workingHoursTitle : 'Working hours'}<br/>
          {tMap ? tMap.workingHours.map((line, index) => (
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

export default Map;

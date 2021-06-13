import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import normaliseBranches from './components/Data/NormaliseData';

const defaultZoom = 6;
const defaultZoomMobile = 4.5;

function App() {
  const [zoom, setZoom] = useState(defaultZoom);
  const [center, setCenter] = useState({
    lat: 49.511791,
    lng: 31.339463,
  });
  const [selectedZoom, setSelectedZoom] = useState(null);
  const [selectedCenter, setSelectedCenter] = useState(null);

  useEffect(() => {
    // Зменшимо зум карти для мобільних девайсів
    let mapWindowHeight = document.getElementsByClassName('App-map')[0].clientHeight;
    setZoom(mapWindowHeight < 300 ? defaultZoomMobile : defaultZoom)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <Sidebar branches={normaliseBranches.branches} setSelectedZoom={setSelectedZoom} setSelectedCenter={setSelectedCenter}></Sidebar>
        <div className="App-map">
          <Map branches={normaliseBranches.branches} zoom={selectedZoom || zoom} center={selectedCenter || center} />
        </div>
      </main>
    </div>
  );
}

export default App;

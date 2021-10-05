import React from 'react';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import './App.css';
import axios from "axios";

const apiKey =
    '62780ad2de9b8538cfdd84ddaafdb93a';

function App() {
async function fetchData() {
  try {
    const result = await
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}`)
    console.log(result.data);
  }  catch (e) {
          console.log(e);
   }
  }

  return (
          <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar/>

          <span className="location-details">
            <h2>Bewolkt</h2>
            <h3> </h3>
            <h1>14 &deg;</h1>

            <button type="button"
                onClick={fetchData}
            >
              Haal data op!
            </button>
          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu/>

          <div className="tab-wrapper">
            Alle inhoud van de tabbladen komt hier!
          </div>
        </div>

        <MetricSlider/>
      </div>
    </>
  );
}

export default App;

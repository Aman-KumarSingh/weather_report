/* eslint-disable prettier/prettier */
import React from 'react';
import './weather.css';

const WeatherData = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  const celsius_min = (data.main.temp_min - 273.15).toFixed(2);
  const celsius_max = (data.main.temp_max - 273.15).toFixed(2);
  return (
    <>
      <div className="showItems">
        <h4>{celsius}&#8451;</h4>
        <div>
          <h5><i className="fas fa-map-marker-alt"></i>&nbsp;{data.name}</h5>
        </div>
        <div className="form-inline">
          <h6 className="celsius">{celsius_min}&#8451; / {celsius_max}&#8451;</h6>
          <h6 className="weather">{data.weather[0].main}</h6>
        </div>
      </div>
    </>
  );
};


export default WeatherData;

/* eslint-disable prettier/prettier */
import React from 'react';


import WeatherData from './WeatherData';

const Weather = ({ loading, data, error }) => {
  if (error) {
    return <div >
      <p>{error}</p>
    </div>;
  }

  if (!loading && !data) {
    return null;
  }

  return (
    <div >
      { loading ? <ActivityIndicator size="large" color="#00d1b2" /> : <WeatherData data={data} /> }
    </div>
  );
};



export default Weather;

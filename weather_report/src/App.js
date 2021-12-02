import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Main from './components/main';
import Weather from './components/Weather';
import './components/weather.css';
const App = () => {
  const [loading, setLoading] = useState(false);
  const { data, error } = useSelector(state => state.weather);
  return (
    <div className="content">
      <div className="addTask">
        <Main />
        <Weather loading={loading} data={data} error={error} />
      </div>
    </div>
  );
};



export default App;

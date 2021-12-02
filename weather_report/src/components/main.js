import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from './../store/actions/weatherActions';
import './../components/weather.css';
export const main = () => {
    const [search,setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.weather);
    function searchSubmitHandler () {
        if (search === '') {
          return alert('Validation', 'City name is required!', [{ text: 'OK' }]);
        }
    
        setLoading(true);
        dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));
        setSearch('');
      };
    return (
        <>
                <h3>Weather App</h3>
                <div className="form-inline box" >
                    <input className="form-control" placeholder="Enter city name..." value={search} onChange={(event) => setSearch(event.target.value)} />
                    <button title="Search" onClick={() => searchSubmitHandler()} >Search</button>
                </div>
        
        </>
    )
}
export default main;
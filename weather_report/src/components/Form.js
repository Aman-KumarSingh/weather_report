/* eslint-disable prettier/prettier */
import React from 'react';

const Form = ({ search, onSetSearch, onSubmit }) => {
  return (
    <div >
      <p>Enter city name and press search button</p>
      <div>
        <input  placeholder="Enter city name..." value={search} onChangeText={(val) => onSetSearch(val)} />
        <button title="Search" onPress={onSubmit} >submit</button>
      </div>
    </div>
  );
};

export default Form;

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const allCountries = ["USA", "Canada", "Australia", "India", "Brazil"];

  const handleCountryChange = (event) => {
    const value = event.target.value;
    if (!countries.includes(value)) {
      setCountries([...countries, value]);
    }
  };

  const handleSubmit = () => {
    setShowSearch(true);
  };

  return (
    <div className="root">
      <div className="content">
        <div className="heroSection">
          <h1>Snakes</h1>
          <h3>Choose countries from the dropdown box</h3>
          <select className="dropdown" onChange={handleCountryChange} defaultValue="">
            <option value="" disabled>Select Country</option>
            {allCountries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <button className="submitButton" onClick={handleSubmit}>Submit</button>
        {showSearch && (
          <div className="searchBar">
            <h3>Product:</h3>
            <input
              type="text"
              placeholder="Enter a product"
              className="textField"
            />
          </div>
        )}
      </div>
      <div className="countryList">
        {countries.map((country, index) => (
          <div key={index} className="countryContainer">
            <p>{country}</p>
            <input
              type="text"
              placeholder="Enter city"
              className="textField"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

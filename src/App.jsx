import React, { useState } from 'react';
import './App.css';
import sendDataToBackend from './api';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [showProductInput, setShowProductInput] = useState(false);
  const [product, setProduct] = useState('');
  const [countriesWithCities, setCountriesWithCities] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const allCountries = ["USA", "Canada", "Australia", "India", "Brazil"];

  const handleCountryChange = (event) => {
    const value = event.target.value;
    if (!countries.includes(value)) {
      setCountries([...countries, value]);
    }
  };

  const handleCityChange = (country, city) => {
    setCountriesWithCities({
      ...countriesWithCities,
      [country]: city,
    });
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleSubmit = async () => {
    if (!showProductInput) {
      setShowProductInput(true);
    } else {
      const response = await sendDataToBackend(countriesWithCities, product);
      setResponseMessage(response);
    }
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
        {showProductInput && (
          <div className="searchBar">
            <h3>Product:</h3>
            <input
              type="text"
              placeholder="Enter a product"
              className="textField"
              onChange={handleProductChange}
            />
          </div>
        )}
        <button className="submitButton" onClick={handleSubmit}>
          {showProductInput ? 'Submit' : 'Next'}
        </button>
      </div>
      <div className="countryList">
        {countries.map((country, index) => (
          <div key={index} className="countryContainer">
            <p>{country}</p>
            <input
              type="text"
              placeholder="Enter city"
              className="textField"
              onChange={(e) => handleCityChange(country, e.target.value)}
            />
          </div>
        ))}
      </div>
      {responseMessage && (
        <div className="responseBox">
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default App;

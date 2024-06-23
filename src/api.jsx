import axios from 'axios';

const sendDataToBackend = async (countriesWithCities, product) => {
  try {
    const response = await axios.post('http://localhost:5000/submit', {
      countriesWithCities,
      product,
    });
    return response.data.message;
  } catch (error) {
    console.error('Error sending data to backend:', error);
    return 'Error sending data to backend';
  }
};

export default sendDataToBackend;

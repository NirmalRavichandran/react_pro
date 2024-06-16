import axios from 'axios';

const sendDataToBackend = async (countriesWithCities, product) => {
  try {
    const response = await axios.post('http://localhost:5000/submit', {
      countriesWithCities,
      product,
    });
    console.log('Data sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending data to backend:', error);
  }
};

export default sendDataToBackend;

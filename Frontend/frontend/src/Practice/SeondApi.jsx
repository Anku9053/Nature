const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://travelo-pro.p.rapidapi.comhttps//www.travelopro.com/api.php',
  headers: {
    'X-RapidAPI-Key': '45783736d2mshd49832eb024b01bp1c5a7ejsn82974b85c0c7',
    'X-RapidAPI-Host': 'travelo-pro.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
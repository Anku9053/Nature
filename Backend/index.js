const axios = require('axios');
const express = require("express");
// https://trailapi-trailapi.p.rapidapi.com/trails/explore/
const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
    headers: {
      'X-RapidAPI-Key': '45783736d2mshd49832eb024b01bp1c5a7ejsn82974b85c0c7',
      'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
};


fetchData();
// curl --location --request POST 'https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create' \
// --header 'x-api-key: ADD-YOUR-API-KEY-HERE' \
// --data-raw '...'
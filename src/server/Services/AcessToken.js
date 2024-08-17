require('dotenv').config({path: '../../../.env'});
const { get } = require('request');
const config = require('../config.js');
const request = require('request-promise-native');

async function getToken() {
  const authOptions = {
    url: config.url_Api,
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(config.client_Id + ':' + config.client_Secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  try {
    const response = await request.post(authOptions);
    return response.access_token;
  } catch (error) {
    console.error('Failed to retrieve token:', error);
    return null;
  }
}

module.exports = getToken;


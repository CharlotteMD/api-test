const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));



// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });



module.exports = {

  handleSubmit: function () {
    // console.log(req.body);
    axios
      .post('https://sypht.au.auth0.com/oauth/token', 
      {
      header: 'Content-Type: application/json',
      header: 'Accept: application/json',
      body: {
          "client_id": process.env.clientID,
          "client_secret": process.env.secret,
          "audience": "https://api.sypht.com",
          "grant_type": "client_credentials"
        }
      })
        .then(console.log('hit here'))
        .catch(err => console.log(err));
      
      // .then(function (response) {
      //     console.log('hitting');
      // })
      // .catch(function (error) {
      //   console.log(error);
      // })
    }
  }

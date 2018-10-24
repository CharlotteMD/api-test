const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = {

  handleSubmit: function () {
    // console.log(req.body);
    return axios
      .post('https://sypht.au.auth0.com/oauth/token', 
      {
        "client_id": process.env.clientID,
        "client_secret": process.env.secret,
        "audience": "https://api.sypht.com",
        "grant_type": "client_credentials"
      })
        .then((res) => {
          console.log("access: " + res.data.access_token)
          const token = res.data.access_token;
          return token;
        })
        .catch(err => console.log(err))
    },

    upload: function (token) {
      console.log(token);
    }
  }

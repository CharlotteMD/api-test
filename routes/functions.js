const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = {

  handleSubmit: function (req){
    console.log(req.body);
  }
};

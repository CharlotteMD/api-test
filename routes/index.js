var express = require('express');
var router = express.Router();
var functions = require('./functions');
// var results = require('../views/results');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { title: 'Express',  char: 'Hello Charlotte', results: 'Here are your results' });
});

router.post('/results', function(req, res, next) {
  functions.handleSubmit(req)
  .then((token) => functions.upload(token))
  
});



module.exports = router;
// .then(() => res.send(token)) this is how you render to a page
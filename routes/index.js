var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', char: 'Hello Charlotte' });
});

router.get('/results', function(req, res, next) {
  res.send('results', { char: 'Hello Charlotte', results: 'Here are your results' });
});


router.get('/hello', function (req, res) {
  res.send('Hello World!')
});



module.exports = router;

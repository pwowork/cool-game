var express = require('express');
var router = express.Router();

const launchTime= new Date('01/01/2021 00:00').getTime();
/* GET home page. */
router.get('/', function(req, res, next) {
  const currentTime = new Date().getTime();
  const numberofMilliseconds = parseInt(launchTime-currentTime);
  res.render(
    'index', 
    { title: 'Awesome game', countDown: numberofMilliseconds });
});

module.exports = router;

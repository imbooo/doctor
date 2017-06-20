var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Express' });
});
module.exports = router;

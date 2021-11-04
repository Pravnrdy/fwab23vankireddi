var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Pizzas', { title: 'Search Results for Pizzas' });
});

module.exports = router;
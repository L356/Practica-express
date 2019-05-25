var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('biografia', { title: 'Luis Alberto Lopez Gonzalez' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VG Website Downloader - Download websites and their assets for offline use' });
});

module.exports = router;

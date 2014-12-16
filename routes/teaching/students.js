var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
   title: 'Express',
   users:[{username:'lihang'},
   	 {username:'李航'},
   	 {username:'lihang2'}]
   });
});

module.exports = router;

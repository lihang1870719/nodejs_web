var express = require('express');
var router = express.Router();
var User = require('../models/testdata.js');

/* GET home page. */
router.get('/', function(req, res) {

    User.getAllUser(function(err, result) {
        res.render('list', {
            title: 'list',
            user: result,
        });
    });
});

router.delete('/', function(req, res) {
    var id = req.query.id;
    User.deleteUserById(id, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json({
                success: 1
            });
        }
    });
});



module.exports = router;
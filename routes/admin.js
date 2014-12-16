var express = require('express'),
    router = express.Router(),
    User = require('../models/testdata.js'),
    TITLE_REG = '录入信息';

router.get('/', function(req, res) {
	res.render('admin',{title:TITLE_REG});
});

router.post('/', function(req, res) {
	var inputName = req.body['inputName'],
	    inputTitle = req.body['inputTitle'],
	    inputIntroduction = req.body['inputIntroduction'];

	var newUser = new User({
	    Name: inputName,
	    Title: inputTitle,
	    Introduction: inputIntroduction
	});
	//检查用户名是否已经存在
	User.getUserNumByName(newUser.Name, function(err, results) {
	    if (results != null && results[0]['num'] > 0) {
	        err = '用户名已存在';
	    }

	    if (err) {
	        res.locals.error = err;
	        res.render('admin', {
	            title: TITLE_REG
	        });
	        return;
	    }

	    newUser.save(function(err, result) {
	        if (err) {
	            res.locals.error = err;
	            res.render('admin', {
	                title: TITLE_REG
	            });
	            return;
	        }

	        if (result.insertId > 0) {
	            res.locals.success = 'Insert Success';
	        } else {
	            res.locals.error = err;
	        }

	        res.render('admin', {
	            title: TITLE_REG
	        });
	    });
	});
});

module.exports = router;

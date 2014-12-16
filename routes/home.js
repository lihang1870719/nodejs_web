/*var express = require('express');
var router = express.Router();
var crypto = require('crypto');


GET home page. 
router.get('/', function(req, res) {
    var userName = req.query.txtUserName,
        userPwd = req.query.txtUserPwd,
        userName2 = req.param('txtUserName'),
        userPwd2 = req.param('txtUserPwd');

    console.log('req.query用户名:' + userName);
    console.log('req.query密码:' + userPwd);
    console.log('req.param用户名:' + userName2);
    console.log('req.param密码:' + userPwd2);

    if(req.session.islogin)
    {
    	console.log('usesession:'+req.session.islogin);
    	res.locals.islogin = req.session.islogin;
    }

    res.render('home', {
        title: 'Home',
    });
});


router.post('/', function(req, res) {
    var userName = req.body.txtUserName,
        userPwd = req.body.txtUserPwd;

    var md5 =crypto.createHash('md5');
    var en_pwd=md5.update(userPwd).digest('hex');
    console.log('加密后的密码：'+en_pwd);
    req.session.islogin = 'success';
    res.locals.islogin = req.session.islogin;
    res.render('home', {
        title: 'Home'
    });

});


module.exports = router;*/


var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    if(req.cookies.islogin)
    { 
           console.log('cookies:' + req.cookies.islogin);
         req.session.username = req.cookies.islogin;
    }  

    if(req.session.username)
    {    
            console.log('session:' + req.session.username);
          res.locals.username = req.session.username;      
    }
    else
    {
          res.redirect('/login');
          return;    
    }

   res.render('home',{title:'主页'});
});

module.exports = router;

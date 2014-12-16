var mysql = require('mysql');

var pool = mysql.createPool({
    host: '127.0.0.1',     
    user: 'root',
    password:'3788965',
    port:'3306',
    database:'nodesample'
});

pool.getConnection(function(err,connection){
    
    connection.query('SELECT * FROM userinfo WHERE id = ' + '5 OR ID = 6',function(err,result){
        //console.log(err);
        console.log(result);
        //connection.release();
    });

    connection.query('SELECT * FROM userinfo WHERE id = ' + pool.escape('5 OR ID = 6') ,function(err,result){
        //console.log(err);
        console.log(result);
        //connection.release();
    });
})
var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : '127.0.0.1',       
  user     : 'root',              
  password : '3788965',       
  port: '3306',                   
  database: 'nodesample'  
});

pool.getConnection(function(err, connection) {
    console.log(connection);
    connection.query( 'SELECT * FROM userinfo;', function(err, result) {    
        console.log(result);
        connection.release();
    });

    connection.query( 'SELECT * FROM userinfo;', function(err, result) {
        
        console.log(result);
        //connection.release();

    });
});
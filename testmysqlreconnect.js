var mysql = require('mysql');
var db_config = {
  host     : '127.0.0.1',       
  user     : 'root',              
  password : '3788965',       
  port: '3306',                   
  database: 'nodesample'  
};

var connection;
function handleDisconnect() {
  connection = mysql.createConnection(db_config);                                               
  connection.connect(function(err) {              
    if(err) {                                     
      console.log("进行断线重连：" + new Date());
      setTimeout(handleDisconnect, 2000);   //2秒重连一次
      return;
    }         
     console.log("连接成功");  
  });                                                                           
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                 
    }
  });
}
handleDisconnect();
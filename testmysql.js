var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({     
  host     : '127.0.0.1',       //主机
  user     : 'root',               //MySQL认证用户名
  password : '3788965',        //MySQL认证用户密码
  port: '3306',                   //端口号
  database: 'nodesample',
}); 

connection.connect();

var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
var userAddSql_Params=['Wilson','abcd'];

//-----------------------------------insert--------------------------------
connection.query(userAddSql,userAddSql_Params,function(err,result){
  if(err){
    console.log('[INSERT ERROR] - ',err.message);
    return;
  }  

  console.log('----------------INSERT----------------------');
  console.log('Insert Id: ',result);
  console.log('------------------------------------------------');

});

//--------------------------------------update--------------------------------
var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var userModSql_Params = ['钟慰', '5678',1];
connection.query(userModSql,userModSql_Params,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});

//------------------------------select------------------------------
var  userGetSql = 'SELECT * FROM userinfo';
connection.query(userGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------SELECT----------------------------');
       console.log(result);        
       console.log('-----------------------------------------------------------------\n\n');  
});

//----------------------------------delete------------------------------------
var  userDelSql = 'DELETE FROM userinfo';
connection.query(userDelSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();
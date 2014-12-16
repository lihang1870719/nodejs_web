var mysql = require('mysql');
var DB_NAME = 'nodesample';

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '3788965'
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function User(user) {
    this.Id=user.id;
    this.Name = user.Name;
    this.Title = user.Title;
    this.Introduction =user.Introduction;
};
module.exports = User;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("USE Error: " + err.message);
            return;
        }
        console.log('USE succeed');
    });

    //保存数据
    User.prototype.save = function save(callback) {
        var user = {
            Id:this.Id,
            Name: this.Name,
            Title: this.Title,
            Introduction:this.Introduction
        };

        var insertUser_Sql = "INSERT INTO userdetail(Id,Name,Title,Introduction) VALUES(0,?,?,?)";

        connection.query(insertUser_Sql, [user.Name, user.Title, user.Introduction], function(err, result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }

            //connection.release();

            console.log("invoked[save]");
            callback(err, result);
        });
    };

    //根据用户名得到用户数量
    User.getUserNumByName = function getUserNumByName(Name, callback) {

        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM userdetail WHERE Name= ?";

        connection.query(getUserNumByName_Sql, [Name], function(err, result) {
            if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
            }

            //connection.release();

            console.log("invoked[getUserNumByName]");
            callback(err, result);
        });
    };

    //删除某个用户
    User.deleteUserById = function deleteUserById(id, callback) {
       var deleteUserById_sql = "DELETE  FROM userdetail where Id = ?";
       connection.query(deleteUserById_sql, [id], function(err, result) {
           if (err) {
               console.log("deleteUserById Error: " + err.message);
               return;
           }
           // connection.release();
           //console.log(result);
           console.log("invoked[deleteUserById]");
           callback(err, result);
       });
   };


    //显示所有数据
    User.getAllUser =function getAllUser(callback){
        var getAllUser_sql="SELECT * FROM userdetail";
        connection.query(getAllUser_sql,function(err,result){
          if (err) {
                console.log("getAllUser Error: " + err.message);
                return;
            }

           // connection.release();
           //console.log(result);
            console.log("invoked[getAllUser]");
            callback(err, result);
        });
    };

    //根据用户名得到用户信息
    User.getUserByUserName = function getUserNumByName(Name, callback) {

        var getUserByUserName_Sql = "SELECT * FROM userdetail WHERE Name = ?";

        connection.query(getUserByUserName_Sql, [Name], function(err, result) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }

           // connection.release();

            console.log("invoked[getUserByUserName]");
            callback(err, result);
        });
    };

});

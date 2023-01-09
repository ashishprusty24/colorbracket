const mysql = require("mysql")

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'colorbracket',
    port : 3308
  });

  connection.connect((err)=>{
    if(err){
        throw err
    }
    console.log("connection succesfully");
  })

  module.exports = connection
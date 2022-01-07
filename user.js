
const mysql = require('mysql'); 
const promise= require('bluebird');
promise.promisifyAll(require("mysql/lib/connection").prototype);





const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "Exam2",
  };

  const addUSer = async(user)=>{
      const connection =mysql.createConnection(dbinfo);

      await connection.connectAsync();

      let sql = insert into logindetails(username,password) value(?,?);
      await connection.queryAsynch(sql,[user.username,user.password]);
      await connection.endAsync();
  };


  const selectUSer = async(user)=>{
    const connection =mysql.createConnection(dbinfo);

    await connection.connectAsync();
    let sql = select * from logindetails;
    const list = await connection.queryAsynch(sql);

    await connection.endAsync();
    return list;
};

const user = {
    username:'kamlesh',
    password: '12345',
};

//addUser();
addUser(user);
//selectUser();

module.exports = {addUser,selectUser};


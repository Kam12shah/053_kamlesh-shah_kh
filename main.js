const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());
const { adduser , selectAllUser} = require("./user.js")

const cors = require("cors");
app.use(cors());

const{addUser,selectUser} = require('./user');

//fetch data
app.get("/userlist", async(reg,res)=>{
    const list= await selectUser();
    res.json(list);
});

app.post("/newUser",(req,res)=>{
    const user =req.body;
    addUser(user);
    res.json({n:"kjavo"});
});

app.listen(4000, ()=> console.log('server started'));
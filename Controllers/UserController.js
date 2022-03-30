'use strict'
const ModelUser = require('../Models/User')
 const UserController =()=>{}

 UserController.GetUser=(req, res)=>{
ModelUser.create({
    name: req.body.name,
    birthday: req.body.birthday
}).then(use=>{
    res.json("Un nuevo usuario se ha registrado")
})
 }
 UserController.PostUser=()=>{

 }

 module.exports = UserController;
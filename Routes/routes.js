'use strict'
const express = require ("express"),
      Routes = express.Router(),
      UserController = require('../Controllers/UserController')

      Routes
      .get('/alluser', UserController.GetAllUser)
      .get('/get/:id', UserController.GetUser)
      .post('/insert', UserController.PostUser)
      .put('/update/:id', UserController.UpdateUser)
      .delete('/delete/:id', UserController.DeleteUser)

      module.exports = Routes;
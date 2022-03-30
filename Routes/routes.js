'use strict'
const express = require ("express"),
      Routes = express.Router(),
      UserController = require('../Controllers/UserController')

      Routes
      .post('/insert', UserController.PostUser)

      module.exports = Routes;
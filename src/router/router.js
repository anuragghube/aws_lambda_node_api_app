var express = require('express');
var featureRouter = express.Router();
var toDoController = require('../controller/toDoController');
//console.log(toDoController);

featureRouter.get('/gettodolist', toDoController.getToDoList);

module.exports = featureRouter;
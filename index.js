require('dotenv').config(); 




///////////////////////////////////////////////////////////
var mainController = require("./controller/mainController");
var controllerInstance = new mainController();
controllerInstance.runBackup()
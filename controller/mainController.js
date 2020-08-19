const pgService = require("../services/pgService")
const s3Service = require("../services/s3Service")

module.exports = class mainController {
    constructor() {
 
    }
 
    runBackup() {
        var dbConfig = {
            "DB_HOST":     "${DB_HOST}",
            "DB_PORT":     "${DB_PORT}",
            "DB_NAME": "${DB_NAME}",
            "DB_USER":     "${DB_USER}",
            "DB_PASS": "${DB_PASS}",
            "DB_CHARSET":  "${DB_CHARSET}",
        }
        var pgConnection = new pgService(dbConfig)
    }
 }
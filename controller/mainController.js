const pgService = require("../services/pgService")
const s3Service = require("../services/s3Service")

module.exports = class mainController {
    constructor() {
 
    }
 
    runBackup() {
        var dbConfig = [
            `79.68.68.68`,//${process.env.PGHOST}
            `${process.env.PGPORT}`,
            `${process.env.PGDATABASE}`,
            `${process.env.PGUSER}`,
            `${process.env.PGPASSWORD}`,
        ]
        var pgConnection = new pgService(dbConfig)
    }
 }
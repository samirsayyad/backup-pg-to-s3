'use strict';

module.exports = class pgService {
    constructor(dbConfig) {
        this.dbConfig = dbConfig;
        this.connect()
    }
 
    connect(){
        console.log("os",this.dbConfig)
    }
 }
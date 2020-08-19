module.exports = class s3Service {
    constructor(endPoint ,accessKeyId, accessKeySecret, bucket ) {
        this.endPoint = endPoint ;
        this.accessKeyId = accessKeyId ;
        this.accessKeySecret = accessKeySecret ;
        this.bucket = bucket ;

    }
 
    display() {
        console.log(this.firstName + " " + this.lastName);
    }
 }
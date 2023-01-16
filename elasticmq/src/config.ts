const AWS = require('aws-sdk');

const Config = {
    aws:{
        endpoint: new AWS.Endpoint('http://localhost:9324'),
        accessKeyId: 'na',
        secretAccessKey: 'na',
        region: 'REGION'
    },
    firstqueue:{
        url: 'http://localhost:9324/rickrribeiro/first-queue'
    }
}

export{
    Config
}
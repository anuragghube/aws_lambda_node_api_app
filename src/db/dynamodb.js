const AWS = require("aws-sdk");
module.exports.documentClient = ()=> {
        return new AWS.DynamoDB.DocumentClient();
};
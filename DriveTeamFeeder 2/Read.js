const AWS = require ('aws-sdk'),
      {
        DynamoDB
      } = require("@aws-sdk/client-dynamodb");

AWS.config.update({
    "region": "us-west-2",
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com",
    "accessKeyId" : "AKIAXCUGQIR7W72UJ6FU",
    "secretAccessKey": "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"
});

var ddb = new DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'scout',
  Key: {
    "2637" : {N: "4"}
  },
  ProjectionExpression: 'auto_docked'
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});
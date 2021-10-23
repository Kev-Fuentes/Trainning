'use strict';
const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.file = async (event) => {
  S3.putObject({
    Bucket: 'trainningfile',
    Key: 'characters.text',
    Body: new Buffer('abcd')
  } );

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'file saved',
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.getFile = async (event, context) => {
 
    const data = await S3.getObject({Bucket: 'trainningfile', Key: 'characters.txt'}).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

   
}
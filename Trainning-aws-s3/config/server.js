const express = require('express');
const AWS  = require('aws-sdk');
const s3= new AWS.S3();

const app = express();;
const NODE_ENV = process.env.NODE_ENV;

require('dotenv').config({path: NODE_ENV ? `.env.${NODE_ENV}` : '.env'});



AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'us-east-1' 
});

const params = {
    Bucket : 'trainning-file-test',
    Body   : 'kevin fuentes',
    Key    : "kevin.text"
  };


  app.get('/',(req,res)=>{

    s3.upload(params, function (err, data) {
        //handle error
        if (err) {
          console.log("Error", err);
        }
      
        //success
        if (data) {
            res.send(
                {  message:'Archivo cargado',
                    data:data.Location}

            )
        }
      });

  })

 

module.exports = app;
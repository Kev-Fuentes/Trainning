'use strict';

const { default: axios } = require('axios');
const querystring = require('query-string')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Bienvenido kevin`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${event.pathParameters.name}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};




module.exports.createUser = async (event) => {
  const body = querystring.parse(event["body"])
  console.log(body.user, "entro..");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Peticion para crear usuarios`,
        input: `Hola ${body.user}`,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getUser = async (event) => {
  const  response =  await axios.get("https://jsonplaceholder.typicode.com/todos/");


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: response.data,
        input: event ,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

//import fetch from 'node-fetch';
// require('dotenv').config();

exports.handler = function(event, context, callback) {
  console.log(process.env.WEATHERLI_KEY);
  callback(null, {
    statusCode: 200,
    body: 'Hello world'
  });
};

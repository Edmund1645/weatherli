const fetch = require('node-fetch');
let data;
exports.handler = function(event, context, callback) {
  let lat = event.queryStringParameters.lat;
  let long = event.queryStringParameters.long;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${
    process.env.WEATHERLI_KEY
  }`;
  console.log(baseUrl);
  fetch(baseUrl)
    .then(response => response.json())
    .then(json => {
      data = json;
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
      });
    });
};

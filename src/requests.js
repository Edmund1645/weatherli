const fetch = require('node-fetch');

export const getWeatherData = pos => {
  return new Promise((resolve, reject) => {
    const position = pos.coords;
    const { latitude, longitude } = position;
    let resource = `${
      process.env.VUE_APP_WEATHERLI_FUNCTION
    }?lat=${latitude}&long=${longitude}`;
    fetch(resource, { headers: { 'Acess-Control-Allow-Origin': '*' } })
      .then(res => res.json())
      .then(data => {
        resolve(data);
        console.log(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const fetch = require('node-fetch');

function success(pos) {
  const position = pos.coords;
  const { latitude, longitude } = position;
  let resource = `${
    process.env.VUE_APP_WEATHERLI_FUNCTION
  }?lat=${latitude}&long=${longitude}`;
  console.log(resource);
  // let coordinates = {
  //   latitude,
  //   longitude
  // };
  // let requestOptions = {
  //   method: 'POST',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Acess-Control-Allow-Headers': 'Content-Type',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(coordinates)
  // };
  fetch(resource);
  // .then(res => res.json())
  // .then(data => console.log(data))
  // .catch(err => console.error(err));
}

function error(err) {
  console.error(`error code -${err.code}: ${err.message}`);
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export default function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
}

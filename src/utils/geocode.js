const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address.name +
    '.json?access_token=pk.eyJ1IjoiaW1tYXJrb3JmdWwiLCJhIjoiY2theWI3a3B2MGVmbDJ3bzJrYmF0MjdjYiJ9.gzkFsVW_Dajd2aclP6m-nQ&limit=1';

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;

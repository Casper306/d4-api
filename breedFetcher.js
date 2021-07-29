
const request = require('request');



const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (response.statusCode !== 200) {
      callback('badstatusCode:', null); // Print the response status code if a response was received
      return;
    }

    if (error !== null) {
      callback('error:', null); // Print the error if one occurred
      return;
    }

    const data = JSON.parse(body);
    if (!data.length) {
      callback('Results not found!!', null);
      return;
    }
   
   //console.log(typeof data);
    callback(null, data[0].description);

  });
};
module.exports = { fetchBreedDescription };


const request = require('request');
const args = process.argv.slice(2);

const breedName = args[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (response.statusCode !== 200) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }

  if (error !== null) {
    console.log('error:', error); // Print the error if one occurred
  }

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Results not found!!');
    return;
  }
  console.log(data[0].description);

  //console.log(typeof data);

});



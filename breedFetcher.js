const request = require('request');
const breedName = process.argv[2];
if (breedName === undefined) {
  console.log('Please enter a breed');
} else {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log('Not a valid breed');
      } else {
        console.log(typeof data);
        console.log(data[0].description);
      }
    }
  });
}
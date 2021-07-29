const {fetchBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });



  it('returns a err', (done) => {
    fetchBreedDescription('Fuzzy', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(desc, null);

      
      // compare returned description
      assert.equal(err, 'Results not found!!');

      done();
    });
  });


  // it('returns an error via callback', (done) => {
  //   fetchBreedDescription('Fuzzyfuy', (err, desc) => {
  //     // we expect error for this scenario
  //     // compare returned description
  //     const expectedErr = 'Results not found!!';
  //     assert.equal(err, expectedErr);


  //     assert.equal(desc, null);

  //     done();
  //   });
  // });
});
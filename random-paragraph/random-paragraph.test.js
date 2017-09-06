describe('randomParagraphWithFiveSentences', function() {
  it('should return a string', function() {
    randomParagraphWithFiveSentences().should.be.a('string');
  });

  it('should return a random paragraph', function() {
    var paragraphOne = randomParagraphWithFiveSentences();
    var paragraphTwo = randomParagraphWithFiveSentences();
    paragraphOne.should.not.equal(paragraphTwo);
  });

  it('should return a random paragraph with five sentences', function() {
    var paragraphOne = randomParagraphWithFiveSentences();
    var paragraphTwo = randomParagraphWithFiveSentences();
    paragraphOne.should.not.equal(paragraphTwo);

    // Count sentences by the number of periods
    paragraphOne.match(/\./g).length.should.equal(5);
    paragraphTwo.match(/\./g).length.should.equal(5);
  });

  it('should use `chance`', function() {
    // **Note**
    // This test assumes you use the globally 
    // available `chance` object already given by the library
    // and do not create your own instance

    // Cache the existing chance instance
    var chanceInstance = window.chance;

    // Create an instance of Chance with spies
    // attached to every method
    window.chance = sinon.createStubInstance(Chance);

    // Run our code, we don't care about the results
    randomParagraphWithFiveSentences();

    // Since we've spied on every method, we
    // just make sure that at least one was called
    Object.keys(window.chance)
      .some(function (method) {
        return window.chance[method].called;
      })
      .should.be.true;

    // Restore the old chance instance
    window.chance = chanceInstance;
  });
});

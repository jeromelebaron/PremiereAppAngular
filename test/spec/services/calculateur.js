'use strict';

describe('Service: calculateur', function () {

  // load the service's module
  beforeEach(module('premiereAppApp'));

  // instantiate service
  var calculateur;
  beforeEach(inject(function (_calculateur_) {
    calculateur = _calculateur_;
  }));

  it('should do something', function () {
    expect(!!calculateur).toBe(true);
  });

});

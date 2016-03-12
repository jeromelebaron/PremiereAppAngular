'use strict';

describe('Controller: CalculCtrl', function () {

  // load the controller's module
  beforeEach(module('premiereAppApp'));

  var CalculCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculCtrl = $controller('CalculCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CalculCtrl.awesomeThings.length).toBe(3);
  });
});

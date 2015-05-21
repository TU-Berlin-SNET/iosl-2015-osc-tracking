'use strict';

describe('Controller: UnsortedservicesCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var UnsortedservicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnsortedservicesCtrl = $controller('UnsortedservicesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

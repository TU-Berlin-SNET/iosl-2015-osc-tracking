'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) 
  {


  




  $scope.loadData = function() {
    $http.get('brokerData/data' + $scope.selectedValue + '.json').success(function(data) {
        $scope.services = data;
    }
  )
};



$scope.select = function (item) {
       // do something with the item here when the service is clicked  
  };


}]);



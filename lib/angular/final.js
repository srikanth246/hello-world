angular.module('copyExample', [])
   .controller('ExampleController', ['$scope', function($scope) {
     $scope.master= {};

     $scope.update = function(user) {
       // Example with 1 argument
       $scope.master= angular.copy(user);
     };

     $scope.reset = function() {
       // Example with 2 arguments
       angular.copy($scope.master, $scope.user);
     };

     $scope.reset();
   }]);
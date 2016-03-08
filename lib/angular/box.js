var mainApp = angular.module("mainApp", []);
         
         mainApp.controller('studentController', function($scope) {
            $scope.reset = function(){
               $scope.firstName = "";
               $scope.lastName = "";
               $scope.email = "";
            }
            
            $scope.reset();
         });
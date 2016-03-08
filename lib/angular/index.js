var simpleApp = angular.module("simpleApp", []);
simpleApp.controller("simpleCtrl", function($scope) {

$scope.collection = [   { 'firstname':'aaa',
                        'lastname': 'bbbb',
                        'email':'sri.srikanth246@gmail.com',
                        'mobile':9494988930,
                        'H.no':45-78,
                        'village':'aaa',
                        'district':'bbb',


                             }];
                             $scope.reset();
                            });
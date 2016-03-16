var app = angular.module('serviceApp', []);
app.controller('serviceCtrl', function ($scope, $http) {
$http({
method: 'GET',
url: 'sample.html'
}).then(function success(response) {
$scope.myWelcome = response.data;
$scope.statusval = response.status;
$scope.statustext = response.statusText;
$scope.headers = response.headers();
}, function error(response) {
});
});
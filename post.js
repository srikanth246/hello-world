var app = angular.module('putserviceApp', []);
app.controller('putserviceCtrl', function ($scope, $http) {
$scope.name = null;
$scope.age = null;
$scope.adress = null;
$scope.lblMsg = null;
$scope.putdata = function (name, age, adress) {
var data = {
name: name,
age: age,
adress: adress
};
//Call the services
$http.put('/api/users/putmethod', JSON.stringify(data)).then(function (response) {
if (response.data)
$scope.msg = "Put Data Method Executed Successfully!";
}, function (response) {
$scope.msg = "Service not Exists";
$scope.statusval = response.status;
$scope.statustext = response.statusText;
$scope.headers = response.headers();
});
};
});
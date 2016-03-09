var simpleApp = angular.module("simpleApp", []);
simpleApp.controller("simpleCtrl", function($scope) {
$scope.employee = {
	firstname: "",
	lastname: "",
	mobile:"",
	email:"",
	housenumber:"",
	village:"",
	district:""
};
$scope.reset=function(){

$scope.employee = {
	firstname: "",
	lastname: "",
	mobile:"",
	email:"",
	housenumber:"",
	village:"",
	district:""
};
}
$scope.reset();
// $scope.collection=[{ firstname:'aaaa',
//                         $scope.lastname: 'aaaa',
//                         $scope.email:'sri.srikanth246',
//                         $scope.mobile: '94949499830',
//                         $scope.HNo: '123',
//                         $scope.village:'drwrdwe',
//                         $scope.district:'weeewew',
                        
// }];
}); 
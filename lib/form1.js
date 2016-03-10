var app = angular.module("simpleApp", []);

app.controller("simpleController", function ($scope){
$scope.collection=[{name:"sri",lastname:"bbbb",age:26,city:"gdk"},
                   {name:"kanth",lastname:"ggg",age:45,city:"nzb"},
                   {name:"aaaa",lastname:"hjkkk",age:51,city:"knr"}];

 $scope.modifyField = false; 
 $scope.editing = false;
$scope.addEntry=function(){
	if ($scope.editing !== false) {
            $scope.collection[$scope.editing] = $scope.newData;
            $scope.editing = false;
    }
    else
    {
    	$scope.collection.push($scope.newData);
    }
	
	$scope.newData='';
	
};
$scope.removeRow = function(index){
	$scope.collection.splice(index, 1);
};
         
$scope.modify= function(tableData){
		$scope.modifyField = true;
		$scope.editing = $scope.collection.indexOf(tableData);
        $scope.newData = angular.copy(tableData);
			 

};

$scope.editContact = function (tableData) {
        $scope.model.selected = angular.copy(entry);
    };


$scope.reset=function(){
	    $scope.modifyField = false;
        $scope.editing = false;
		$scope.newData='';
	};
});
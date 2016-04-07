
angular.module('articleApp')
.controller("articleCtrl",['$scope', '$http', 'Article' ,function($scope, $http, $Article_Service) {

       $scope.articles_default = $Article_Service.model.get();
       $scope.articles = [];
       $Article_Service.list.get($scope.articles_default).then(function(res){
       	  $scope.articles = res.data;
       })

     
        $scope.remItem = function($index) {
             $scope.articles.splice($index, 1);
          }
       $scope.reset=function(){
		$scope.newData='';
	};
    }]);

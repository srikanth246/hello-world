
var myApp = angular.module('myApp', ['ui.router']);
myApp.controller("FrmController",function($scope,$http) {


 $http.get('/scripts/controllers/comment.json')
    .success(function(data) {
        $scope.comment = data.records;
    });

                $scope.comment = [];
                $scope.btn_add = function() {
                    if($scope.txtcomment !=''){
                    $scope.comment.push($scope.txtcomment);
                    $scope.txtcomment = "";
                    }
                }

                $scope.remItem = function($index) {
                    $scope.comment.splice($index, 1);
                }


            });

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/article1');
    
    $stateProvider
       
        .state('article1', {
            url: '/article1',
            templateUrl: 'partial-article1.html'
        })
     
        .state('article2', {
            url:'/article2',
            templateUrl:'partial-article2.html'      
        }) 

    
});
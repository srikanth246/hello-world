
 var app=angular.module('myApp', []);

    app.controller('HomeCtrl', ['$scope',  function($scope) {

      $scope.comment=false;
      $scope.innerComment=false;
      $scope.datas=[];
      $scope.InnerData=[];
      $scope.innercmt=false;
      $scope.postRepBtn=true;

      $scope.postData=function(txt)
      {
        $scope.comment=true;
        $scope.datas.push(txt);
        $scope.txt='';
      }

      $scope.showInnerComment=function($index)
      {
        console.log($index)
        $scope.innerComment=true;
      }

      $scope.postReplied=function(txt1)
      {
        $scope.InnerData.push(txt1);
        $scope.innercmt=true;
        //$scope.postRepBtn=false;
        $scope.txt1='';
      }

    }]);

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
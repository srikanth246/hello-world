
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
       
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
     
        .state('about', {
            url:'/about',
            templateUrl:'partial-about.html'      
        }) 

        
        .state('course',{
            url:'/course',
            templateUrl:'partial-course.html'
        })
        .state('contact', {
            url:'/contact',
            templateUrl:'partial-contact.html'
        });
});
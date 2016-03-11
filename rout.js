var myapp = angular.module('myapp', ['ui.router,']);
    myapp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
    {
    $urlRouteProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/name",
            templateUrl:'partial-home.html'        
            })     
                            
        .state('services', {
            url: "/services",
            templateUrl:'partial-services.html'         
            })
            
        .state('contact', {
            url: "/contact",
                templateUrl:'partial-contact.html'    
            });
}]);
angular.module('meuChurrascoApp', ['ngRoute', 'ngMaterial'])

.controller('MainCtrl', function MainCtrl($scope, $route, $routeParams, $location) {

})

.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'components/home/home.html',
      controller: 'HomeController'
    })

    .when('/evento', {
      templateUrl: 'components/evento-form/evento-form.html',
      controller: 'EventoFormController'
    })  

    .otherwise({
      redirectTo: '/'
    });
    
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
})
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

    .when('/convidados', {
      templateUrl: 'components/convidados/convidados.html',
      controller: 'ConvidadosController'
    })

    .when('/contribuicoes', {
      templateUrl: 'components/contribuicoes/contribuicoes.html',
      controller: 'ContribuicoesController'
    })

    .otherwise({
      redirectTo: '/'
    });
    
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
})
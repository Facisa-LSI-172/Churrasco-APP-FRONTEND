angular.module('meuChurrascoApp')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'components/home/home.html',
      controller: 'HomeController'
    })

    .when('/evento-form', {
      templateUrl: 'components/evento-form/evento-form.html',
      controller: 'EventoFormController'
    })

    .when('/evento-form/:id', {
      templateUrl: 'components/evento-form/evento-form.html',
      controller: 'EventoFormController'
    })

    .when('/convidados/:id', {
      templateUrl: 'components/convidados/convidados.html',
      controller: 'ConvidadosController'
    })

    .when('/contribuicoes', {
      templateUrl: 'components/contribuicoes/contribuicoes.html',
      controller: 'ContribuicoesController'
    })

    .when('/evento/:id', {
      templateUrl: 'components/evento/evento.html',
      controller: 'EventoController'
    })

    .when('/', {
      templateUrl: 'components/cadastro/cadastro.html',
      controller: 'CadastroController'
    })

    .when('/login', {
      templateUrl: 'components/login/login.html',
      controller: 'LoginController'
    })


    .otherwise({
      redirectTo: '/'
    });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
})
angular.module('meuChurrascoApp')
  .controller('LoginController', function ($scope, $routeParams, $http, $location, LoginService, Usuario) {
    var vm = this;

    $scope.isLogado = function () {
      return LoginService.getUsuario() !== null;
    }

    if (LoginService.getUsuario() !== null) {
      $scope.usuario = new Usuario(LoginService.getUsuario().nome, LoginService.getUsuario().email, null, LoginService.getUsuario().token);
    } else {
      $scope.usuario = new Usuario();
    } 

    $scope.efetuarLogin = function () {
      $scope.error = null;

      LoginService.login($scope.usuario.email, $scope.usuario.senha).then(function (data) {
        LoginService.setUsuario(data);

        if ($scope.isLogado()) {
          $location.path('/home');
        }
      },
        function (error) {
          $scope.error = error
          console.log(error)
        });
    }

    $scope.logout = function () {
      $scope.userName = '';
      $scope.token = null;
      $http.defaults.headers.common.Authorization = '';
      localStorage.setItem('usuario', null);
    }

    if ($scope.isLogado()){
      $location.path('/home');
    }
  })
angular.module('meuChurrascoApp')
  .controller('LoginController', function ($scope, $routeParams, $http, $location, LoginService, Usuario) {
    var vm = this;

    $scope.getUsuario = function () {
      let usuarioLocal = localStorage.getItem('usuario');
      return JSON.parse(usuarioLocal);
    }

    $scope.isLogado = function () {
      return $scope.getUsuario() !== null;
    }

    if ($scope.getUsuario() !== null) {
      $scope.usuario = new Usuario($scope.getUsuario().nome, $scope.getUsuario().email, null, $scope.getUsuario().token);
    } else {
      $scope.usuario = new Usuario();
    } 

    $scope.efetuarLogin = function () {
      $scope.error = null;

      LoginService.login($scope.usuario.email, $scope.usuario.senha).then(function (data) {
        let usuarioLocal = JSON.stringify(data);
        localStorage.setItem('usuario', usuarioLocal)
        $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;

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
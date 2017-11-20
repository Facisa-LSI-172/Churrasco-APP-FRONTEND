angular.module('meuChurrascoApp')
  .controller('CadastroController', function ($scope, $routeParams, $location, $mdDialog, Usuario, CadastroService, LoginService) {
    var vm = this;

    $scope.usuario = new Usuario();


    $scope.efetuarCadastro = function () {
      if ($scope.confirmarSenha != $scope.usuario.senha) {
        $scope.showAlert('Ups!', 'Verifique se as senhas que digitou conferem e tente novamente', 'Ok')
        return;
      }

      CadastroService.cadastrarUsuario($scope.usuario).then(function (data) {
        $scope.showAlert('Bem Vindo', 'Conta criada com sucesso, você será redirecionado para a pagina principal', 'Entendi');
        $scope.efetuarLogin();
      })
    }

    $scope.showAlert = function (titulo, texto, btn) {
      alert = $mdDialog.alert({
        title: titulo,
        textContent: texto,
        ok: btn
      });

      $mdDialog.show(alert)
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

    $scope.isLogado = function () {
      return LoginService.getUsuario() !== null;
    }

    if ($scope.isLogado()) {
      $location.path('/home');
    }   
})
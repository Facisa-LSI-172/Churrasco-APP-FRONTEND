angular.module('meuChurrascoApp')
  .controller('EventoFormController', function ($scope, $routeParams, $location, Evento, EventoService, LoginService) {
    var vm = this;

    $scope.evento = new Evento();
    $scope.idEvento = $routeParams.id;
    $scope.eventoExiste = false;
    $scope.usuario = LoginService.getUsuario();


    if ($scope.idEvento !== undefined) {
      $scope.eventoExiste = true;

      EventoService.getUmEvento($scope.idEvento).then(function (data) {
        $scope.evento = data;
        $scope.getDataFormatada = new Date($scope.evento.data);
      });


      EventoService.getQtdConvidados($scope.idEvento).then(function (data) {
        $scope.qtdConvidados = data;
      });

      EventoService.getQtdContribuicoes($scope.idEvento).then(function (data) {
        $scope.qtdContribuicoes = data;
      })
    }

    $scope.visualizarConvidados = function (idEvento) {
      $location.path('/convidados/' + idEvento)
    }

    $scope.visualizarContribuicoes = function (idEvento) {
      $location.path('/contribuicoes/' + idEvento)
    }

    $scope.salvarOuEditar = function () {
      if ($scope.idEvento !== undefined) {
        EventoService.atualizarEvento($scope.evento, $scope.usuario).then(function (data) {
          $scope.evento = data;
        })

        EventoService.getUmEvento($scope.idEvento).then(function (data) {
          $scope.evento = data;
          $scope.getDataFormatada = new Date($scope.evento.data);
        });

      } else {
        EventoService.criarNovoEvento($scope.evento, $scope.usuario).then(function (data) {
          $scope.evento = data;
          $scope.visualizarContribuicoes($scope.evento.id);
        })

      }
    }

  })
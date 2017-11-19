angular.module('meuChurrascoApp')
  .controller('EventoFormController', function ($scope, $routeParams, $location, Evento, EventoService) {
    var vm = this;

    $scope.evento = new Evento();
    $scope.idEvento = $routeParams.id;
    $scope.eventoExiste = false;

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

    $scope.visualizarConvidados = function () {
      $location.path('/convidados')
    }

    $scope.visualizarContribuicoes = function () {
      $location.path('/contribuicoes')
    }

  })
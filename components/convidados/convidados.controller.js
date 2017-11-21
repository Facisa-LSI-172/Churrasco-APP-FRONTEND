angular.module('meuChurrascoApp')
  .controller('ConvidadosController', function (
    $scope, $routeParams, $mdDialog, ConvidadosService, EventoService, ContribuicoesService, Evento, Convidado
  ) {
    var vm = this;

    $scope.showTabDialog = function (ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'components/convidados/dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function (answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    function DialogController($scope, $mdDialog, ContribuicoesService) {
      $scope.hide = function () {
        $mdDialog.hide();
      };

      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.answer = function (answer) {
        $mdDialog.hide(answer);
      };

      $scope.contribuicoes = ContribuicoesService.pegarContribuicoesSalvasLocalmente();

    }


    $scope.idEvento = $routeParams.id;

    EventoService.getUmEvento($scope.idEvento).then(function (data) {
      $scope.evento = new Evento(data);
      $scope.convidados = data.listaParticipantes;
    });


    $scope.convidado = new Convidado();

    $scope.convidar = function () {
      $scope.evento.listaParticipantes.push($scope.convidado);
      ConvidadosService.convidarUmAmigo($scope.evento).then(function(data){
        console.log(data)
      })
    }
  })



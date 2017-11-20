angular.module('meuChurrascoApp')
  .controller('ContribuicoesController', function ($scope, $routeParams, $mdDialog, ContribuicoesService, Evento, EventoService, Contribuicao) {
    var vm = this;

    $scope.showTabDialog = function (ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'components/contribuicoes/dialog.html',
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


    function DialogController($scope, $mdDialog) {
      $scope.hide = function () {
        $mdDialog.hide();
      };

      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.answer = function (answer) {
        $mdDialog.hide(answer);
      };

      $scope.cadastrarContribuicao = function (contribuicao) {
        ContribuicoesService.salvarContribuicaoLocalmente(contribuicao).then(function () {
          console.log("retornou")
        });
      }
    }


    $scope.todos = [
      {
        nome: '10 Kg de Carne de Sol',
        confirmado: false
      },
      {
        nome: '10 Litros de Refrigerante',
        confirmado: false
      },
      {
        nome: '10 Kg de Carne de Sol',
        confirmado: false
      },
      {
        nome: '10 Litros de Refrigerante',
        confirmado: false
      },
      {
        nome: '10 Kg de Carne de Sol',
        confirmado: false
      },
      {
        nome: '10 Litros de Refrigerante',
        confirmado: false
      },
      {
        nome: '10 Kg de Carne de Sol',
        confirmado: false
      },
      {
        nome: '10 Litros de Refrigerante',
        confirmado: false
      }
    ];

    $scope.idEvento = $routeParams.id;

    $scope.contribuicao = new Contribuicao();

    EventoService.getUmEvento($scope.idEvento).then(function (data) {
      $scope.evento = new Evento(data);
      $scope.convidados = data.listaParticipantes;
    });


    // ContribuicoesService.getContribuicoes($scope.idEvento).then(function (data) {
    //   $scope.contribuicoes = data;
    // })

   
  })



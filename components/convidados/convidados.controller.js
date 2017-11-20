angular.module('meuChurrascoApp')
  .controller('ConvidadosController', function ($scope, $routeParams, $mdDialog, ConvidadosService, EventoService, Evento) {
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

      $scope.contribuicoes = [
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
    }


    $scope.idEvento = $routeParams.id;

    EventoService.getUmEvento($scope.idEvento).then(function (data) {
      $scope.evento = new Evento(data);
      $scope.convidados = data.listaParticipantes;
    });


    $scope.convidado = {
      email: "",
      contribuicao: ""
    }

    $scope.convidar = function () {
      $scope.evento.listaParticipantes.push($scope.convidado);
      ConvidadosService.convidarUmAmigo($scope.evento).then(function(data){
        console.log(data)
      })
    }


  })



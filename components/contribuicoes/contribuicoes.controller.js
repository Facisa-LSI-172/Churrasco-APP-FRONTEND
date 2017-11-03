angular.module('meuChurrascoApp')
  .controller('ContribuicoesController', function ($scope, $routeParams, $mdDialog) {
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
  })


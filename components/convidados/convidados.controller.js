angular.module('meuChurrascoApp')
  .controller('ConvidadosController', function ($scope, $routeParams, $mdDialog) {
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

    $scope.todos = [
      {
        nome: 'Marcelo Brito',
        email: 'marcelobritowd95@gmail.com',
        confirmado: false
      },
      {
        nome: 'Rafael Oliveira',
        email: 'rafael@gmail.com',
        confirmado: false
      },
      {
        nome: 'Magno Dantas',
        email: 'magno@sony.com',
        confirmado: true
      },
      {
        nome: 'Davi Leal',
        email: 'davileal@hotmail.com',
        confirmado: true
      },
      {
        nome: 'Marcelo Brito',
        email: 'marcelobritowd95@gmail.com',
        confirmado: false
      },
      {
        nome: 'Rafael Oliveira',
        email: 'rafael@gmail.com',
        confirmado: false
      },
      {
        nome: 'Magno Dantas',
        email: 'magno@sony.com',
        confirmado: true
      },
      {
        nome: 'Davi Leal',
        email: 'davileal@hotmail.com',
        confirmado: true
      }      
    ];

   
  })



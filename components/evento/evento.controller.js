angular.module('meuChurrascoApp')
  .controller('EventoController', function ($scope, $routeParams, $mdDialog) {
    var vm = this;

    $scope.todos = [
      {
        nome: 'Marcelo Brito',
        email: 'marcelobritowd95@gmail.com',
        confirmado: true,
        contribuicao: '2Kg de Carne de Sol'
      },
      {
        nome: 'Rafael Oliveira',
        email: 'rafael@gmail.com',
        confirmado: true,
        contribuicao: '2Kg de Carne de Sol'
      },
      {
        nome: 'Magno Dantas',
        email: 'magno@sony.com',
        confirmado: true,
        contribuicao: '2Kg de Carne de Sol'
      },
      {
        nome: 'Davi Leal',
        email: 'davileal@hotmail.com',
        confirmado: true,
        contribuicao: '2Kg de Carne de Sol'
      },
      {
        nome: 'Marcelo Brito',
        email: 'marcelobritowd95@gmail.com',
        confirmado: true,
        contribuicao: '2Kg de Carne de Sol'
      },
      {
        nome: 'Rafael Oliveira',
        email: 'rafael@gmail.com',
        confirmado: true,
        contribuicao: '2Kg de Carne de Sol'
      },
      {
        nome: 'Magno Dantas',
        email: 'magno@sony.com',
        confirmado: true,
        contribuicao: '2Kg de Carne de Sol'
      },
      {
        nome: 'Davi Leal',
        email: 'davileal@hotmail.com',
        confirmado: false,
        contribuicao: '2Kg de Carne de Sol'
      }      
    ];

   
  })



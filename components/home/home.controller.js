angular.module('meuChurrascoApp')
  .controller('HomeController', function ($scope, $routeParams, HomeService) {
  var vm = this;

  $scope.params = $routeParams;

  $scope.eventos = HomeService.getTodosEventos();
  

  $scope.retornaDiaData = function(item) {
    let data = new Date(item);
    return data.getDate();
  }

  $scope.retornaMesData = function (item) {
    let data = new Date(item);
    return $scope.mesesDoAno(data.getMonth());
  }


  $scope.mesesDoAno = function(item) {
    switch (item) {
      case 0:
        return 'Janeiro';
        break;

      case 1:
        return 'Fevereiro';
        break;

      case 2:
        return 'Março';
        break;

      case 3:
        return 'Abril';
        break;

      case 4:
        return 'Maio';
        break;

      case 5:
        return 'Junho';
        break;

      case 6:
        return 'Julho';
        break;

      case 7:
        return 'Agosto';
        break;

      case 8:
        return 'Setembro';
        break;

      case 9:
        return 'Outubro';
        break;

      case 10:
        return 'Novembro';
        break;

      case 11:
        return 'Dezembro;'
        break;

      default:
        break;
    }
  }
    
    // console.log($scope.todos[0].data);

  // $scope.todos = [
  //   {
  //     dia: '18',
  //     mes: 'Agos.',
  //     nome: 'Churrasco do Feriadão',
  //     descricao: "Celebrando a volta do namoro do amigo M..."
  //   },
  //   {
  //     dia: '18',
  //     mes: 'Agos.',
  //     nome: 'Churrasco do Feriadão',
  //     descricao: "Celebrando a volta do namoro do amigo M..."
  //   },
  //   {
  //     dia: '18',
  //     mes: 'Agos.',
  //     nome: 'Churrasco do Feriadão',
  //     descricao: "Celebrando a volta do namoro do amigo M..."
  //   },
  // ];
})



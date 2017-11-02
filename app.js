angular.module('meuChurrascoApp', ['ngMaterial']);

angular.module('meuChurrascoApp').controller('MainCtrl', function MainCtrl($scope) {
  var vm = this;

  vm.message = "olar, ta funcionando";

  $scope.currentNavItem = 'page1';

  $scope.goto = function (page) {
    console.log("Goto " + page);
  }

  


  $scope.todos = [
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
    {
      dia: '18',
      mes: 'Novembro',
      nome: 'Churrasco do Feriadão',
      descricao: "Celebrando a volta do namoro do amigo M..."
    },
  ];
});

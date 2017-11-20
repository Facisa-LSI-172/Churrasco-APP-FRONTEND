angular.module('meuChurrascoApp').factory('Contribuicao', function () {

  function Contribuicao(nome) {
    this.nome = nome;
  }

  Contribuicao.prototype = {
    getNome: function () {
      return this.nome;
    }
  }

  return Contribuicao;
})
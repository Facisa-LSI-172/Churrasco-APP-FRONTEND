angular.module('meuChurrascoApp').factory('Convidado', function () {

  function Convidado(nome, email, contribuicao) {
    this.nome = nome;
    this.email = email;
    this.contribuicao = contribuicao;
  }

  Convidado.prototype = {
    getNome: function () {
      return this.nome;
    }
  }

  return Convidado;
})
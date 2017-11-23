angular.module('meuChurrascoApp').factory('Convidado', function () {

  function Convidado(nome, email, contribuicao, confirmado) {
    this.nome = nome;
    this.email = email;
    this.listaContribuicoes = [];
    this.confirmado = confirmado;
  }

  Convidado.prototype = {
    getNome: function () {
      return this.nome;
    }
  }

  return Convidado;
})
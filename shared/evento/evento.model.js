angular.module('meuChurrascoApp').factory('Evento', function () {

  function Evento(nome, descricao, local, data, idOrganizador) {
    this.nome = nome;
    this.descricao = descricao;
    this.local = local;
    this.data = data;
    this.idOrganizador = idOrganizador;
  }

  // Evento.prototype.getNome = function () {
  //   return this.nome;
  // };

  // Evento.prototype.getDataFormatada = function () {
  //   return new Date(this.data);
  // };

  Evento.prototype = {
    getNome: function () {
      return this.nome;
    },

    getDataFormatada: function () {
      return new Date(this.data);
    }
  }

  return Evento;
})
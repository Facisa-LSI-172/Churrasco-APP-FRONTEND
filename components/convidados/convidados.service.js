angular.module('meuChurrascoApp')
  .service('ConvidadosService', function ($http, appConstants) {

  return {
    convidarUmAmigo: function(evento) {
      return $http.put(appConstants.URL + 'evento/atualizar', {
        evento: evento

      }).then(function (response) {
        return response.data;

      }).catch(function (e) {
        console.log('Error: ', e);
        throw e;

      }).finally(function () {
        //   console.log('This finally block');
      });
    },

    pegarConvidadosSalvosLocalmente: function (idEvento) {
      return JSON.parse(localStorage.getItem("convidadosDeEventos"))
    },

    salvarConvidadoLocalmente: function (idEvento, convidado) {
      let convidadoObj = {
        convidado: {},
        evento: ""
      };


      let listaLocais = [];

      if (this.pegarConvidadosSalvosLocalmente(idEvento)) {
        listaLocais = this.pegarConvidadosSalvosLocalmente(idEvento);
      }
      let qtdItensLocais = listaLocais.length;

      contribuicaoObj.evento = idEvento;
      contribuicaoObj.convidado = convidado;
      listaLocais.push(convidadoObj);

      localStorage.setItem("convidadosDeEventos", JSON.stringify(listaLocais))
    }
  }  
});
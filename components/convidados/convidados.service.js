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
      if (localStorage.getItem("convidadosDeEventos") == "[object Object]") {
        return;
      }
      let itemsLocais = JSON.parse(localStorage.getItem("convidadosDeEventos"))
      let pertencemAoEvento = [];

      if (itemsLocais !== null) {
        for (var i = 0; i < itemsLocais.length; i++) {
          if (itemsLocais[i].evento === idEvento) {
            pertencemAoEvento.push(itemsLocais[i])
          }
        }
      }

      return pertencemAoEvento;
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

      convidadoObj.evento = idEvento;
      convidadoObj.convidado = convidado;
      convidadoObj.convidado.listaContribuicoes = convidado.listaContribuicoes[0];
      convidadoObj.convidado.confirmado = false;
      listaLocais.push(convidadoObj);

      localStorage.setItem("convidadosDeEventos", JSON.stringify(listaLocais))
    },

    getQtdConvidadosLocal: function (idEvento) {
      if (localStorage.getItem("convidadosDeEventos") == "[object Object]") {
        return
      }      
      if (this.pegarConvidadosSalvosLocalmente(idEvento).length > 0) {
        return this.pegarConvidadosSalvosLocalmente(idEvento).length;
      }
      return 0;
    },


    removerConvidadosLocais: function (idEvento){
      let itemsLocais = this.pegarConvidadosSalvosLocalmente(idEvento);

      if (itemsLocais !== null) {
        for (var i = 0; i < itemsLocais.length; i++) {
          if (itemsLocais[i].evento === idEvento) {
            itemsLocais.splice(i, 1);
          }
        }
      }

      if (itemsLocais.length === 0) {
        localStorage.removeItem("convidadosDeEventos")
      } else {
        localStorage.setItem("convidadosDeEventos", itemsLocais)
      }
    }
  }  
});
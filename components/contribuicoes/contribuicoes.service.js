angular.module('meuChurrascoApp')
.service('ContribuicoesService', function ($http, appConstants) {

  return {
    getContribuicoes: function (idEvento) {
      return $http.get(appConstants.URL + 'evento/get/' + idEvento)
        .then(function (response) {
          let contribuicoes = [];

          for (var i = 0; i < response.listaParticipantes.length; i++) {
            for (var j = 0; j < response.listaParticipantes[i].listaContribuicoes.length; j++) {
              contribuicoes.push(response.listaParticipantes[i].listaContribuicoes[i].nome)
            }
          } 

          return contribuicoes;

        }).catch(function (e) {
          console.log('Error: ', e);
          throw e;

        }).finally(function () {
          //   console.log('This finally block');
        });
    },

    pegarContribuicoesSalvasLocalmente: function (idEvento) {
      let itemsLocais = JSON.parse(localStorage.getItem("contribuicoesDeEventos"))
      let pertencemAoEvento = [];

      for (var i = 0; i < itemsLocais.length; i++) {
        if (itemsLocais[i].evento === idEvento) {
          pertencemAoEvento.push(itemsLocais[i])          
        }
      }

      return pertencemAoEvento;
    },

    salvarContribuicaoLocalmente: function (idEvento, contribuicao) {
      let contribuicaoObj = {
        nome: "",
        evento: ""
      };


      let listaLocais = [];

      if (this.pegarContribuicoesSalvasLocalmente(idEvento)) {
        listaLocais = this.pegarContribuicoesSalvasLocalmente(idEvento);
      }
      let qtdItensLocais = listaLocais.length;
      
      contribuicaoObj.evento = idEvento;
      contribuicaoObj.nome = contribuicao;
      listaLocais.push(contribuicaoObj);

      localStorage.setItem("contribuicoesDeEventos", JSON.stringify(listaLocais))
    }
  }

});
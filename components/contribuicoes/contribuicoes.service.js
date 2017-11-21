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

    pegarContribuicoesSalvasLocalmente: function () {
      return JSON.parse(localStorage.getItem("contribuicoesDeEventos"))
    },

    salvarContribuicaoLocalmente: function (idEvento, contribuicao) {
      let contribuicaoObj = {
        nome: "",
        evento: ""
      };


      let listaLocais = [];

      if (this.pegarContribuicoesSalvasLocalmente()) {
        listaLocais = this.pegarContribuicoesSalvasLocalmente();
      }
      let qtdItensLocais = listaLocais.length;
      
      contribuicaoObj.evento = idEvento;
      contribuicaoObj.nome = contribuicao;
      listaLocais.push(contribuicaoObj);

      localStorage.setItem("contribuicoesDeEventos", JSON.stringify(listaLocais))
    }
  }

});
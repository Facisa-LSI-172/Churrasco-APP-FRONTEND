angular.module('meuChurrascoApp')
    .service('EventoService', function ($http, appConstants) {


    return {
      getUmEvento: function (idEvento) {
        return $http.get(appConstants.URL + 'evento/get/' + idEvento)
          .then(function (response) {
              return response.data;

          }).catch(function (e) {
              console.log('Error: ', e);
              throw e;

          }).finally(function () {
            //   console.log('This finally block');
          });
      },

      getQtdConvidados: function (idEvento) {
        return $http.get(appConstants.URL + 'evento/get/' + idEvento)
          .then(function (response) {
            return response.data.listaParticipantes.length;

          }).catch(function (e) {
            console.log('Error: ', e);
            throw e;

          }).finally(function () {
            //   console.log('This finally block');
          });
      },

      getQtdContribuicoes: function (idEvento) {
        return $http.get(appConstants.URL + 'evento/get/' + idEvento)
          .then(function (response) {
            let qtdContribuicoes = 0;
            qtdContribuicoes += response.data.organizador.listaContribuicoes.length;
            
            for (var i = 0; i < response.data.listaParticipantes.length; i++) {
              qtdContribuicoes += response.data.listaParticipantes[i].listaContribuicoes.length;
            }

            return qtdContribuicoes;

          }).catch(function (e) {
            console.log('Error: ', e);
            throw e;

          }).finally(function () {
            //   console.log('This finally block');
          });
      }
    }
});
angular.module('meuChurrascoApp')
.service('ContribuicoesService', function ($http, appConstants) {

  return {
    getContribuicoes: function (idEvento) {
      return $http.put(appConstants.URL + 'evento/get' + idEvento)
        .then(function (response) {
          return response.data;

        }).catch(function (e) {
          console.log('Error: ', e);
          throw e;

        }).finally(function () {
          //   console.log('This finally block');
        });
    }
  }

});
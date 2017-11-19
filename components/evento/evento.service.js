angular.module('meuChurrascoApp')
    .service('EventoService', function ($http, appConstants) {


    return {
      getParticipantesPorEvento: function (idEvento) {
        return $http.get(appConstants.URL + 'evento/get/' + idEvento)
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
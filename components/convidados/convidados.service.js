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
    }
  }  
});
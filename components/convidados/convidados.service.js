angular.module('meuChurrascoApp')
  .service('ConvidadosService', function ($http, appConstants) {

  return {
    // getParticipantesPorEvento: function (idEvento) {
    //   return $http.get(appConstants.URL + 'evento/get/' + idEvento)
    //     .then(function (response) {
    //       return response.data;

    //     }).catch(function (e) {
    //       console.log('Error: ', e);
    //       throw e;

    //     }).finally(function () {
    //       console.log('This finally block');
    //     });
    // },
      
    // getTodosUsuarios: function () {
    //   return $http.get(appConstants.URL + 'usuario/getall')
    //     .then(function (response) {
    //       return response.data;

    //     }).catch(function (e) {
    //       console.log('Error: ', e);
    //       throw e;

    //     }).finally(function () {
    //       console.log('This finally block');
    //     });
    // },

    // getUmUsuarios: function (id) {
    //   return$http.get(appConstants.URL + 'usuario/get/' + id)
    //     .then(function (response) {
    //       return response.data;

    //     }).catch(function (e) {
    //       console.log('Error: ', e);
    //       throw e;

    //     }).finally(function () {
    //       console.log('This finally block');
    //     });
    // }
  }  
});
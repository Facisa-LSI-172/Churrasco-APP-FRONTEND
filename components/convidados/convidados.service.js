angular.module('meuChurrascoApp')
  .service('ConvidadosService', function ($http, appConstants) {

  this.getTodosUsuarios = function () {
    $http.get(appConstants.URL + 'usuario/getall')
      .then(function (response) {
        return response.data;

      }).catch(function (e) {
        console.log('Error: ', e);
        throw e;

      }).finally(function () {
        console.log('This finally block');
      });
  }

  this.getUmUsuarios = function (id) {
    $http.get(appConstants.URL + 'usuario/get/' + id)
      .then(function (response) {
        return response.data;

      }).catch(function (e) {
        console.log('Error: ', e);
        throw e;

      }).finally(function () {
        console.log('This finally block');
      });
  }
  
});
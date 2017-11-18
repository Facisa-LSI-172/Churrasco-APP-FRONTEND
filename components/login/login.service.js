angular.module('meuChurrascoApp')
  .service('LoginService', function ($http, appConstants) {

    return {
      login: function (email, senha) {
        return $http.post(appConstants.URL + 'usuario/login', {
          email: email,
          password: senha
          
        }).then(function (response) {
          return response.data;
        });
      }
    };
  

});
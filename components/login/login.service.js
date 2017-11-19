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
      },

      setUsuario: function (data) {
        let usuarioLocal = JSON.stringify(data);
        localStorage.setItem('usuario', usuarioLocal)
        $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;
      },

      getUsuario: function () {
        let usuarioLocal = localStorage.getItem('usuario');
        return JSON.parse(usuarioLocal);
      }
    };

});
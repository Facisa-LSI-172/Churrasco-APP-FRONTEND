angular.module('meuChurrascoApp')
  .service('CadastroService', function ($http, appConstants) {
  
  return {
    cadastrarUsuario: function(usuario){
      return $http.post(appConstants.URL + 'usuario/cadastrar', {
        nome: usuario.nome,
        email: usuario.email,
        password: usuario.senha

      }).then(function (response) {
        return response.data;
      });
    }



  }
 
})
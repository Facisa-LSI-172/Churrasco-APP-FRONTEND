angular.module('meuChurrascoApp').factory('Usuario', function () {

  function Usuario(nome, email, senha, token) {
    this.token = token
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  /**
   * método público
   */
  Usuario.prototype.getNome = function () {
    return this.nome;
  };

  return Usuario;
})
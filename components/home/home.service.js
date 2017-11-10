angular.module('meuChurrascoApp')
    .service('HomeService', function ($http) {

    const base_url = "http://192.168.34.118:8080/meuchurrascoapp/webapi/";
    const get_all_eventos = "evento/getall";
    const et_one_evento = "evento/get/";

    this.getTodosEventos = function() {
        return $http.get( base_url + get_all_eventos )
    }
});
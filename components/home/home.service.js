angular.module('meuChurrascoApp')
.service('HomeService', function ($http) {

    const base_url = "http://127.0.0.1:8080/churrascoapp/webapi/";
    const get_all_eventos = "evento/getall";
    const et_one_evento = "evento/get/";

    getTodosEventos = function(){
        $http.get( base_url + get_all_eventos ).
        then(function(response) {
            return response.data;
        },
        function errorCallback(response) {
            console.log('Erro ao buscar todos os eventos!');
        });
    }

});
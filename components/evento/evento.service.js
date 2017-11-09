angular.module('meuChurrascoApp')
.service('EventoService', function () {

    const base_url = "http://127.0.0.1:8080/churrascoapp/webapi/evento/";
    const get_participantes_por_evento = "/participantes";

    getParticipantesPorEvento = function(id_evento){
        $http.get( base_url + id_evento + get_participantes_por_evento).
        then(function(response) {
            return response.data;
        },
        function errorCallback(response) {
            console.log('Erro ao buscar participantes do evento!');
        });
    }

});
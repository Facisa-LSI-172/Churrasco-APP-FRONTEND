angular.module('meuChurrascoApp')
    .service('EventoService', function ($http, appConstants) {

    this.getParticipantesPorEvento = function(id_evento){
        return $http.get(appConstants.URL + '/evento/participantes/' + id_evento)
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
angular.module('meuChurrascoApp')
    .service('HomeService', function ($http, appConstants) {

    return {
        getEventosParticipando: function (idUsuario) {
            return $http.get(appConstants.URL + 'evento/participante/' + idUsuario)
                .then(function (response) {
                    return response.data;

                }).catch(function (e) {
                    console.log('Error: ', e);
                    throw e;

                }).finally(function () {
                    // console.log('This finally block');
                });
        },

        getEventosOrganizando: function (idUsuario) {
            return $http.get(appConstants.URL + 'evento/organizador/' + idUsuario)
                .then(function (response) {
                    return response.data;

                }).catch(function (e) {
                    console.log('Error: ', e);
                    throw e;

                }).finally(function () {
                    // console.log('This finally block');
                });
        }
    }    
});
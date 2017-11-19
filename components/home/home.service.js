angular.module('meuChurrascoApp')
    .service('HomeService', function ($http, appConstants) {

    return {
        getTodosEventos: function () {
            return $http.get(appConstants.URL + 'evento/getall')
                .then(function (response) {
                    console.log(response.data);
                    return response.data;

                }).catch(function (e) {
                    console.log('Error: ', e);
                    throw e;

                }).finally(function () {
                    console.log('This finally block');
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
                    console.log('This finally block');
                });
        },

        getUmEvento: function (id) {
            return $http.get(appConstants.URL + 'evento/get/' + id)
                .then(function (response) {
                    return response.data;

                }).catch(function (e) {
                    console.log('Error: ', e);
                    throw e;

                }).finally(function () {
                    console.log('This finally block');
                });
        }


    }
    

    
    
});
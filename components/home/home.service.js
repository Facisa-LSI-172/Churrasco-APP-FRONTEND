angular.module('meuChurrascoApp')
    .service('HomeService', function ($http, appConstants) {

    this.getTodosEventos = function () {
        $http.get(appConstants.URL + 'evento/getall')
            .then(function (response) {
                return response.data;

            }).catch(function (e) {
                console.log('Error: ', e);
                throw e;

            }).finally(function () {
                console.log('This finally block');
            });
    }

    this.getUmEvento = function (id) {
        $http.get(appConstants.URL + 'evento/get/' + id)
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
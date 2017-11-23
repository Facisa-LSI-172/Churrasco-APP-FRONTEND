angular.module('meuChurrascoApp')
  .controller('ConvidadosController', function (
    $scope, $rootScope, $routeParams, $mdDialog, ConvidadosService, EventoService, ContribuicoesService, Evento, Convidado
  ) {
    var vm = this;

    $scope.showTabDialog = function (ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'components/convidados/dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function (answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    function DialogController($scope, $rootScope, $mdDialog, ContribuicoesService) {
      $scope.hide = function () {
        $mdDialog.hide();
      };

      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.answer = function (answer) {
        $mdDialog.hide(answer);
      };

      $scope.idEvento = $routeParams.id;     
      $scope.contribuicoes = ContribuicoesService.pegarContribuicoesSalvasLocalmente($scope.idEvento);

      $scope.cadastrarConvidado = function (convidado) {
        ConvidadosService.salvarConvidadoLocalmente($scope.idEvento, convidado);


        // $scope.evento.listaParticipantes.push($scope.convidado);
        // ConvidadosService.convidarUmAmigo($scope.evento).then(function(data){
        //   console.log(data)
        // })

        $scope.hide();
        $rootScope.pegarConvidados($scope.idEvento);
      }

    }


    $scope.idEvento = $routeParams.id;
    $rootScope.convidados = [];

    EventoService.getUmEvento($scope.idEvento).then(function (data) {
      $scope.evento = new Evento(data);

      // if ($scope.evento.listaParticipantes !== null) {
      //   $scope.convidados.push($scope.evento.listaParticipantes);
      // }
    });

    $scope.convidado = new Convidado();


    $rootScope.pegarConvidados = function (id) {
      let itens = ConvidadosService.pegarConvidadosSalvosLocalmente(id);
      
      if (itens == undefined) return;

      for (var i = 0; i < itens.length; i++) {
        $rootScope.convidados.push(itens[i]);
      }
    }
    
    $rootScope.pegarConvidados($scope.idEvento);

    EventoService.getUmEvento($scope.idEvento).then(function (data) {
      console.log(data);

      for (var i = 0; i < data.listaParticipantes.length; i++) {
        $rootScope.convidados.push(data.listaParticipantes[i]);        
      }
    });
  })



angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('SearchCtrl', function($scope, $state, $http, BeerData) {
  $scope.form = {};

  $scope.search = function()
  {
    $http({
      method: 'GET',
      url: 'https://salty-taiga-88147.herokuapp.com/beers/',
      params: {
        name: $scope.form.name,
      }
      }).then(function successCallback(response) {
        $state.go('app.beers');

        BeerData.data = response;

      }, function errorCallback(response) {

      });
  }
})

.factory('BeerData', function(){
  return {data: {}};
})

.factory('BeerData2', function(){
  return {data: {}};
})

.controller('BeersCtrl', function($scope, $http, BeerData, BeerData2) {
  for(i = 0; i < BeerData.data.data.totalResults; i++){
    $scope.id = BeerData.data.data.data[i].id;
    console.log($scope.id);
    $http({
      method: 'GET',
      url: 'https://salty-taiga-88147.herokuapp.com/beers/',
      params: {
        id: $scope.id,
      }
      }).then(function successCallback(response) {

        BeerData2.data = response;

      }, function errorCallback(response) {

      });
     console.log(BeerData2.data.data.data[i].name);
   }

  $scope.beers = [
    { title: BeerData.data.name, id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('BeerCtrl', function($scope, $stateParams, BeerData) {
  console.log($stateParams.id);
})

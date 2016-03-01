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
        abv: $scope.form.abv,
        hasLabels: $scope.form.labels,
        shortName: $scope.form.shortName,
        isOrganic: $scope.form.organic,

      }
      }).then(function successCallback(response) {
        $state.go('app.beers');

        BeerData.data = response.data;

      }, function errorCallback(response) {

      });
  }
})

.factory('BeerData', function(){
  return {data: {}};
})

.controller('BeersCtrl', function($scope, BeerData) {

  $scope.beers = BeerData.data.data;
})

.controller('BeerCtrl', function($scope, $stateParams, BeerData) {
  $scope.beers = BeerData.data.data;
  $scope.id2 = $stateParams.beerID;
})

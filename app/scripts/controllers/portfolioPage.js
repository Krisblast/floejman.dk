'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PortfolioPageCtrl
 * @description
 * # PortfolioPageCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('PortfolioPageCtrl', function ($routeParams, $http,$scope) {
    this.id = $routeParams.id;
    getPageData(this.id);

    function getPageData(id){
       $http.get("data/PortfolioPages/"+id+".json").then(function (response) {
         $scope.pageData = response.data;
      });
    }


  });

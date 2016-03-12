'use strict';

/**
 * @ngdoc function
 * @name premiereAppApp.controller:CalculCtrl
 * @description
 * # CalculCtrl
 * Controller of the premiereAppApp
 */
 angular.module('premiereAppApp')
 .controller('CalculCtrl', function ($scope) {

 	$scope.addition = function(){
 		return (parseInt($scope.premierNombre) + parseInt($scope.secondNombre));
 	};

 	$scope.soustraction = function(){
 		return ($scope.premierNombre - $scope.secondNombre);
 	};

 	$scope.multiplication = function(){
 		return ($scope.premierNombre * $scope.secondNombre);
 	};

 	$scope.division = function(){
 		return ($scope.premierNombre / $scope.secondNombre);
 	};

 });

'use strict';

/**
 * @ngdoc function
 * @name premiereAppApp.controller:CalculCtrl
 * @description
 * # CalculCtrl
 * Controller of the premiereAppApp
 */
 angular.module('premiereAppApp')
 .controller('CalculCtrl', function ($scope, calculateur) {

 	$scope.addition = function(){
 		return calculateur.addition(parseInt($scope.premierNombre), parseInt($scope.secondNombre));
 	};

 	$scope.soustraction = function(){
 		return calculateur.soustraction($scope.premierNombre , $scope.secondNombre);
 	};

 	$scope.multiplication = function(){
 		return calculateur.multiplication($scope.premierNombre, $scope.secondNombre);
 	};

 	$scope.division = function(){
 		return calculateur.division($scope.premierNombre, $scope.secondNombre);
 	};

 });

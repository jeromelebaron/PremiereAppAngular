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

 	$scope.premierNombre = 0;
 	$scope.secondNombre = 0;

 	$scope.addition = function(){
 		return calculateur.addition($scope.premierNombre, $scope.secondNombre);
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

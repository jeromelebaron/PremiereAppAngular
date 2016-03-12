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
 	$scope.afficheResultat = false;

 	$scope.afficherResultats = function(){
 		$scope.afficheResultat = true;
 	};

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

 	$scope.remiseAZero = function(){
 		$scope.afficheResultat = false;
 		$scope.premierNombre = 0;
 		$scope.secondNombre = 0;
 	};

 });

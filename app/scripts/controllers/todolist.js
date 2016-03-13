'use strict';

/**
 * @ngdoc function
 * @name premiereAppApp.controller:TodolistCtrl
 * @description
 * # TodolistCtrl
 * Controller of the premiereAppApp
 */
 angular.module('premiereAppApp')
 .controller('TodolistCtrl', function ($scope) {

 	var todoList = $scope.todoList = [];

 	$scope.ajouterTodo = function(){
 		var newTodo = $scope.todo;

 		todoList.push({
 			title : newTodo,
 			completed : false
 		});

 		$scope.todo = '';
 	};

 	$scope.supprimerTodo = function(todo){
 		todoList.splice(todoList.indexOf(todo),1);
 	};

 	$scope.toutCocher = function(completed){
 		for (var todo in todoList){
 			todo.completed = !completed;
 		}
 	};

 });

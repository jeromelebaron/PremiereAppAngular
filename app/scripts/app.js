'use strict';

/**
 * @ngdoc overview
 * @name premiereAppApp
 * @description
 * # premiereAppApp
 *
 * Main module of the application.
 */
angular
  .module('premiereAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/calcul', {
        templateUrl: 'views/calcul.html',
        controller: 'CalculCtrl',
        controllerAs: 'calcul'
      })
      .when('/toDoList', {
        templateUrl: 'views/todolist.html',
        controller: 'TodolistCtrl',
        controllerAs: 'toDoList'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

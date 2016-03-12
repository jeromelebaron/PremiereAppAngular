'use strict';

/**
 * @ngdoc service
 * @name premiereAppApp.calculateur
 * @description
 * # calculateur
 * Service in the premiereAppApp.
 */
 angular.module('premiereAppApp')
 .service('calculateur', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {

    	addition : function(premierNombre, secondNombre){
    		return premierNombre + secondNombre;
    	},

    	soustraction : function(premierNombre, secondNombre){
    		return premierNombre - secondNombre;
    	},

    	multiplication : function(premierNombre, secondNombre){
    		return premierNombre * secondNombre;
    	},

    	division : function(premierNombre, secondNombre){
    		return premierNombre / secondNombre;
    	}


    };
});

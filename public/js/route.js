(function(){
	'use strict';

	angular.module("myApp", ['ngRoute','ngStorage'])
		.config([
			'$routeProvider',
			'$locationProvider',
			function($routeProvider, $locationProvider){

			 	$routeProvider
			 		.when('/home', { 
			 			templateUrl: 'partials/home.html', 
			 			controller: 'homeCtrl'
			 		})
					.when('/about', { 
						templateUrl: 'partials/about.html'
					})
					.when('/services', { 
						templateUrl: 'partials/services.html'
					})
					.when('/contact', { 
						templateUrl: 'partials/contact.html'
					})
					.when('/success', { 
						templateUrl: 'partials/onSuccess.html',
						controller: 'homeCtrl'
					})
					.when('/registered', { 
						templateUrl: 'partials/home.html',
						controller: 'homeCtrl'
					})
					.when('/item', { 
						templateUrl: 'partials/item.html',
						controller:'itemCtrl'
						
					})
					.otherwise({
						redirectTo:'/home'
					});
			}
		]);
})();


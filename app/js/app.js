/**
 * Angular Aplication.
 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */



'use strict';

angular.module('studyaAPP', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: ''
            })
            .when('/mobile', {
                templateUrl: 'partials/movile.html',
                controller: 'movileCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });
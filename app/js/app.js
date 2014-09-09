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
    'ngRoute'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'mainCtrl'
            })
            .when('/faculty/teachers', {
                templateUrl: '/partials/teachers.html',
                controller: 'teacherCtrl'
            })
            .when('/administrator', {
                templateUrl: '/partials/admin.html',
                controller: 'adminCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        //$locationProvider.html5Mode(true);
    });
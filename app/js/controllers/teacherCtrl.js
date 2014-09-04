/**
* Angular Settings page controller.
    *
* User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
* Date: 2014-07-09
*/

'use strict';

angular.module('studyaAPP')
    .controller('teacherCtrl', function ($scope,Teachers, $location, $window, $routeParams, Students) {

        $scope.teachers = [];
        $scope.files = [];
        $scope.file = "";
        $scope.title = "";
        $scope.student = {
            name:"",
            phoneNumber:"",
            cu:""
        };

        $scope.loadTeachers = function(){
            var career = $location.search();//$routeParams.career;
            $scope.title = career.career;
            Teachers.getAll({id:career.career}).$promise.then(function(data){
                angular.copy(data,$scope.teachers);
                if($scope.teachers.length == 0) {
                    $("#alertNoTeachers").addClass("show");
                    $("#alertNoTeachers").removeClass("hidden");
                    $("#search").addClass("hidden");
                    $("#search").removeClass("show");

                }

            });
        };

        $scope.changeName = function(name){
            $scope.fileSelected = "Descargar Archivo: " + name;
            $scope.file = name;
        };

        $scope.download = function(form){
            if(form.$valid){

                $("#alertWrongDates").addClass("hidden");
                $("#alertWrongDates").removeClass("show");
                $("#alertDontSave").addClass("hidden");
                $("#alertDontSave").removeClass("show");

                Students.registerStudent($scope.student)
                .$promise.then( function(data) {
                    $scope.student={
                        name:"",
                        phoneNumber:"",
                        cu:""
                    };
                    $scope.redirect($scope.file);
                })
                .catch( function(err) {
                    err = err.data;
                    $("#alertDontSave").addClass("show");
                    $("#alertDontSave").removeClass("hidden");
                });
            }
            else{
                $("#alertWrongDates").addClass("show");
                $("#alertWrongDates").removeClass("hidden");
            }
        };

        $scope.redirect = function(name){
           // $location.path("../../api/files/download/" + link);
            $window.location.href= "/../../api/files/download/" + name;
        }




    });
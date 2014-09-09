/**
 * Angular Settings page controller.
 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-08-05
 */

'use strict';

angular.module('studyaAPP')
    .controller('adminCtrl', function ($scope, TeachersAll,Teachers ) {
        $scope.careerSelected = "";
        $scope.listOfTeachers = [];
        $scope.teacher = {
           name: "",
           nameCareer: "",
           nameSubject: "",
           files:[]
        };
        $scope.teacherSelected = {};

        $scope.facultyes = [
           {name:"Economia" , careers: ['Administracion','Economia','Finanzas']},
           {name:"Tecnologia" , careers: ['Ing. Sistemas','Ing. Telecomunicaciones','Ing. Civil']}
        ];
        $scope.careers = [];

        $scope.loadCareers = function(careers){
            angular.copy(careers,$scope.careers);
        };

        $scope.showForm = function(){
           $('#collapseOne').collapse('toggle');
        };

        $scope.reset =function(){
            $scope.teacher = {
                name:"",
                nameCareer:"",
                nameSubject:"",
                files:[]
            };
        };

        $scope.registerTeacher = function(){
            TeachersAll.post($scope.teacher)
                .$promise
                .then(function(data){
                    $scope.showForm();
                    $scope.reset();
                })
                .catch( function(err) {
                    err = err.data;

                });
        };


        $scope.loadTeachers = function(){

            $("#alertNoTeachers").removeClass("show");
            $("#alertNoTeachers").addClass("hidden");

            Teachers.getAll({id:$scope.careerSelected}).$promise.then(function(data){
                angular.copy(data,$scope.listOfTeachers);
                if($scope.listOfTeachers.length == 0) {
                    $("#alertNoTeachers").addClass("show");
                    $("#alertNoTeachers").removeClass("hidden");
                }
            });
        };

        $scope.selectTeacher = function(teacher){
            angular.copy(teacher,$scope.teacherSelected);
            $scope.listOfTeachers.forEach(function(teacher){
                $("#" + teacher._id).removeClass('label-blue');
            });
            $("#" + teacher._id).addClass('label-blue');

            $("#uploadFiles").addClass("show");
            $("#uploadFiles").removeClass("hidden");;
        };


    });

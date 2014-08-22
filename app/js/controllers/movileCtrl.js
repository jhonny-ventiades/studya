/**
* Angular Settings page controller.
    *
* User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
* Date: 2014-07-09
*/

'use strict';

angular.module('studyaAPP')
    .controller('movileCtrl', function ($scope,Careers,Subject, $location, $window) {
        $scope.title = "FACULTADES/CARRERAS";
        $scope.option = "";
        $scope.facultys = [];
        $scope.course = [];
        $scope.files = [];

        $scope.loadFacultys  = function(){
            $("#buttonReturn").hide();
            Careers.get().$promise.then(function(data){
                angular.copy(data,$scope.facultys);
            });
        };

        $scope.showmenu = function(){
            $scope.closeMenu();
            $("#buttonReturn").hide();
            $("#body").addClass('transition');
            $("#body").removeClass('center');
            $("#body").addClass('right');
            $scope.title = "CARRERAS";
            $("#menu").addClass('transition');
            $("#menu").removeClass('left');
            $("#menu").addClass('center');
        };

        $scope.selectedCareer = function(IDfaculty,IDcareer){
            $("#body").addClass('transition');
            $("#body").removeClass('right');
            $("#body").addClass('center');
            $("#buttonReturn").show();
            $scope.title = "MATERIAS";
            $scope.option = "Carreras";
            $("#menu").addClass('transition');
            $("#menu").removeClass('center');
            $("#menu").addClass('left');
            $scope.facultys.forEach(function(faculty){
                if(faculty._id == IDfaculty){
                   faculty.career.forEach(function(career){
                        if(career._id == IDcareer){
                            $scope.course = career.course;
                            return true;
                        }
                    });
                }
            });

            /*
            Subject.get({id:id}).$promise.then(function(data){
                angular.copy(data[0].course,$scope.subjects);
                console.info(data);
            })*/
        };

        $scope.selectSubject = function(nameSubject,files){
            $("#menuDownload").addClass('transition');
            $("#menuDownload").removeClass('right');
            $("#menuDownload").addClass('menu-right');
            $scope.title = "DOWNLOAD";console.info(nameSubject);
            $scope.titleSubject = nameSubject;
            $scope.files = files;
            //$("#menu").addClass('transition');
            //$("#menu").removeClass('center');
            //$("#menu").addClass('left');
        };

        $scope.closeMenu = function(){
            $("#menuDownload").removeClass('transition');
            $("#menuDownload").addClass('right');
            $("#menuDownload").removeClass('menu-right');
            $scope.title = "MATERIAS";
            $scope.titleSubject = "";
            $scope.files = [];
        };

        $scope.redirect = function(link){
           // $location.path("../../api/files/download/" + link);
            $window.location.href= "/../../api/files/download/" + link;
        }

    });
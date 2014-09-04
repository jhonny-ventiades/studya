/**
 * Angular Settings page controller.
 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

'use strict';

angular.module('studyaAPP')
    .controller('mainCtrl', function ($scope) {
        $scope.facultyes=[
            {id:"bussiness" ,       name:"Economía"  ,          careers:["Administracion","Economia","Finanzas"]},
            {id:"tecnology" ,       name:"Tecnologia" ,         careers:["Ing. Sistemas","Ing. Telecomunicaciones","Ing. Civil"]},
            {id:"publicAccount" ,   name:"Contaduria Pública"},
            {id:"idioms" ,          name:"Idiomas"},
            {id:"lawyer" ,          name:"Derecho"},
            {id:"tecnic" ,          name:"Técnica"}
        ];
        $scope.careers = [];

        $scope.facultySelected = function(id , career){

            $("#listOfCareers").slideUp("fast");
            $("#listOfCareers").slideDown("fast");

            angular.copy(career,$scope.careers);
            $scope.facultyes.forEach(function(factulty){
                $("#" + factulty.id).removeClass("label-green");
            });


            $("#" +  id).addClass("label-green");
        }

    });
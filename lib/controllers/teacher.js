/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

'use strict';

var mongoose = require('mongoose'),
    Teacher = mongoose.model('Teacher');


/**
 *  Get information of all subjects
 */
exports.showListSubjects = function (req, res, next) {

    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");

    Teacher.find({}, function (err, teachers) {
        if (err) {
            return next(err);
        }
        if (!teachers){
            return res.json(404);
        }
        return res.json(teachers);
    });
};

/**
 *  Get information of specific teacher
 */
exports.showTeachersByCareer = function (req, res, next) {

    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");

    var career = req.params.id;console.log(career);
    var queryCareer = {nameCareer:career};
    Teacher.find(queryCareer, function (err, careers) {
        if (err) {
            return next(err);
        }
        if (!careers){
            return res.json(404);
        }
        return res.json(careers);
    });
};

/**
 *  Get Carreras
 */
exports.getCareers = function (req, res, next) {

    /*res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
    var subjectId= req.params.id;
    var unwindCareer = {$unwind:('$career')};
    var projectionSubject = {nameFaculty:1,career:1};*/

    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
    var unwindCourse = {$unwind:('$career')};
    var projectionProfessor = {$project:{'career':'$career.nameCareer'}};
    var groupProfessor = {$group:{_id:'$career'}};
    var projection = {$project:{nameCareer:'$_id',_id:1}};
    Subject.aggregate([unwindCourse,projectionProfessor,groupProfessor,projection], function(err, professors){
        if(err){
            return res(next);
        }
        else
        if(!professors){
            return res.json(404);
        }
        else{
            return res.json(professors);
        }
    });
    /*Subject.find({},projectionSubject, function (err, teacher) {
        if (err) {
            return next(err);
        }
        if (!teacher){
            return res.json(404);
        }
        return res.json(teacher);
    });*/
};

/**
 *  Get Facultys
 */
exports.getCareers = function (req, res, next) {

    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
     var subjectId= req.params.id;
     var projectionSubject = {nameFaculty:1,career:1};

     Subject.find({},projectionSubject, function (err, subject) {
     if (err) {
     return next(err);
     }
     if (!subject){
     return res.json(404);
     }
     return res.json(subject);
     });
};
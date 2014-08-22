/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

'use strict';

var mongoose = require('mongoose'),
    Subject = mongoose.model('Subject');


/**
 *  Get information of all subjects
 */
exports.showListSubjects = function (req, res, next) {

    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");

    Subject.find({}, function (err, subjects) {
        if (err) {
            return next(err);
        }
        if (!subjects){
            return res.json(404);
        }
        return res.json(subjects);
    });
};

/**
 *  Get information of specific subject
 */
exports.showtSubjectById = function (req, res, next) {

    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");

    var subjectId = req.params.id;
    var querySubject = {_id:subjectId};
    Subject.find(querySubject, function (err, subject) {
        if (err) {
            return next(err);
        }
        if (!subject){
            return res.json(404);
        }
        return res.json(subject);
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
    /*Subject.find({},projectionSubject, function (err, subject) {
        if (err) {
            return next(err);
        }
        if (!subject){
            return res.json(404);
        }
        return res.json(subject);
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
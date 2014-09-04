/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

'use strict';

var mongoose = require('mongoose'),
    Teacher = mongoose.model('Teacher');

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
 * Create teacher
 */
exports.registerTeacher = function (req, res) {

    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");

    var newTeacher = new Teacher(req.body);
    newTeacher.save(function(err) {
        if (err) return res.json(400, err);
        return res.json(200);
    });
};


/**
 * Adding a new file
 */
exports.updateFiles =  function(req,res,next){

    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");

    var brandIdUrl = req.params.id;
    var brandIdBody = req.body._id;
    var filterOptions = req.body;
    var options= {upsert:false};
    if(brandIdUrl===brandIdBody){
        delete filterOptions["_id"];
        Teacher.findByIdAndUpdate(brandIdUrl,filterOptions,options,function(err){
            if(err) {
                return next(err);
            }
            return res.json(200);
        })
    }
    else{
        return res.json(409)
    }
};

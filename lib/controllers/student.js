/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

'use strict';

var mongoose = require('mongoose'),
    Student = mongoose.model('Student');


/**
 * Create brand
 */
exports.registerStudent = function (req, res) {
console.log(req.body);
    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");

    var newStudent = new Student(req.body);
    newStudent.save(function(err) {
        if (err) return res.json(400, err);
        return res.json(200);
    });
};
/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */
'use strict';

// require the mongoose module and the Schema to inherit from
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Teacher Schema
 *
 */
var TeacherSchema = new Schema(
    {
        name:String,
        nameCareer:String,
        nameSubject:String,
        files:[
            {
            nameFile:String
        }]
    });

// register the model.
mongoose.model('Teacher', TeacherSchema);

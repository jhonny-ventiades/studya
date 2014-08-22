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
 * Subject Schema
 *
 */
var SubjectSchema = new Schema(
    {
        nameFaculty: String,
       career:[
        {
            nameCareer:String,
            course: [
                {
                    nameCourse: String,
                    subjects: [
                        {
                            nameSubject: String,
                            professor: String,
                            files:[
                                {
                                    name:String,
                                    link:String
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        ]
    });

// register the model.
mongoose.model('Subject', SubjectSchema);

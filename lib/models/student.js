/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-08-02
 */
'use strict';

// require the mongoose module and the Schema to inherit from
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Teacher Schema
 *
 */
var StudentSchema = new Schema(
    {
        cu:String,
        name:String,
        phoneNumber:Number
    });

// register the model.
mongoose.model('Student', StudentSchema);

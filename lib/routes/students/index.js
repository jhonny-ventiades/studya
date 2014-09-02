/**
 * Created by jhonny on 02-09-14.
 */

/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */
'use strict';

var student = require('../../controllers/student');
/**
 * Application routes
 */
module.exports = function(app) {
    app.route('/api/students')
        .post(student.registerStudent);

};

/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */
'use strict';

var teacher = require('../../controllers/teacher');
/**
 * Application routes
 */
module.exports = function(app) {
    app.route('/api/teachers/:id')
        .get(teacher.showTeachersByCareer);
    app.route('/api/teachers')
        .post(teacher.registerTeacher);
    app.route('/api/teachers/update/files/:id')
        .post(teacher.updateFiles)

};

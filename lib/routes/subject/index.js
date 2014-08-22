/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */
'use strict';

var subject = require('../../controllers/subject');
/**
 * Application routes
 */
module.exports = function(app) {
    app.route('/api/subjects')
        .get(subject.showListSubjects);
    app.route('/api/subjects/:id')
        .get(subject.showtSubjectById);
    app.route('/api/careers')
        .get(subject.getCareers);

};

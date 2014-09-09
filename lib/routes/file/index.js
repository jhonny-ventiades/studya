/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */



'use strict';

var files = require('../../controllers/file.js');


module.exports = function(app) {
    app.route('/api/files/download/:id')
        .get(files.downloadByID);

    app.route('/api/upload/file')
        .post(files.upload);
};

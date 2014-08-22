/**
 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

'use strict';

var controllers = require('../controllers');
var middleware = require('../middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  require('./subject')(app);
  require('./file')(app);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(controllers.partials);

    app.route('/*')
        .get(middleware.redirect, controllers.index);
};

/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

'use strict';

var express = require('express'),
    favicon = require('static-favicon'),
    morgan = require('morgan'),
    errorHandler = require('errorhandler'),
    path = require('path'),
    config = require('./config');

/**
 * Express configuration
 */
module.exports = function(app) {
  var env = app.get('env');

  if ('development' === env) {

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

    app.use(express.static(path.join(config.root, '.tmp')));
    //app.use(express.static('rootPath', '.tmp'));
    app.use(express.static(path.join(config.root, 'app')));
      //app.use(express.static('rootPath', 'app'));
    app.set('views', config.root + '/app/views');

      app.use('/',express.static(path.join(config.root, '/app/views')));
      app.use(express.static(path.join(config.root, '/app')));
  }

  /*if ('production' === env) {
    //app.use(compression());
    //app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('views', config.root + '/app/views');
  }*/

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(morgan('dev'));

  // Error handler - has to be last
  /*if ('development' === app.get('env')) {
    app.use(errorHandler());
  }*/
};
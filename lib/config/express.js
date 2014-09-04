/**

 *
 * User: Jhonny Ventiades<jhonny.ventiadesg@gmail.com>
 * Date: 2014-07-09
 */

'use strict';

var express = require('express'),
    favicon = require('static-favicon'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    path = require('path'),
    config = require('./config');

/**
 * Express configuration
 */
module.exports = function(app) {
  var env = app.get('env');
    console.log(env);
    app.use(function noCache(req, res, next) {
    if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'app')));
    app.set('views', config.root + '/app/views');

      app.use('/',express.static(path.join(config.root, '/app/views')));
      app.use(express.static(path.join(config.root, '/app')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('views', config.root + '/app/views');

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(morgan('dev'));
    app.use(bodyParser());
    app.use(bodyParser({uploadDir : './files'}));
    app.use(errorHandler());


};

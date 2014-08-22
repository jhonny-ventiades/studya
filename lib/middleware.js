

'use strict';

/**
 * Custom middleware used by the application
 */
module.exports = {

    redirect: function(req, res, next) {
        next();
    }
};
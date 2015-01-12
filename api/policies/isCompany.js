'use strict';
/* jshint unused:false */

/**
 * hasJsonWebToken
 *
 * @module      :: Policy
 * @description :: checks if this user is company level user;
 *
 * @docs        :: http://waterlock.ninja/documentation
 */
module.exports = function(req, res, next) {
    waterlock.validator.validateTokenRequest(req, function(err, user){
        if(err){
            return res.forbidden(err);
        }
        if(user.accountType==='company'){
            next();
        } else {
            return res.forbidden({'status':'NG'});
        }
    });
};

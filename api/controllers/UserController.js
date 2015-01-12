/**
 * UserController.js 
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
//    create and destroy is added to disable default access for blue print routes
//    find and findOne is left so that admin users can access the users from the default blue print routes
//    find:function(req,res){
//    },
//    findOne:function(req,res){
//    },
    create:function(req,res){
        return res.json({'status':'NG'});
    },
    destroy:function(req,res){
        return res.json({'status':'NG'});
    },
    update:function(req,res){
        // there is for sure a session because policies should blocked off any non auth-ed user
        User.update({id:req.session.user.id},req.body).exec(function(err,updated){

            if(err) return res.json({'status':'NG'});
            updated.status=200;
            return res.json(updated);
        });
    }//,
//    action:function(req,res){
//
//    }
});
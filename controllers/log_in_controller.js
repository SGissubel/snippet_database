//sign_in
//doesn't need much change?

var bcrypt = require('bcryptjs');
var models  = require('../models');
var express = require('express');
var router  = express.Router();

var findUserDeviceById = function(c){
    // return the promise itself
    return models.Snippet.findAll().then(function(device) {
        if (!device) {
            return 'not fOUNnd';
        }else {
            var data_answer = {};
            for (var i in device) {
                data_answer[i] = device[i].dataValues;
            }
            return data_answer;
        }
    });
};
var findUserDeviceById = function(comp){
    // return the promise itself
    return models.Snippet.findAll(comp).then(function(device) {
        if (!device) {
            return 'not find';
        }else {
            var data_answer = {};
            for (var i in device) {
                data_answer[i] = device[i].dataValues;
            }
            return data_answer;
        }
    });
};
    // models.Snippet.findAll({
    //     where: {user_id: req.session.id}
    // }).then(function(response){
    //     console.log('ehll');
    //     snippet: response.snippet;
    //     res.render('log_in/index')
    // })
//this is the users_controller.js file
router.get('/', function(req,res) {
	res.render('/log_in/index', {
        logged_in: req.session.logged_in,
        id: req.session.id,
        screen_name: req.session.name,
        user_id:req.session.user_id
    });
});

router.get("/:snippet_id", function(req,res){
    findUserDeviceById({where:{user_id:req.params.snippet_id}}).then( function(UserDevice) {
        res.send({snippet:UserDevice})
    });
})
router.get("/nav/:snippet_id", function(req,res){
    var c = "where"
    var obj = {};

    if (req.params.snippet_id == ("css"||"sass"||"bootstrap")) {
        var c = {
            where: {
                $or: [{
                    'css': 1
                }, {
                    'sass': 1
                }, {
                    'bootstrap': 1
                }]
            }
        };
    }else if(req.params.snippet_id == ("javascript"||"jquery"||"node")){
        var c = {
            where: {
                $or: [{
                    'javascript': 1
                }, {
                    'jquery': 1
                }, {
                    'node': 1
                }]
            }
        };
    }else if (req.params.snippet_id == ("sql"||"mysql"||"mongo")){
        var c = {
            where: {
                $or: [{
                    'sql': 1
                }, {
                    'mysql': 1
                }, {
                    'mongo': 1
                }]
            }
        };
    }

    console.log(c);
    findUserDeviceById(c).then( function(UserDevice) {
        res.send({snippet:UserDevice})
    });
})


module.exports = router;

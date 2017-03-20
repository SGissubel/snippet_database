//sign_in
//doesn't need much change?

var bcrypt = require('bcryptjs');
var models  = require('../models');
var express = require('express');
var router  = express.Router();

//this is the users_controller.js file
router.get('/new', function(req,res) {
	res.render('users/new');
});

router.get('/sign-in', function(req,res) {
	res.render('users/sign_in');
});

router.get('/sign-out', function(req,res) {
  req.session.destroy(function(err) {
     res.redirect('/people')
  })
});

//if user trys to sign in with the wrong password or email tell them that on the page
router.post('/login', function(req, res) {
  models.User.findOne({
    where: {screen_name: req.body.screen_name}
  }).then(function(user) {

		if (user == null){
		  res.redirect('/users/sign-in')
		}

    bcrypt.compare(req.body.password_hash , user.dataValues.password_hash, function(err, result) {
        if (result == true){

            req.session.logged_in = true;
            req.session.user_id = user.id;
            req.session.user_screen_name = user.screen_name;
            req.session.name = user.name;


            res.render('log_in/index',{
                logged_in: req.session.logged_in,
                id: req.session.id,
                screen_name: req.session.user_screen_name,
                name:req.session.name,
                user_id: req.session.user_id
                });
        }else{
		      res.redirect('/users/sign-in')
		    }
    });
  })
});

router.post('/create', function(req,res) {
	models.User.findAll({
    where: {screen_name: req.body.screen_name}
  }).then(function(users) {

		if (users.length > 0){
			console.log(users)
			res.send('we already have an screen_name or username for this account')
		}else{
			
			bcrypt.genSalt(10, function(err, salt) {
					bcrypt.hash(req.body.password, salt, function(err, hash) {
						models.User.create({
							screen_name: req.body.screen_name,
							password_hash: hash,
                            name: req.body.name
						}).then(function(user){

							req.session.logged_in = true;
							req.session.user_id = user.id;
							req.session.user_screen_name = user.screen_name;
							req.session.name = user.name;

                            res.render('log_in/index',{
                                logged_in: req.session.logged_in,
                                id: req.session.id,
                                screen_name: req.session.user_screen_name,
                                name: req.session.name,
                                user_id: req.session.user_id
                            });
						});
					});
			});

		}
	});
});

module.exports = router;

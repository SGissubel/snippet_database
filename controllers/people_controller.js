
//have not touched this from class model

//could use this for 'other_users' -->to look up the profile and code-snippets??


var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    res.render('people/index')
});

router.get('/:person_id', function(req, res) {
  models.Person.findOne({
    include: [ models.Task ],
    where: {
      id: req.params.person_id
    }
  }).then(function(person) {
    res.render('people/show', {
      logged_in: req.session.logged_in,
      id: person.id,
      screen_name: person.name,

    })
  });
});

router.put('/update/:person_id', function(req, res) {
  models.Person.update({
    name: req.body.name,
    age: req.body.age
  },
  {
    where: { id : req.params.person_id }
  }
).then(function() {
    res.redirect('/people/' + req.params.person_id);
  });
});

router.post('/create', function(req, res) {
  models.Snippet.create({
    title: req.body.title,
    

    // name: req.body.name,
    // // email: req.body.email,
    // age: req.body.age
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:person_id/destroy', function(req, res) {
  models.Person.destroy({
    where: {
      id: req.params.person_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;

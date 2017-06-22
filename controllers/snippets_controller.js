
var models  = require('../models');
var express = require('express');
var router  = express.Router();


// router.get('/show', function(req, res) {
//     res.render('people/show')
// });

// router.post('/:person_id/snippet/create', function (req, res) {
//   models.Snippet.create({
//     snippet: req.body.snippet,
//     person_id: req.params.person_id
//   }).then(function() {
//     res.redirect('/');
//   });
// });

// router.get('/', function(req, res) {
//   models.Snippet.findAll({}).then(function(results){
//     res.render('/log_in/index', {
//       snippet: results,
//     });

//   res.json(snippet);
//   res.render(snippet);
// });
// });


router.post('/create', function(req, res) {
    var tagString = [];
    for (var i in Object.keys(req.body)){
        if ((Object.keys(req.body)[i] != 'title')&&(Object.keys(req.body)[i] != 'snippet')){
            tagString.push((Object.keys(req.body)[i]));
        }
    }
    var seq_params = {};
    for (var i in tagString){
        seq_params[tagString[i]] = 1;
    }
    seq_params["user_id"] = req.session.user_id;
    seq_params["title"] = req.body.title;
    seq_params["snippet"] = req.body.snippet;
    tagString = tagString.toString();
    tagString = tagString.replace(/,/g, ", ");
    seq_params["tag"] = tagString;

    console.log(seq_params);
    models.Snippet.create(seq_params).then(function(result) {
        // res.redirect('/users/login');
        res.render('log_in/index',{
            logged_in: req.session.logged_in,
            id: req.session.id,
            screen_name: req.session.user_screen_name,
            name:req.session.name,
            user_id: req.session.user_id
        });
    });
});

// DELETE /snippet/destroy/4
//     req.params.id => 4
router.delete('/destroy/:id', function(req, res) {
    console.log("======req.param.id======");
    console.log(req.params.id);
    //do a delete mysql query 
    console.log("======req.param.id======");
    models.Snippet.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.send(req.params.id);
    });

})
module.exports = router;

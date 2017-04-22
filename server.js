var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var Models = require("./models");
var application_controller = require('./controllers/application_controller');
var people_controller = require('./controllers/people_controller');
var users_controller = require('./controllers/users_controller');
var snippets_controller = require('./controllers/snippets_controller');
var log_in_controller = require("./controllers/log_in_controller");
var PORT = process.env.PORT || 3000;
var session = require('express-session');

var cookieSession = require('cookie-session');

var app = express();

// override POST to have DELETE and PUT
app.use(methodOverride('_method'))

//allow sessions
// app.use(session({ secret: 'app', cookie: { maxAge: 900000 }, //this is 15 minute sessions. 
//     resave: false,
//     saveUninitialized: false}));
app.use(cookieParser());

app.use(cookieSession({
	name: 'session',
	keys: [0],
	maxAge: 24 * 60 * 60 * 1000
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));

  app.get("/show", function(req, res) {
  res.sendFile(path.join(__dirname, "/view/people/show.handlebars"));
});

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', application_controller);
app.use('/users', users_controller);  //prepending the route
app.use('/snippet', snippets_controller);
app.use('/people', people_controller);
app.use('/log_in', log_in_controller);


// Models.sequelize.sync({ force: false }).then(function() {
//   app.listen(PORT, function() {
//     console.log(`Listening on PORT: ${PORT}`);
//  	})
//  });

module.exports = app;



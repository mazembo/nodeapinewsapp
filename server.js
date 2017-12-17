// author mazembo mavungu mazemb_eddy@yahoo.fr 
// this is an api code for newsapi
// It interfaces our mongodb data and is expected to be consumed by front end clients
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Article = require('./api/models/newsModel'),
  bodyParser = require('body-parser');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/news');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/newsRoutes'); // importing routes
routes(app); //register the route

app.listen(port);

console.log("My newsapp RESTful API server started on: " + port );
app.use(function(req, res){
  res.status(404).send({url: req.originalUrl + ' not found'})
});

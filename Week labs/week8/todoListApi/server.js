const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://haonngcs220336@fgwweb2.sleft.mongodb.net');
//mongoose.connect('mongodb://haonngcs220336@fgwweb2.sleft.mongodb.net/pubs');
mongoose.connect('mongodb+srv://haonngcs220336:haonngcs220336@fgwweb2.sleft.mongodb.net/?retryWrites=true&w=majority&appName=FGWWeb2');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
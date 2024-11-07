const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    routes = require('./api/routes/vocabRoutes'),
    port = process.env.PORT || 3000,
    app = express();
global.Vocab = require('./api/models/vocabModel');

// mongoose instance connection url connection
//mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://haonngcs220336@fgwweb2.sleft.mongodb.net');
//mongoose.connect('mongodb://haonngcs220336@fgwweb2.sleft.mongodb.net/pubs');
mongoose.connect('mongodb+srv://haonngcs220336:haonngcs220336@fgwweb2.sleft.mongodb.net/?retryWrites=true&w=majority&appName=FGWWeb2');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//const routes = require('./api/routes/vocabRoutes'); //importing route
routes(app); //register the route

app.listen(port);
app.use((req,res) => {
    res.status(404).send({url: `${req.originalUrl} not found`});
});

console.log('todo list RESTful API server started on: ' + port);
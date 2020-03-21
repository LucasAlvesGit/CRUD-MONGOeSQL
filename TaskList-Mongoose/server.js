const express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

const routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);


console.log('Servidor funfando... http://localhost:' + port);
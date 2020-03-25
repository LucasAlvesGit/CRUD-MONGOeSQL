const express = require('express');
const TaskController = require('./controllers/TaskController');
const routes = express.Router();

routes.get('/tasks', TaskController.get)
routes.post('/tasks', TaskController.post);
routes.put('/tasks/:id', TaskController.update)
routes.delete('/tasks/:id', TaskController.delete);

module.exports = routes;

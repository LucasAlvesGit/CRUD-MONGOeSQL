const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const TaskModel = require('../models/TaskModel')

const connection = new Sequelize(dbConfig);

TaskModel.init(connection);

module.exports = connection;
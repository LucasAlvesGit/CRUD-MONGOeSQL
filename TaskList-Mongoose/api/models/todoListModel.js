'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Insira um nome para a sua tarefa'
    },
    Created_data: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pendente', 'em andamento ...', 'Completo!']
        }],
        default: ['pendente']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);

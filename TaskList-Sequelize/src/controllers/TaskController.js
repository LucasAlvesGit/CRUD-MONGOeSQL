const Tarefas = require('../models/TaskModel');
module.exports = {
    
    async get(req, res){
        try {
            const tarefa = await Tarefas.findAll();
        return res.status(200).send({
            tarefa: tarefa
        })
        } catch (error) {
            return res.status(400).send({message: 'Requisição inválida !'})
        } 
    },

    async post(req, res){
      try {
          const { task, description, status } = req.body
          const newTasks = Tarefas.create({ task, description, status })
        return res.status(200).send({
            NewTask: newTasks.task,
            Operacao: 'Cadastrado com sucesso !' 
        })
      } catch (error) {
          return res.status(500).send({message: 'Falha ao cadastrar tarefa'})
      }  
    },
     async delete(req, res) {
         try {
            await Tarefas.destroy({ where: { id: req.params.id } })
             res.status(201).send({
                 message: 'Deletado com sucesso !'
             })
         } catch (error) {
             res.status(500).send({ message: 'Falha ao deletar tarefa'})
         }
     },
     async update(req, res){
        // const { tarefa, descricao, status } = req.body;
        try {
            await Tarefas.update(req.body, {where: { id: req.params.id }})
            res.send({message: "Ok !"})
        } catch (error) {
            res.status(400).json({ message: 'Falha ao deletar tarefa'})
        }
     }
};

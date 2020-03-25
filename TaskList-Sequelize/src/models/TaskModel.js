const { Model, DataTypes } = require('sequelize');

class Tasks extends Model{
    static init(sequelize){
        super.init({
            task: DataTypes.STRING,
            description: DataTypes.STRING,
            status: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Tasks;
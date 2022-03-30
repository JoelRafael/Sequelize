const {Model, DataTypes} = require('sequelize')
const sequelize = require("../Conexion/db");

class User extends Model {}
User.init({
name: DataTypes.STRING,
apellido: DataTypes.STRING
},{
   sequelize,
   modelName:"user"
});

module.exports = User
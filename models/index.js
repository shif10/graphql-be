const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const Task = sequelize.define('Task', {

    title: {
        type: DataTypes.STRING,
        AllowNull: true
    },
    description: {
        type: DataTypes.TEXT,
    }
})
sequelize.sync()
module.exports = { sequelize, Task }
const Sequelize = require('sequelize')

const sequelize = new Sequelize('band-project-server', 'postgres', 'password',{
  host: 'localhost',
  dialect: 'postgres'
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db
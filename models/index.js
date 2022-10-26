const Sequelize = require('sequelize')

const sequelize = new Sequelize('band-project-server', 'postgres', 'password',{
  host: 'localhost',
  dialect: 'postgres'
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require('./user')(sequelize, Sequelize)

module.exports = db
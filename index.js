require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models/index')

const userController = require('./controllers/userController')

app.use(require('./middleware/headers'))
app.use(express.json())

app.use('/user', userController)

db.sequelize.sync()

app.listen(5022, () => {
  console.log("Hello from a-miller branch")
})
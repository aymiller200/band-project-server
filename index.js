require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models/index')

app.use(express.json())
db.sequelize.sync()

app.listen(5022, () => {
  console.log("Hello from a-miller branch")
})
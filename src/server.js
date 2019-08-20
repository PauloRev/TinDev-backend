const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const databaseConfig = require('./config/database')

class App {
  constructor () {
    this.express = express()
    this.express.use(cors())
    this.express.use(express.json())

    this.database()
    this.routes()
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express

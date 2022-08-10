const express = require('express')
const app = express()

const heroes = require('../heroes')
const { verifyHeroe } = require('../middlewares/heroes')

app.get('/', (req, res, next) => {
  res.json(heroes)
  next()
})

app.get('/:slug', verifyHeroe, (req, res, next) => {
  res.json(req.heroe)
  next()
})

module.exports = app
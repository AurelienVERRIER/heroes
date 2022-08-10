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

app.get('/:slug/powers', verifyHeroe, (req, res, next) => {
  res.json(req.hero).power
  res.send('ajouté!')
  next()
})

app.post('/:slug/powers', verifyHeroe, (req, res, next) => {
  res.json(req.hero)
  next()
})

app.put('/:slug/powers', verifyHeroe, (req, res, next) => {
  
  next()
})

module.exports = app